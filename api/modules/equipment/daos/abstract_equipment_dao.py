from abc import ABC, abstractmethod


class AbstractEquipmentDAO(ABC):
    @abstractmethod
    def create(self, form, user, session):
        raise NotImplementedError

    @abstractmethod
    def find_by_user(self, user):
        raise NotImplementedError

    @abstractmethod
    def delete(self, id):
        raise NotImplementedError