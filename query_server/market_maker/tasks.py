# myapp/tasks.py

from celery import shared_task
from .models import Transaction

@shared_task
def create_or_update_transaction(data):
    Transaction.create_or_update(data)
    return None