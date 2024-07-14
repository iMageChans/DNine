from django.contrib import admin
from .models import GiveGreenPoints, Payment, Subscribe


@admin.register(GiveGreenPoints)
class GiveGreenPointsAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
    search_fields = ['block_number', 'block_hash']


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
    search_fields = ['block_number', 'block_hash']


@admin.register(Subscribe)
class SubscribeAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
    search_fields = ['block_number', 'block_hash']