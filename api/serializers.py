from rest_framework import serializers
from .models import Blog, BlogComment, BlogTag
from user.serializers import  UserSerializers


class BlogTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogTag
        fields = '__all__'


class BlogSerializer(serializers.ModelSerializer):
    tags = BlogTagSerializer(many=True)
    author = UserSerializers(read_only=True)
    author_id = serializers.IntegerField(write_only=True)
    comment_count = serializers.SerializerMethodField("get_comment_count")

    class Meta:
        model = Blog
        fields = '__all__'

    def get_comment_count(self, obj):
        return obj.blog_comments.count()


class BlogCommentSerializer(serializers.ModelSerializer):
    blog = BlogSerializer(read_only=True)
    blog_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = BlogComment
        fields = '__all__'