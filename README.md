# Industrial Maintenance MVP

<div align="center">

![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

## Sobre
Aplicação Web que, através de um modelo de machine-learning embarcado no Back-end, é capaz de identificar se uma máquina industrial dentro de uma empresa apresenta alguma falha, tornando-se viável a previsão e prevenção de falhas de equipamentos em cenários futuros.

## Criação do modelo de Machine Learning

A criação do modelo de Machine Learning utilizado nessa aplicação está presente em um notebook do Google Colab e pode ser acessada [clicando aqui](https://colab.research.google.com/drive/1fSGnvryvNEgY_4oq7OJRIKYlUWdh-xej?usp=sharing).


## Clonando o repositório
Antes de tudo, precisamos clonar o projeto para ser executado em sua máquina. Você pode clonar esse repositório fazendo o download por meio de um arquivo ZIP ou através do seguinte comando:

```
git clone https://github.com/MicaelRiboura/industrial-maintenance-mvp.git
```

> ⚠️ Após clonar o repositório, é necessário ir ao diretório raiz do projeto, pelo terminal, para poder executar os comandos descritos abaixo.

## Executando o Back-end

Para executar a aplicação é necessário ter todas as libs (bibliotecas) python listadas no arquivo `requirements.txt` instaladas. 

#

### 1 - Criando um ambiente virtual (opcional)

Para a instalação das dependências da aplicação, é **fortemente recomendado** a criação de um ambiente virtual python. Esse ambiente tem como objetivo dar mais liberdade de utilizar diferentes bibliotecas e até versões da linguagem Python, sem que haja conflito entre elas.

Você pode criar um  ambiente virtual a partir do seguinte comando:

```
python -m venv env
```

Após criar o ambiente virtual, você pode ativá-lo a partir do seguinte comando:

```
# Windows:
.\env\Scripts\activate.ps1

# Linux ou Mac:
source ./python_env/bin/activate
```

> ⚠️ Esse é um passo opcional, mas fortemente recomendável.

### 2 - Instalando as dependências

Para instalar as libs listadas no arquivo `requirements.txt`, execute o comando abaixo:

```
(env)$ pip install -r requirements.txt
```
### 3 - Executando a API
Finalmente, para executar a API, basta executar o seguinte comando:

```
(env)$ flask run --host 0.0.0.0 --port 5000
```

Em modo de desenvolvimento, é recomendado executar utilizando o parâmetro reload, que reiniciará o servidor automaticamente após uma mudança no código fonte, conforme abaixo:

```
(env)$ flask run --host 0.0.0.0 --port 5000 --reload
```

Ao final, cole esse endereço no seu navegador para visualizar a documentação da API e suas rotas:

```
localhost:5000
```

> ⚠️ O símbolo *(env)$* é apenas para ilustrar um terminal com o virtualenv ativado, não pertencendo aos comandos apresentados acima.

## Executando o Front-end

Para executar a aplicação é necessário ter todas as libs (bibliotecas) JavaScript listadas no arquivo `package.json` instaladas. 

#

### 1 - Instalando as dependências

Para instalar as libs listadas no arquivo `package.json`, execute o comando abaixo:

```
npm install
```
### 2 - Executando a Aplicação
Finalmente, para executar a Aplicação Front-end, basta executar o seguinte comando:

```
npm start
```