from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *
from .models import Cart
from telegram import Bot
import os
from dotenv import load_dotenv


TOKEN = os.getenv('TG_KEY')
CHAT_ID = os.getenv('TG_CHAT')


@api_view(['GET', 'POST'])
def cart(request):
    if request.method == 'GET':
        data = Cart.objects.all()
        serializer = CartSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        pocket = Cart.objects.get(id=1)
        if pocket.money < request.data["sum"]:
            return Response(
                {"error": "Недостаточно средств!"},
                status=status.HTTP_400_BAD_REQUEST
            )
        pocket.money -= request.data["sum"]
        pocket.save()
        serializer = CartSerializer(Cart.objects.all(), context={'request': request}, many=True)
        msg = f"Новое событие: {request.data['type']}"
        bot = Bot(token=TOKEN)
        bot.send_message(chat_id=CHAT_ID, text=msg)
        return Response(serializer.data)


@api_view(['PUT', 'DELETE'])
def cart_detail(request, pk):
    try:
        content = Cart.objects.get(pk=pk)
    except Content.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = CartSerializer(content, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
