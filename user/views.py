from .serializers import  UserSerializers, User
from rest_framework.viewsets import ModelViewSet


class UserView(ModelViewSet):
    queryset = User.objects.all()
    serialzer_class = UserSerializers