from django.forms import ModelForm
from core.models import Report


class ReportForm(ModelForm):
    class Meta:
        model = Report
        fields = ('title', 'content', 'picture', 'videofile', 'url', 'hate_crime', 'police_brutality', 'civil_rights_violation',)
