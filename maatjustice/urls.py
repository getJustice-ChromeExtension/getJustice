"""maatjustice URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from core import views
from django.conf.urls.static import static


urlpatterns = [
    # path('', include('pwa.urls')),
    path('', views.index, name='home'),
    path('create-report/', views.create_report, name='report'),
    # path('report-sent/', views.report_sent, name='sent'),
    path('report-draft/<int:id>', views.report_detail, name='report_detail'),
    path('edit-report/<int:id>', views.edit_report, name='edit_report'),
    path('accounts/', include('allauth.urls')),
    path('about/', views.about, name='about'),
    path('question/', views.questions, name="questions"),
    path('email/', views.test_mail, name="test_mail"),
    path('faq/', views.faq, name='faq'),
    path('your-rights/', views.rights, name="rights"),
    path('your-reps/', views.reps, name='reps'),
    path('privacy/', views.about, name='privacy'),
    path('terms/', views.about, name='terms'),
    path("api/", include("api.urls")),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
