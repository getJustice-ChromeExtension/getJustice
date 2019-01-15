from django.contrib import admin
from core.models import Report

class ReportAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'picture', 'videofile', 'url', 'hate_crime', 'police_brutality', 'civil_rights_violation',)

admin.site.register(Report, ReportAdmin)
