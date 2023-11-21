from pydantic import BaseModel
from typing import List
from .equipment_response_schema import EquipmentResponseSchema

class ListEquipmentsSchema(BaseModel):
    """ Define como uma listagem de equipamentos será retornada.
    """
    equipments:List[EquipmentResponseSchema]