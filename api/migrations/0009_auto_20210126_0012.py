# Generated by Django 3.1.5 on 2021-01-26 00:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_blog_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogcomment',
            name='blog',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_comments', to='api.blog'),
        ),
    ]
