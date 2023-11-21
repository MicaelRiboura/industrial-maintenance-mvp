from pydantic import BaseModel

class EquipmentResponseSchema(BaseModel):
    """ Define como um equipamento deve ser representado
    """
    id: int = 1
    type:str = 'M'
    air_temperature:float = 298.1
    process_temperature:float = 308.6
    rotation_speed:float = 1551
    torque:float = 42.8
    tool_wear:float = 0
    target:int = 0