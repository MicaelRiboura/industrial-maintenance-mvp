from sqlalchemy import Column, String, Integer, Float, ForeignKey
from modules.shared.config.model.base import Base
from modules.shared.config.model.serializer import Serializer

class Equipment(Base):
    __tablename__ = 'equipment'

    id = Column(Integer, primary_key=True)
    type = Column(String(250))
    air_temperature = Column(Float)
    process_temperature = Column(Float)
    rotation_speed = Column(Float)
    torque = Column(Float)
    tool_wear = Column(Float)
    target = Column(Integer)
    user = Column(Integer, ForeignKey('user.id'), nullable=False)

    def __init__(self, type:str, air_temperature:float, process_temperature:float, rotation_speed:float, torque:float, tool_wear:float, target:int):
        self.type = type
        self.air_temperature = air_temperature
        self.process_temperature = process_temperature
        self.rotation_speed = rotation_speed
        self.torque = torque
        self.tool_wear = tool_wear
        self.target = target

    def serialize(self):
        equipment = Serializer.serialize(self)
        return equipment