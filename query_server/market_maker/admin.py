from django.contrib import admin
from .models import Transaction

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
    search_fields = ['block_number', 'block_hash']