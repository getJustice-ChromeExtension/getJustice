from django.shortcuts import render, redirect
from django.core import serializers
from core.models import User, Report, Email
from django.core.mail import send_mail
import smtplib
import json
from django.db.models import Count
from django.contrib import messages
from core.forms import ReportForm
from django.core.mail import EmailMessage
import base64


def index(request):
    return render(request, 'core/index.html')

def screenshot_decoder(dataUrl):
    ext, image_data = dataUrl.split(";base64,")
    binary_pad = (3-(len(image_data) % 3)) * "="
    png = base64.b64decode(image_data + binary_pad)
    return png


def create_report(request):
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
            msg = EmailMessage(
                subject, message, 'getJusticereport@gmail.com', send_to)
            msg.content_subtype = "html"

            msg.attach('screenshot.png', screenshot_png, 'image/png')
            msg.send()
            django_message = f"Your report was sent!"
            messages.add_message(request, messages.SUCCESS, django_message)
            return render(request, 'core/index.html', {form: form, })
        else:
            form = form_class()

    else:
        form = ReportForm()
    return render(request, 'create_report.html', {
        'form': form,
    })


def questions(request):
    return render(request, 'core/questions.html')


def base_layout(request):
    return render(request, 'core/base.html')


def about(request):
    return render(request, 'core/about.html')


def faq(request):
    return render(request, 'core/faq.html')


def terms(request):
    return render(request, 'core/terms.html')


def reps(request):
    return render(request, 'reps.html')


def rights(request):
    return render(request, 'rights.html')


def privacy(request):
    return render(request, 'core/privacy.html')
