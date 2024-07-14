from django.contrib import admin
from .models import Liquidity

@admin.register(Liquidity)
class LiquidityAdmin(admin.ModelAdmin):
    list_display = ('id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address', 'data')
