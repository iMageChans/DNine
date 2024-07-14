# myapp/tasks.py

from celery import shared_task
from .models import AddVoting, NodeReward, NodeWithdraw

@shared_task
def create_or_update_add_voting(data):
    AddVoting.create_or_update(data)
    return None


@shared_task
def create_or_update_node_reward(data):
    NodeReward.create_or_update(data)
    return None


@shared_task
def create_or_update_node_withdraw(data):
    NodeWithdraw.create_or_update(data)
    return None