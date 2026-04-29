from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class SubscriptionPlan(models.Model):
    PLANS = (
        ("free", "Free"),
        ("pro", "Pro"),
        ("premuim", "Premuim"),
    )
    name = models.Charfield(max_length=20, chioces=PLANS)
    price = models.DecimalField(max_digits=10, decimal_place=2)
    duration_days = models.IntegerField()
    features = models.JSONField()


class User(AbstractUser):
    ROLE_CHOICES = (
        ("student", "Student"),
        ("tutor", "Tutor"),
        ("director", "Director"),
    )
role = models.CharField(max_length=20, chioces=ROLE_CHOICES)
plan = models.ForeignKey(SubscriptionPlan, on_delete=models.CASCADE)