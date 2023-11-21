from pydantic import BaseModel

class CreateEquipmentSchema(BaseModel):
    """ Define como um novo equipamento de um usuário a ser inserido deve ser representado
    """
    type:str = 'M'
    air_temperature:float = 298.1
    process_temperature:float = 308.6
    rotation_speed:float = 1551
    torque:float = 42.8
    tool_wear:float = 0.0
    user_id:int = 1