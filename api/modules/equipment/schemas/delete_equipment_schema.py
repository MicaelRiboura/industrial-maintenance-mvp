from pydantic import BaseModel

class DeleteEquipmentSchema(BaseModel):
    """ Define o que é necessário ser inserido para ser removido um equipamento.
    """
    id:int = 1