from django.db import models


class DataDjango(models.Model):
    text = models.TextField()

class DataVisualisasiDashboard(models.Model):
    value_maps_bahagia = models.TextField()
    value_maps_tidakbahagia = models.TextField()
    value_line_bahagia = models.TextField()
    value_line_tidakbahagia = models.TextField()
    data_line = models.TextField()
    value_bar_bahagia = models.TextField()
    value_bar_tidakbahagia = models.TextField()
    data_bar = models.TextField()
    value_pie_bahagia = models.TextField()
    value_pie_tidakbahagia = models.TextField()
    value_card_bahagia = models.TextField()
    value_card_tidakbahagia = models.TextField()
    value_card_total = models.TextField()