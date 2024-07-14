# myapp/tasks.py

from celery import shared_task
from .models import Burning, Merchant

@shared_task
def create_or_update_burning(data):
    Burning.create_or_update(data)
    return None


@shared_task
def create_or_update_merchant(data):
    Merchant.create_or_update(data)
    return 'successfully'