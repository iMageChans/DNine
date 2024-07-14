# myapp/tasks.py

from celery import shared_task
from .models import D9Transfer, USDTTransfer

@shared_task
def create_or_update_d9_transfer(data):
    D9Transfer.create_or_update(data)
    return None


@shared_task
def create_or_update_usdt_transfer(data):
    print("Task started with data:", data)
    # USDTTransfer.create_or_update(data)
    return None
