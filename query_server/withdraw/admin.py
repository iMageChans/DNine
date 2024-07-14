from django.contrib import admin
from .models import Burning, Merchant


@admin.register(Burning)
class BurningAdmin(admin.ModelAdmin):
    list_display = (
    'id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address',
    'data')
    search_fields = ['block_number', 'block_hash']


@admin.register(Merchant)
class MerchantAdmin(admin.ModelAdmin):
    list_display = (
    'id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address',
    'data')
    search_fields = ['block_number', 'block_hash']