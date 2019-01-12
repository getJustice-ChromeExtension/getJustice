from django.forms import Form


class ReportForm(Form):
    class Meta:
        fields = ('send_to', 'subject', 'message', 'screenshot')
