from ..daos.user_dao import UserDAO
import bcrypt

def login(form):
    try:
        userDAO = UserDAO()

        user_response = userDAO.find_by_email(form.email)

        if not user_response:
            error_msg = "Login ou senha incorretos!"
            return {"message": error_msg}, 400
        else:
            if user_response.email == form.email and bcrypt.checkpw(form.password.encode('utf-8'), user_response.password.encode('utf-8')):
                user_serialized = user_response.serialize()
                del user_serialized['password']
                
                return user_serialized, 200
            else:
                error_msg = "Login ou senha incorretos!"
                return {"message": error_msg}, 400
            
    except Exception as e:
        # erro fora do previsto
        print('error: ', e)
        error_msg = "Erro desconhecido"
        return {"message": error_msg}, 404