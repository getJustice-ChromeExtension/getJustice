from django import forms


class ReportForm(forms.Form):
    send_to = forms.EmailField()
    subject = forms.CharField(max_length=255)
    message = forms.CharField(max_length=5000)
    screenshot = forms.CharField(required=False)
