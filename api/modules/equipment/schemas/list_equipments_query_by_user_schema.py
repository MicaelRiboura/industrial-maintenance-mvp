from pydantic import BaseModel

class ListEquipmentsQueryByUserSchema(BaseModel):
    """ Define o que é necessário ser inserido para ser retornado a lista de equipamentos de um usuário.
    """
    user_id:int = 1