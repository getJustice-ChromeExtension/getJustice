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


# def test_mail(request):
#     send_mail('hi', 'testing if this works', 'getJusticereport@gmail.com', [
#         'sowmya.aji@gmail.com', 'rebecca@momentum.com'], fail_silently=False)
#     return render(request, 'core/base.html')


def index(request):
    return render(request, 'core/index.html')


# with open("media/images/screen.png", "rb") as image_file:
#     encoded_string = base64.b64encode(image_file.read())

# form_data = {'subject': 'hi', 'message': 'one more test', 'send_to': [
#     'sowmya.aji@gmail.com', 'rebecca@momentumlearn.com'], 'screenshot': encoded_string}


def create_report(request):
    form_class = ReportForm
    if request.method == "POST":
        form = form_class(request.POST)
        if form.is_valid():
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            send_to = form.cleaned_data['send_to']
            screenshot = form.cleaned_data['screenshot']
            msg = EmailMessage(
                subject, message, 'getJusticereport@gmail.com', [send_to])
            msg.content_subtype = "html"
            msg.attach('dataUrl', screenshot, 'image/png')
            msg.send()
            message = f"Your report was sent!"
            messages.add_message(request, messages.SUCCESS, message)
            return render(request, 'core/index.html')
    # report = form.save(commit=False)
    # report.save()
    else:
        form = form_class()
        message = f"For some reason your report didn't save. Please try again or contact us for assistance."
        messages.add_message(request, messages.ERROR, message)
        return render(request, 'create_report.html', {
            'form': form,
        })


# def edit_report(request):
#     report = Report.objects.all()
#     form_class = ReportForm

#     if request.method == 'POST':
#         form = form_class(data=request.POST, instance=report)
#         if form.is_valid():
#             form.save()
#             message = f"Your report was sent!"
#             messages.add_message(request, messages.SUCCESS, message)
#             return render(request, 'core/index.html')
#     else:
#         form = form_class(instance=report)
#         message = f"For some reason your report didn't save. Please try again or contact us for assistance."
#         messages.add_message(request, messages.ERROR, message)
#         return render(request, '  create_report.html', {
#             'report': report,
#             'form': form,
#         })


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
