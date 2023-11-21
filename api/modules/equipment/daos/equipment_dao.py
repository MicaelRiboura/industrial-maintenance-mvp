from modules.shared.config.db_sqlite import Session
from modules.equipment.models import Equipment
from .abstract_equipment_dao import AbstractEquipmentDAO

class EquipmentDAO(AbstractEquipmentDAO):
    def create(self, form, user, session = Session()):
        equipment = Equipment(
           id=form.id,
           type=form.type,
           air_temperature=form.air_temperature,
           process_temperature=form.process_temperature,
           rotation_speed=form.rotation_speed,
           torque=form.torque,
           tool_wear=form.tool_wear,
           target=form.target
        )
    
        user.add_equipment(equipment)
        session.commit()

        user_serialized = user.serialize()

        return user_serialized['equipments'][len(user_serialized['equipment']) - 1]
    
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