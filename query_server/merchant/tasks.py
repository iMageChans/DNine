# myapp/tasks.py

from celery import shared_task
from .models import GiveGreenPoints, Payment, Subscribe

@shared_task
def create_or_update_give_green_points(data):
    GiveGreenPoints.create_or_update(data)
    return None


@shared_task
def create_or_update_payment(data):
    Payment.create_or_update(data)
    return None


@shared_task
def create_or_update_subscribe(data):
    Subscribe.create_or_update(data)
    return None