## Title : TestprepAcademy Modal

## User

id: UUID (PK)

fullname: CharField(max=70, required)
email: EmailField(max=200, unique, required)
password: CharField(max=128, required) // hashed
role: ChoiceField(required)

- tutor
- director
- student

plan_choices:ChoiceField(required)

- free
- pro
- premium

plan_expiry: DateTimeField()
avatar: URLField(blank=True)
country:CharField()
state:CharField()
username_public:CharField(unique=True)
is_active: Boolean(default=true)
created_at: DateTime(auto_now_add)
updated_at: DateTime(auto_now)

## Library

Library

- title
- type (course | book)
- author
- price
- published
- cover
- created_at

## Daliy News

DailyNews

- title
- description
- article
- video_url (optional)
- cover
- author (FK User)
- source
- size
- created_at

## Video session

VideoSession

- title
- description
- host (User)
- type (live | recorded)
- video_url
- thumbnail
- price
- scheduled_at
- duration_minutes
- created_at
- paticipants M:N

### Group

Group

- name
- description
- owner
- is_private

members: ManyToMany(User)

created_at: DateTime(auto_now_add)

### Messages

Message

- sender
- receiver (nullable)
- group (nullable)
- content
- attachment
- is_read

## Private Profile

Profile

- user (OneToOne)
- avatar
- country
- state

## Public Profile

PublicProfile

- user (OneToOne)
- username (unique)
- bio
- social_links (JSON)
- experience
- projects (JSON)
- certificates (JSON)

Public URL:
/testprepacademyUser/{username}

` Public url (/testprepacademyUser/{username})`

SubscriptionPlan

- PK id
- name
- price
- duration_days
- features JSON(
  > example:
  > {
  > "exam_limit": "unlimited",
  > "downloads": true,
  > "certificates": true,
  > "private_groups": 10,
  > "messages_per_day": 100
  > }
  > )

Subscription

- user
- plan (FK → SubscriptionPlan)
- expires_at
- is_active

## Payments

user: ForeignKey(user, on_delete=models.CASCADE)
amount: DecimalField()
reference:CharField()

- provider:CharField(
  paystack/ Flutterwave
  )

status:ChoiceField(required)

- successful
- pending
- failed

created_at:DateTimeField()

## Wallet

user: OneToOneField(on_delete=models.CASCADE)
balance: DecimalField()

## Earnings

tutor: ForeignKey(user, related_name="earnings")
student: ForeignKey(user, related_name="payments")
amount_paid: DecimalField()
commission: DecimalField()
tutor_earnings: DecimalField()

> - Logic:
>   commission_rate = 0.20
>   commission = amount \* commission_rate
>   tutor_take = amount - commission

## Theme

Theme

- user (OneToOne)
- mode (light | dark)
- background_type (solid | gradient)
- solid_color
- gradient
- updated_at
