from django.db import models


class AbstractEvent(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    block_number = models.CharField(max_length=255)
    block_hash = models.CharField(max_length=255)
    timestamp = models.CharField(max_length=255)
    extrinsic_hash = models.CharField(max_length=255)
    fee = models.CharField(max_length=255)
    kind = models.CharField(max_length=255)
    contract = models.CharField(max_length=255)
    contract_address = models.CharField(max_length=255)
    data = models.JSONField(db_index=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.id


class Burning(AbstractEvent):
    class Meta:
        indexes = [
            models.Index(fields=['block_number']),
            models.Index(fields=['timestamp']),
            models.Index(fields=['extrinsic_hash']),
            models.Index(fields=['contract']),
            models.Index(fields=['contract_address']),
            models.Index(fields=['kind']),
        ]

    @classmethod
    def create_or_update(cls, data):
        obj, created = cls.objects.update_or_create(
            id=data.get('id'),
            defaults=data
        )
        return obj, created


class Merchant(AbstractEvent):
    class Meta:
        indexes = [
            models.Index(fields=['block_number']),
            models.Index(fields=['timestamp']),
            models.Index(fields=['extrinsic_hash']),
            models.Index(fields=['contract']),
            models.Index(fields=['contract_address']),
            models.Index(fields=['kind']),
        ]

    @classmethod
    def create_or_update(cls, data):
        obj, created = cls.objects.update_or_create(
            id=data.get('id'),
            defaults=data
        )
        return obj, created
