# Generated by Django 3.1.5 on 2021-01-29 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20210126_0012'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='btn_link',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='blog',
            name='cover',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
