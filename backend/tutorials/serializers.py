from rest_framework import serializers 
from tutorials.models import DataDjango,DataVisualisasiDashboard
 
 
class DataSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = DataDjango
        fields = ('text')

class DataSerializer2(serializers.ModelSerializer):
    class Meta:
        model = DataVisualisasiDashboard
        fields = ('id',
        'value_maps_bahagia',
        'value_maps_tidakbahagia',
        'value_line_bahagia',
        'value_line_tidakbahagia',
        'data_line',
        'value_bar_bahagia',
        'value_bar_tidakbahagia',
        'data_bar',
        'value_pie_bahagia',
        'value_pie_tidakbahagia',
        'value_card_bahagia',
        'value_card_tidakbahagia',
        'value_card_total')

