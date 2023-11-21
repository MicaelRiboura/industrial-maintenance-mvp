from modules.shared.config.db_sqlite import Session
from modules.equipment.daos.equipment_dao import EquipmentDAO

def delete_equipment(query):
    try:
        session = Session()
        
        equipment_dao = EquipmentDAO()

        response = equipment_dao.delete(query.id, session)

        if not response:
            error_msg = "Equipamento não encontrado!"
            return {"message": error_msg}, 404

        success_msg = "Equipamento removido com sucesso!"
        return {"message": success_msg}, 200
            
    except Exception as e:
        print('error: ', e)
        error_msg = "Não foi possível deletar o equipamento!"

        return {"message": error_msg}, 404