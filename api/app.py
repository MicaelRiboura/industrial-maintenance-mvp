from flask_openapi3 import OpenAPI, Info, Tag
from flask import redirect
from urllib.parse import unquote

from modules.shared.config.db_sqlite import *
from flask_cors import CORS

# schemas
from modules.shared.errors.error_schema import ErrorSchema
from modules.user.schemas import UserSchema, UserResponseSchema, UserLoginSchema
from modules.equipment.schemas import \
    CreateEquipmentSchema, \
    EquipmentResponseSchema, \
    ListEquipmentsQueryByUserSchema, \
    ListEquipmentsSchema, \
    DeleteResponseSchema, \
    DeleteEquipmentSchema

# usecases
from modules.user.use_cases import create_user, login
from modules.equipment.use_cases import create_equipment, \
    list_equipments_by_user, \
    delete_equipment


info = Info(title="API - RelEquip", version="1.0.0")
app = OpenAPI(__name__, info=info)
CORS(app)

# ----------------------------- Home Route -----------------------------
home_tag = Tag(name="Documentação", description="Seleção de documentação: Swagger, Redoc ou RapiDoc")

@app.get('/', tags=[home_tag])
def home():
    """Redireciona para /openapi, tela que permite a escolha do estilo de documentação.
    """
    return redirect('/openapi')

# ----------------------------- Users Routes -----------------------------
user_tag = Tag(name="Usuários", description="Criação e login de usuários à base de dados.")

@app.post('/users/create', tags=[user_tag], responses={'200': UserResponseSchema, '409': ErrorSchema, '400': ErrorSchema})
def create_user_route(form: UserSchema):
    """
        Cria novo usuário
    """
    return create_user(form)

@app.post('/users/login', tags=[user_tag], responses={'200': UserResponseSchema, '400': ErrorSchema, '500': ErrorSchema})
def login_route(form: UserLoginSchema):
    """
        Faz o login de um usuário com seu e-mail e senha.
    """
    return login(form)

# ----------------------------- Equipments Routes -----------------------------
equipment_tag = Tag(name="Equipamentos", description="Adição, visualização e deleção de equipamentos à base de dados.")

@app.post('/equipments/create', tags=[equipment_tag], responses={'200': EquipmentResponseSchema, '400': ErrorSchema, '404': ErrorSchema})
def create_equipment_route(form: CreateEquipmentSchema):
    """
        Cria novo equipamento
    """
    return create_equipment(form)

@app.get('/equipments/user', tags=[equipment_tag], responses={'200': ListEquipmentsSchema, '404': ErrorSchema})
def list_equipments_by_user_route(query: ListEquipmentsQueryByUserSchema):
    """
        Lista equipamentos de um usuário
    """
    return list_equipments_by_user(query)

@app.delete('/equipments/delete', tags=[equipment_tag], responses={'200': DeleteResponseSchema, '404': ErrorSchema})
def delete_equipment_route(query: DeleteEquipmentSchema):
    """
        Remove um equipamento através de seu identificador
    """
    return delete_equipment(query)