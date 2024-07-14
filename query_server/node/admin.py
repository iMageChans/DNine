from django.contrib import admin
from .models import AddVoting, NodeReward, NodeWithdraw


@admin.register(AddVoting)
class AddVotingAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
    search_fields = ['block_number', 'block_hash']


@admin.register(NodeReward)
class NodeRewardAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
    search_fields = ['block_number', 'block_hash']


@admin.register(NodeWithdraw)
class NodeWithdrawAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
    search_fields = ['block_number', 'block_hash']