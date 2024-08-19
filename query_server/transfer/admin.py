from django.contrib import admin
from .models import D9Transfer, USDTTransfer
from django.db.models import Q


@admin.register(D9Transfer)
class D9TransferAdmin(admin.ModelAdmin):
    
    list_display = (
    'id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address',
    'data')
    search_fields = ['block_number', 'block_hash', 'extrinsic_hash']

    def get_search_results(self, request, queryset, search_term):
        # 调用默认的搜索行为
        queryset, use_distinct = super().get_search_results(request, queryset, search_term)

        # 自定义对 JSONField 内字段的精确查询
        if search_term:
            queryset |= self.model.objects.filter(
                Q(data__from=search_term) | Q(data__to=search_term)
            )

        return queryset, use_distinct


@admin.register(USDTTransfer)
class USDTTransferAdmin(admin.ModelAdmin):

    list_display = (
    'id', 'block_number', 'block_hash', 'timestamp', 'extrinsic_hash', 'fee', 'kind', 'contract', 'contract_address',
    'data')
    search_fields = ['block_number', 'block_hash', 'extrinsic_hash']

    def get_search_results(self, request, queryset, search_term):
        # 调用默认的搜索行为
        queryset, use_distinct = super().get_search_results(request, queryset, search_term)

        # 自定义对 JSONField 内字段的精确查询
        if search_term:
            queryset |= self.model.objects.filter(
                Q(data__from=search_term) | Q(data__to=search_term)
            )

        return queryset, use_distinct
