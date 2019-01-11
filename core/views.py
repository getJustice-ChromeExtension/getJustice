from django.shortcuts import render, redirect
from django.core import serializers
from core.models import User, Report, Tweet
from django.core.mail import send_mail
import smtplib
import json


def test_mail(request):
    send_mail('hi', 'testing if this works', 'getJusticereport@gmail.com', [
        'sowmya.aji@gmail.com', 'rebecca@momentum.com'], fail_silently=False)
    return render(request, 'core/base.html')


def index(request):
    return render(request, 'core/index.html')


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


def privacy(request):
    return render(request, 'core/privacy.html')
