from django.contrib import admin
from .models import Commit, Dispatch


@admin.register(Commit)
class CommitAdmin(admin.ModelAdmin):
    list_display = (
    'id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address',
    'data')
    search_fields = ['block_number', 'block_hash', 'extrinsic_hash']


@admin.register(Dispatch)
class DispatchAdmin(admin.ModelAdmin):
    list_display = (
    'id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address',
    'data')
    search_fields = ['block_number', 'block_hash', 'extrinsic_hash']
