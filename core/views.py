from django.shortcuts import render, redirect
from django.core import serializers
from core.models import User, Report, Tweet
import json
from django.db.models import Count
from django.contrib import messages
from core.forms import ReportForm

# Create your views here.


def index(request):
    return render(request, 'core/index.html')

def report_detail(request, id):
    report = Report.objects.get(id=id)
    return render(request, 'report_detail.html', {
        'report': report,
    })

def create_report(request):
    form_class = ReportForm
    if request.method == "POST":
        form = form_class(request.POST)
        if form.is_valid():
            report = form.save(commit=False)
            report.save()
            return redirect('report_detail', id=report.id)
        
    else:
        form = form_class()

    return render(request, 'create_report.html', {
            'form': form,
        })

def edit_report(request, id):
    report = Report.objects.get(id=id)
    form_class = ReportForm

    if request.method == 'POST':
        form = form_class(data=request.POST, instance=report)
        if form.is_valid():
            form.save()
            message = f"Your report was sent!"
            messages.add_message(request, messages.SUCCESS, message)
            return render (redirect, 'core/index.html')
    else:
        form = form_class(instance=report)
        message = f"For some reason your report didn't save. Please try again or contact us for assistance."
        messages.add_message(request, messages.ERROR, message)
        return render(request, 'edit_report.html', {
            'report': report,
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
