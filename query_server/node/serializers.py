from rest_framework import serializers
from .models import AddVoting, NodeReward, NodeWithdraw


class AddVotingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddVoting
        fields = '__all__'


class NodeRewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = NodeReward
        fields = '__all__'


class NodeWithdrawSerializer(serializers.ModelSerializer):
    class Meta:
        model = NodeWithdraw
        fields = '__all__'
