from modules.shared.config.db_sqlite import Session
from modules.user.daos.user_dao import UserDAO
from modules.equipment.daos.equipment_dao import EquipmentDAO

def list_equipments_by_user(query):
    try:
        session = Session()

        user_dao = UserDAO()
        equipment_dao = EquipmentDAO()

        user = user_dao.find_by_id(query.user_id, session)

        if not user:
            error_msg = "Usuário não encontrado!"
            return {"message": error_msg}, 404

        equipments_response = equipment_dao.find_by_user(user.id, session)

        return { 'equipments': equipments_response }, 200
        
    except Exception as e:
        print('error: ', e)
        error_msg = "Não foi possível listar os equipamentos!"

        return {"message": error_msg}, 404