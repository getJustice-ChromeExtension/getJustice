from django.urls import path
from api import views as api_views


urlpatterns = [
    path("reports/", api_views.ReportListCreateView.as_view(),
         name="api_reports_list"),
    path("my_reports/", api_views.MyReportListCreateView.as_view(),
         name="my_reports_list"),
    path(
        "reports/<pk>/",
        api_views.ReportRetrieveUpdateDestroyView.as_view(),
        name="api_report"),
    path("users/", api_views.UserListView.as_view(), name="api_users_list"),

]
