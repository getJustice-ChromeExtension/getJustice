from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Report(models.Model):

    title = models.CharField(max_length=250)

    # author = models.ForeignKey(
    #     to=User, on_delete=models.CASCADE, related_name="reports"
    # )
    content = models.TextField()
    # user_content_edit = models.TextField()
    picture = models.ImageField(
        upload_to='images/', blank=True)
    videofile = models.FileField(
        upload_to='videos/', null=True, verbose_name="")
    url = models.URLField(max_length=255, null=True)


    created_at = models.DateTimeField(auto_now_add=True)

    hate_crime = models.BooleanField(default=False)
    police_brutality = models.BooleanField(default=False)
    civil_rights_violation = models.BooleanField(default=False)

    def crime_categories(self):
        categories = []
        if self.hate_crime:
            categories.append("Hate Crime")
        if self.police_brutality:
            categories.append("Police Brutality")
        if self.civil_rights_violation:
            categories.append("Civil Rights Violation")

    def __str__(self):
        return self.title


class Tweet(models.Model):

    tweeter = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name="tweets"
    )
    body = models.TextField()


class Email(models.Model):
    address = models.EmailField(max_length=255)
    owner = models.CharField(max_length=255)
