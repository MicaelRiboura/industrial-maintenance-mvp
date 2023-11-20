from flask_openapi3 import OpenAPI, Info, Tag
from flask import redirect
from urllib.parse import unquote
from flask_cors import CORS


info = Info(title="API - Maintenance Company", version="1.0.0")
app = OpenAPI(__name__, info=info)
CORS(app)

# ----------------------------- Home Route -----------------------------
home_tag = Tag(name="Documentação", description="Seleção de documentação: Swagger, Redoc ou RapiDoc")

@app.get('/', tags=[home_tag])
def home():
    """Redireciona para /openapi, tela que permite a escolha do estilo de documentação.
    """
    return redirect('/openapi')


# # ----------------------------- Users Routes -----------------------------
# user_tag = Tag(name="Usuário", description="Criação e login de usuários à base de dados.")

# @app.post('/users/create', tags=[user_tag], responses={'200': UserResponseSchema, '409': ErrorSchema, '400': ErrorSchema})
# def create_user_route(form: UserSchema):
#     """
#         Cria novo usuário
#     """
#     return create_user(form)

# @app.post('/users/login', tags=[user_tag], responses={'200': UserResponseSchema, '400': ErrorSchema, '500': ErrorSchema})
# def login_route(form: UserLoginSchema):
#     """
#         Faz o login de um usuário com seu e-mail e senha.
#     """
#     return login(form)


