from django.contrib import admin
from .models import BlogTag, Blog, BlogComment

admin.site.register( [
 BlogTag, Blog, BlogComment
])