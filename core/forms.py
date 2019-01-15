from django import forms


class ReportForm(forms.Form):
    subject = forms.CharField()
    send_to = forms.CharField(max_length=500)
    message = forms.CharField(label="message", max_length=5000)
    screenshot = forms.CharField(label="screenshot", required=False)
    
