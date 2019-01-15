from core.models import Report, User
from rest_framework import serializers
# SerializerMethodField


class CreatableSlugRelatedField(serializers.SlugRelatedField):
    def to_internal_value(self, data):
        try:
            value, _ = self.get_queryset().get_or_create(
                **{self.slug_field: data})
            return value
        except (TypeError, ValueError):
            self.fail("invalid")


class ReportSerializer(serializers.ModelSerializer):
    # author = serializers.SlugRelatedField(
    #     slug_field="username", read_only=True)
    # author_email = serializers.CharField(
    #     source="author.email", read_only=True)
    content = serializers.CharField(
        max_length=None, min_length=None, allow_blank=False, trim_whitespace=True)
    picture = serializers.SerializerMethodField()
    videofile = serializers.SerializerMethodField()
    queryset = Report.objects.all()

    class Meta:
        model = Report
        fields = ("content",
                  "pk", "picture", "videofile")

    def get_picture(self, obj):
        try:
            picture = obj.image.url
        except:
            picture = None
        return picture

    def get_video(self, obj):
        try:
            videofile = obj.videofile.url
        except:
            videofile = None
        return videofile


# class TweetSerializer(serializers.ModelSerializer):
#     content = serializers.CharField(
#         max_length=None, min_length=None, allow_blank=False, trim_whitespace=True)
#     queryset = Tweet.objects.all()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email")
