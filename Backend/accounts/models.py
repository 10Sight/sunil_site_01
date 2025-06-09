from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid  # Add this import

class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True)
    
    # Make username optional and non-unique
    username = models.CharField(
        max_length=150,
        blank=True,
        null=True,
        unique=False,
        default=uuid.uuid4  # Auto-generate if empty
    )
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # Remove username from required fields

    def __str__(self):
        return self.email