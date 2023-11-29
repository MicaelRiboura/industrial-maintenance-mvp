from modules.shared.config.db_sqlite import Session
from modules.equipment.models import Equipment
from .abstract_equipment_dao import AbstractEquipmentDAO
from modules.equipment.models.machine_learning_model import Model

class EquipmentDAO(AbstractEquipmentDAO):
    def create(self, form, user, session = Session()):

         # Carregando modelo
        ml_path = 'model_ml/model.pkl'
        model = Model.load_model(ml_path)

        equipment = Equipment(
           type=form.type,
           air_temperature=(form.air_temperature + 273), # Transforma de Celsius para Kelvin
           process_temperature=(form.process_temperature + 273), # Transforma de Celsius para Kelvin
           rotation_speed=form.rotation_speed,
           torque=form.torque,
           tool_wear=form.tool_wear,
           target=Model.predictor(model, form)
        )
    
        user.add_equipment(equipment)
        session.commit()

        user_serialized = user.serialize()

        return user_serialized['equipments'][len(user_serialized['equipments']) - 1]
    
    def find_by_user(self, user, session = Session()):
        equipments = session.query(Equipment).filter(Equipment.user == user)
        equipments_serialized = []
        if equipments:
            for equipment in equipments:
                equipments_serialized.append(equipment.serialize())
        return equipments_serialized
    
    def delete(self, id, session = Session()):
        count = session.query(Equipment).filter(Equipment.id == id).delete()
        session.commit()
        
        if not count:
            return False
        
        return True