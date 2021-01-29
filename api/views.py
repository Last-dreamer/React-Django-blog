from django.db.models import Count, Q
from rest_framework import viewsets
from rest_framework.generics import ListAPIView

from .serializers import  BlogSerializer, BlogCommentSerializer, BlogTagSerializer
from .models import Blog, BlogComment, BlogTag


class BlogView(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        query = self.request.query_params.dict()
        keyword = query.get('keyword', None)
        query_data = self.queryset

        if keyword:
            query_data = query_data.filter(
                Q(title__icontains=keyword)
            ).distinct()
        return query_data


class  BlogCommentView(viewsets.ModelViewSet):
    queryset = BlogComment.objects.all()
    serializer_class = BlogCommentSerializer

    def get_queryset(self):
        query  = self.request.query_params.dict()
        return self.queryset.filter(**query)


class BlogTagView(viewsets.ModelViewSet):
    queryset = BlogTag.objects.all()
    serializer_class = BlogTagSerializer


class TopBlogs(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def get_queryset(self):
        #  blog_comments is in the comments model ...
        blogs = self.queryset.annotate(comment_count=Count('blog_comments')).order_by("-comment_count")[:5]
        return blogs


class SimilarBlogs(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def get_queryset(self):
        # get blog_id from url ..
        blog_id = self.kwargs.get("blog_id")
        try:
            blog_tags = self.queryset.get(id=blog_id).tags.all()
        except Exception:
            return []
        blogs = self.queryset.filter(tags__id__in=[tags.id for tags in blog_tags]).exclude(id=blog_id)
        return blogs