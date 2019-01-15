from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Report(models.Model):

    title = models.CharField(max_length=250)
    content = models.TextField()
    picture = models.ImageField(
        upload_to='images/', blank=True)
    videofile = models.FileField(
        upload_to='videos/', null=True, verbose_name="")
    url = models.URLField(max_length=255, null=True)
    # send_to = models.EmailField(max_length=255)
    # screenshot = models.BinaryField(max_length=None, editable=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    hate_crime = models.BooleanField(default=False)
    police_brutality = models.BooleanField(default=False)
    civil_rights_violation = models.BooleanField(default=False)

    def crime_categories(self):
        categories = []
        recipients = []
        self.content = "This "
        if self.hate_crime:
            categories.append("Hate Crime")
            recipients.append("tiana.horn@gmail.com")
            # self.content = self.content + "This is a Hate Crime"
        if self.police_brutality:
            categories.append("Police Brutality")
            recipients.append("dacs2010@gmail.com")
            # self.content = self.content + "This is Police Brutality"
        if self.civil_rights_violation:
            categories.append("Civil Rights Violation")
            recipients.append("sowmya.aji@gmail.com")
            # self.content = self.content + "This is a Hate Crime"


            

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
