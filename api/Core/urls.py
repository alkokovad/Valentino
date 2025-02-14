from django.contrib import admin
from django.urls import path, include, re_path
from CartManage import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/cart/$', views.cart),
    re_path(r'^api/cartdetail/(\d+)$', views.cart_detail),
#     path('api-auth/', include('rest_framework.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
