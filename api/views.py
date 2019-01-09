from django.shortcuts import render
from core.models import Report,  User
from api.serializers import ReportSerializer,  UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.exceptions import PermissionDenied
from django.core.mail import send_mail
# from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector


class ReportListCreateView(generics.ListCreateAPIView):
    serializer_class = ReportSerializer

    queryset: Report.objects.all().order_by("-created_at")

    # def get_queryset(self):
    #     vector = SearchVector('language', 'content',
    #                           'title', 'author__username')
    #     if self.request.GET.get("search"):
    #         query = self.request.GET.get("search")
    #         return Report.objects.annotate(search=vector).filter(search=query)
    #     else:
    #         return Report.objects.all()

    def perform_create(self, serializer):
        print(self.request)
        serializer.save(author=self.request.user)

    # def save(self, *args, **kwargs):
    #     retval = super().save(*args, **kwargs)
    #     send_mail(
    #         # f"""Dear madam/sir,
    #         # I am a concerned Durhamite who wishes to raise this issue of civil injustice that I am aware of. I request you to take up this matter seriously and hope that my concerns as well as that of others in this matter of public importance will be addressed by you at the earliest. Regards.""", 'maatjusticeinfo@gmail.com', [to emails],
    #         # message.attach
    #         # fail_silently=False),
    #     return retval


class MyReportListCreateView(generics.ListCreateAPIView):
    serializer_class = ReportSerializer

    def get_queryset(self):
        return self.request.user.snippets

    def perform_create(self, serializer):
        print(self.request)
        serializer.save(author=self.request.user)


class ReportRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReportSerializer
    lookup_field = "pk"
    queryset = Report.objects.all()

    def check_object_permissions(self, request, report):
        if request.method != "GET" and report.author != request.user:
            raise PermissionDenied("You are not allowed to that! Sorry!")
        return super().check_object_permissions(request, report)


# class UserListView(generics.ListAPIView):
#     serializer_class = UserSerializer
#     queryset = User.objects.all()
