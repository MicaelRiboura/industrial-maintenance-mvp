from modules.shared.config.db_sqlite import Session
from modules.equipment.daos.equipment_dao import EquipmentDAO
from modules.user.daos.user_dao import UserDAO

def create_equipment(form):
    try:
        session = Session()

        user_dao = UserDAO()

        user = user_dao.find_by_id(form.user_id, session)

        if not user:
            error_msg = "Usuário não encontrada!"
            return {"message": error_msg}, 404
        
        equipment_dao = EquipmentDAO()

        equipment_response = equipment_dao.create(form, user, session)
        
        return equipment_response, 200

    except Exception as e:
        # caso um erro fora do previsto
        print('error: ', e)
        error_msg = "Não foi possível salvar o novo equipamento!"

        return {"message": error_msg}, 400