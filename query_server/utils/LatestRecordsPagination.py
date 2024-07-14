from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class LatestRecordsPagination(PageNumberPagination):
    page_size = 10  # 每页显示10条记录

    def paginate_queryset(self, queryset, request, view=None):
        # 根据特定字段进行排序，这里假设字段名为'created_at'
        queryset = queryset.order_by('-timestamp')
        return super().paginate_queryset(queryset, request, view)

    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data,
        })
