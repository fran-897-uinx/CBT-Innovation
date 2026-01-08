# accounts/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ("student", "Student"),
        ("tutor", "Tutor"),
        ("director", "Director"),
    )

    PLAN_CHOICES = (
        ("free", "Free"),
        ("pro", "Pro"),
        ("premium", "Premium"),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    plan = models.CharField(max_length=20, choices=PLAN_CHOICES, default="free")
    plan_expiry = models.DateTimeField(null=True, blank=True)

    avatar = models.URLField(blank=True)
    country = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=50, blank=True)
    username_public = models.CharField(max_length=50, unique=True)


# billing/models.py
class SubscriptionPlan(models.Model):
    name = models.CharField(max_length=30)  # Free, Pro, Premium
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration_days = models.IntegerField()
    features = models.JSONField()  # feature flags
{
  "exam_limit": "unlimited",
  "downloads": true,
  "certificates": true,
  "private_groups": 10,
  "messages_per_day": 100
}



class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    reference = models.CharField(max_length=100, unique=True)
    provider = models.CharField(max_length=20)  # paystack/flutterwave
    status = models.CharField(max_length=20)  # success, pending, failed
    created_at = models.DateTimeField(auto_now_add=True)


class Wallet(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=12, decimal_places=2, default=0)

class Earnings(models.Model):
    tutor = models.ForeignKey(User, on_delete=models.CASCADE, related_name="earnings")
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name="payments")
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2)
    commission = models.DecimalField(max_digits=10, decimal_places=2)
    tutor_earnings = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

commission_rate = 0.20
commission = amount * commission_rate
tutor_take = amount - commission




class Course(models.Model):
    title = models.CharField(max_length=100)
    tutor = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_paid = models.BooleanField(default=False)
    published = models.BooleanField(default=True)



class VideoSession(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    scheduled_at = models.DateTimeField()
    is_live = models.BooleanField(default=False)


class Group(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    is_private = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)


from django.utils.timezone import now

def has_active_plan(user):
    return user.plan != "free" and user.plan_expiry and user.plan_expiry > now()

if not has_active_plan(request.user):
    return Response({"error": "Upgrade required"}, status=403)

user.plan = "pro"
user.plan_expiry = now() + timedelta(days=30)
user.save()





class Theme(models.Model):
    MODE_CHOICES = [
        ("light", "Light"),
        ("dark", "Dark"),
    ]

    BG_CHOICES = [
        ("solid", "Solid"),
        ("gradient", "Gradient"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    mode = models.CharField(
        max_length=10,
        choices=MODE_CHOICES,
        default="light"
    )

    background_type = models.CharField(
        max_length=10,
        choices=BG_CHOICES,
        default="solid"
    )

    # Used only if background_type == "solid"
    solid_color = models.CharField(
        max_length=20,
        blank=True,
        default="#ffffff"
    )

    # Used only if background_type == "gradient"
    gradient = models.CharField(
        max_length=120,
        blank=True
    )

    updated_at = models.DateTimeField(auto_now=True)


ERD === Entity-Relationship Diagram.


+----------------+       +---------------------+       +----------------+
|      User      | 1---1 |   PrivateProfile    |       |   PublicProfile|
|----------------|       |--------------------|       |----------------|
| PK id          |       | PK id              |       | PK id          |
| fullname       |       | user_id FK          |       | user_id FK     |
| email          |       | avatar              |       | username (UQ) |
| password       |       | country             |       | bio           |
| role           |       | state               |       | social_links  |
| plan_choices   |       | case_of_study       |       | experience    |
| plan_expiry    |       | username            |       | projects      |
| avatar         |       | confirm_password    |       | certificates  |
| country        |       | updated_at          |       | origin_country|
| state          |       +--------------------+       | origin_state  |
| username_pub   |                                   +----------------+
| is_active      |
| created_at     |
| updated_at     |
+----------------+
       |
       |1
       |
       | 1:N
+-----------------+
|   Subscription  |
|-----------------|
| PK id           |
| user_id FK      |
| plan FK         |
| expires_at      |
| is_active       |
+-----------------+
       |
       |1
       |
+-----------------+
| SubscriptionPlan|
|-----------------|
| PK id           |
| name            |
| price           |
| duration_days   |
| features JSON   |
+-----------------+

+-----------------+       +------------------+
|   Library       |       |   DailyNews      |
|-----------------|       |-----------------|
| PK id           |       | PK id           |
| title           |       | title           |
| type            |       | description     |
| author          |       | article         |
| price           |       | video_url       |
| published       |       | cover           |
| cover           |       | author FK User  |
| created_at      |       | source          |
|                 |       | size            |
+-----------------+       | created_at      |
                          +-----------------+

+-----------------+       +-----------------+
| VideoSession    |       |    Group        |
|-----------------|       |----------------|
| PK id           |       | PK id          |
| title           |       | name           |
| description     |       | description    |
| host FK User    |       | owner FK User  |
| type            |       | is_private     |
| video_url       |       | cover          |
| thumbnail       |       | created_at     |
| price           |       | members M:N    |
| scheduled_at    |       +----------------+
| duration_minutes|
| created_at      |
| participants M:N|
+-----------------+

+-----------------+
|   Messages      |
|-----------------|
| PK id           |
| sender FK User  |
| receiver FK User|
| group FK Group  |
| content         |
| attachment      |
| is_read         |
| created_at      |
+-----------------+

+-----------------+       +----------------+
| Wallet          | 1---1 |  Earnings      |
|-----------------|       |----------------|
| PK id           |       | PK id          |
| user_id FK      |       | tutor FK User  |
| balance         |       | student FK User|
+-----------------+       | amount_paid    |
                          | commission     |
                          | tutor_earnings |
                          +----------------+

+-----------------+
| Theme           |
|-----------------|
| PK id           |
| user_id FK      |
| mode            |
| background_type |
| solid_color     |
| gradient        |
| updated_at      |
+-----------------+


erDiagram
    USER ||--o{ WALLET : owns
    USER ||--o{ VIDEOSESSION : hosts
    USER ||--o{ LIBRARY : purchases
    VIDEOSESSION ||--o{ USER : participants
    GROUP ||--o{ USER : members
