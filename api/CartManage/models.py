from django.db import models


class Cart(models.Model):
    money = models.IntegerField("Количество монет")

    class Meta:
        verbose_name = 'Кошелёк'
        verbose_name_plural = 'Кошельки'

    def __str__(self):
        return "История изменений баланса"