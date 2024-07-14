# myapp/tasks.py

from celery import shared_task
from .models import Commit, Dispatch

@shared_task
def create_or_update_commit(data):
    Commit.create_or_update(data)
    return None


@shared_task
def create_or_update_dispatch(data):
    Dispatch.create_or_update(data)
    return None
