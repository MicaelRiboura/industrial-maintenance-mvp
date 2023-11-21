from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship
from modules.shared.config.model.base import Base
from modules.shared.config.model.serializer import Serializer
from modules.equipment.models.equipment import Equipment

class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    name = Column(String(250))
    email = Column(String(250), unique=True)
    password = Column(String(250))
    equipments = relationship('Equipment')

    def __init__(self, name:str, email: str, password: str):
        self.name = name
        self.email = email
        self.password = password

    def add_equipment(self, equipment: Equipment):
        self.equipments.append(equipment)

    def serialize(self):
        user = Serializer.serialize(self)
        user['equipments'] = Serializer.serialize_list(user['equipments'])

        return user