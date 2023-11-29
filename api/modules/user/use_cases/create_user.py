from ..daos.user_dao import UserDAO
from sqlalchemy.exc import IntegrityError
import bcrypt

def create_user(form):
    try:
        userDAO = UserDAO()

        hashed = bcrypt.hashpw(form.password.encode('utf-8'), bcrypt.gensalt())
        form.password = hashed.decode('utf-8')

        user = userDAO.create(form)

        del user['password']
        
        return user, 200

    except IntegrityError as e:
        error_msg = "Usuário de mesmo e-mail já salvo na base!"
        return {"message": error_msg}, 409

    except Exception as e:
        # caso um erro fora do previsto
        print('error: ', e)
        error_msg = "Não foi possível salvar novo usuário :/"
        # logger.warning(f"Erro ao adicionar produto '{produto.nome}', {error_msg}")
        return {"message": error_msg}, 400