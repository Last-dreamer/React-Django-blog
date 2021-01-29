from django.urls import path, include
from rest_framework import routers
from .views import BlogView, BlogCommentView, BlogTagView, SimilarBlogs, TopBlogs

router = routers.DefaultRouter()
router.register('blog', BlogView)
router.register('blog-comment', BlogCommentView)
router.register('blog-tags', BlogTagView)

urlpatterns = [
    path('', include(router.urls)),
    path('top-blogs', TopBlogs.as_view()),
    path('similar-blogs/<int:blog_id>', SimilarBlogs.as_view())
]