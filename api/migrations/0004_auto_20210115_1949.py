# Generated by Django 3.1.5 on 2021-01-15 19:49

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210114_0902'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='content',
            field=tinymce.models.HTMLField(),
        ),
        migrations.AlterField(
            model_name='blogcomment',
            name='comment',
            field=tinymce.models.HTMLField(),
        ),
    ]