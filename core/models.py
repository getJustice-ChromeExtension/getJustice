from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Report(models.Model):

    title = models.CharField(max_length=250)

    author = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name="reports"
    )
    content = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)


class Tweet(models.Model):

    tweeter = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name="tweets"
    )
    body = models.TextField()
