from django import forms


class ReportForm(forms.Form):
    subject = forms.CharField(max_length=200)
    
    class Meta:
        fields = ('send_to', 'subject', 'message', 'screenshot')
