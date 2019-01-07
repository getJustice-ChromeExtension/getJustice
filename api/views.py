from django.shortcuts import render
from core.models import Report, Tweet, User
from api.serializers import ReportSerializer, TweetSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.exceptions import PermissionDenied
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
