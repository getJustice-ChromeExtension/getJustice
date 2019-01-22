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
from django.views.generic import RedirectView
from django.contrib.auth.views import (
    PasswordChangeView,
    PasswordChangeDoneView,
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView,
)
from core.backends import MyRegistrationView

urlpatterns = [
    # path('', include('pwa.urls')),
    path('', views.index, name='home'),
    path('website-report/', views.create_report, name='website_report'),
    path('ext-report/', views.ext_create_report, name='ext_report'),
    path('accounts/login-user/', views.login_user, name='user-login'),
    path('accounts/password/reset/', PasswordResetView.as_view(
        template_name='registration/password_reset_form.html'), name="password_reset"),
    path('accounts/password/change/', PasswordChangeView.as_view(
        template_name='registration/password_change_form.html'), name="password_change"),
    path('accounts/password/change/done/', PasswordChangeDoneView.as_view(
        template_name='registration/password_change_done.html'), name="password_change_done"),
    path('accounts/password/reset/done/', PasswordResetDoneView.as_view(
        template_name='registration/password_reset_done.html'), name="password_reset_done"),
    path('accounts/password/reset/<uidb64>/<token>/', PasswordResetConfirmView.as_view(
        template_name='registration/password_reset_confirm.html'), name="password_reset_confirm"),
    path('accounts/password/done/', PasswordResetCompleteView.as_view(
         template_name='registration/password_reset_complete.html'),
         name="password_reset_complete"),

    path('accounts/register/', MyRegistrationView.as_view(),
         name='registration_register'),
    path('accounts/', include('registration.backends.simple.urls')),


    path('about/', views.about, name='about'),
    path('favicon', RedirectView.as_view(url='/static/favicon.ico')),
    path('success/', views.success, name="success"),
    path('faq/', views.faq, name='faq'),
    path('your-rights/', views.rights, name="rights"),
    path('your-reps/', views.reps, name='reps'),
    path('privacy/', views.privacy, name='privacy'),
    path('terms/', views.terms, name='terms'),
    path("api/", include("api.urls")),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
