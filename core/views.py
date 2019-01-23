from django.shortcuts import render, redirect
from django.core import serializers
from core.models import User, Report, Email
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.http import Http404
import smtplib
import json
from django.db.models import Count
from django.contrib import messages
from core.forms import ReportForm, WebsiteReportForm
from django.core.mail import EmailMessage
import base64
from registration.backends.simple.views import RegistrationView


def index(request):
    return render(request, 'index.html')


def screenshot_decoder(dataUrl):
    ext, image_data = dataUrl.split(";base64,")
    binary_pad = (3-(len(image_data) % 3)) * "="
    png = base64.b64decode(image_data + binary_pad)
    return png


def ext_create_report(request):
    form_class = ReportForm
    if request.method == "POST":
        form = ReportForm(request.POST)
        if form.is_valid():

            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            send_to = [f.strip()
                       for f in form.cleaned_data['send_to'].split(',') if f.strip()]

            screenshot = form.cleaned_data['screenshot']
            screenshot_png = screenshot_decoder(screenshot)
            image = form.cleaned_data['image']
            msg = EmailMessage(
                subject, message, 'info@get-justice.org', send_to)
            msg.content_subtype = "html"
            if screenshot:
                msg.attach('screenshot.png', screenshot_png, 'image/png')
                msg.send()
                django_message = f"Your report was sent! Thanks for helping fight injustice!"
                messages.add_message(request, messages.SUCCESS, django_message)
                return render(request, 'success.html', {form: form, })
            elif image:
                msg.attach(image.name, image.read(), image.content_type)
                msg.send()
                django_message = f"Your report was sent! Thanks for helping fight injustice!"
                messages.add_message(request, messages.SUCCESS, django_message)
                return render(request, 'success.html', {form: form, })
            else:
                msg.send()
                django_message = f"Your report was sent! Thanks for helping fight injustice!"
                messages.add_message(request, messages.SUCCESS, django_message)
                return render(request, 'success.html', {form: form, })
        else:
            form = form_class()
            django_message = f"For some reason, your report was not sent. Please try again."
            messages.add_message(request, messages.ERROR, django_message)
    else:
        form = ReportForm()
    return render(request, 'ext_create_report.html', {
        'form': form,
    })


def create_report(request):
    form_class = WebsiteReportForm

    if request.method == "POST":
        form = WebsiteReportForm(request.POST, files=request.FILES)

        if form.is_valid():

            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            send_to = [f.strip()
                       for f in form.cleaned_data['send_to'].split(',') if f.strip()]

            image = form.cleaned_data['image']
            msg = EmailMessage(
                subject, message, 'info@get-justice.org', send_to)
            msg.content_subtype = "html"
            if image:
                msg.attach(image.name, image.read(), image.content_type)
                msg.send()
                django_message = f"Your report was sent! Thanks for helping fight injustice!"
                messages.add_message(request, messages.SUCCESS, django_message)
                return render(request, 'success.html', {form: form, })
            else:
                msg.send()
                django_message = f"Your report was sent!"
                messages.add_message(request, messages.SUCCESS, django_message)
                return render(request, 'success.html', {form: form, })
        else:
            form = form_class()
            django_message = f"For some reason, your report was not sent. Please try again."
            messages.add_message(request, messages.ERROR, django_message)

    else:
        form = WebsiteReportForm()
    return render(request, 'create_report.html', {
        'form': form,
    })


def about(request):
    return render(request, 'about.html')


def faq(request):
    return render(request, 'faq.html')


def terms(request):
    return render(request, 'terms.html')


def reps(request):
    return render(request, 'reps.html')


def rights(request):
    return render(request, 'rights.html')


def privacy(request):
    return render(request, 'privacy.html')


def success(request):
    return render(request, 'success.html')


def get_user(email):
    try:
        return User.objects.get(email=email.lower())
    except User.DoesNotExist:
        return None


def login_user(request):
    email = request.POST['email']
    password = request.POST['password']
    username = get_user(email)
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            django_message = f"You are logged in. Please click the extension button again to capture the screenshot and send the report. Thanks. "
            messages.add_message(request, messages.SUCCESS, django_message)
            return render(request, 'ext_report')
        else:

            django_message = f"You are  not logged in. You cans till send the report anonymously. Thanks. "
            messages.add_message(request, messages.SUCCESS, django_message)
            return render(request, 'ext_report')
    else:
        return render(request, 'ext_report')
