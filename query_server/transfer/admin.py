from django.contrib import admin
from .models import D9Transfer, USDTTransfer


@admin.register(D9Transfer)
class D9TransferAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
    search_fields = ['block_number', 'block_hash']


@admin.register(USDTTransfer)
class USDTTransferAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
    search_fields = ['block_number', 'block_hash']