

## API_HVEX 
#############################################################


## Para rodar a aplicação

    clonar o repositório - git clone https://github.com/CarlosChagas/api_hvex.git
    abrir o terminal e digitar npm install para instalar as dependências do projeto
    inciar o servidor start index.js
    
## Informações do Banco de dados

    banco de dados utilizado é o MongoDb Atlas (cloud)
    Com a conexão pelo mongoose

##Utilização das rotas

Para uma documentação mais detalhada -> http://localhost:3000/doc

    insomnia/Postman;

     Autenticação

        para cadastrar - http://localhost:3000/usuarios; 
        
        ## ex:

        {
            "nome": "Nome real ", -> requerido
            "nomeDeUsuario": "nome de usuario", -> requerido
            "senha": "senha de acesso",          -> requerido 
        }
        
   

        ##buscar usuário por id -> get http://localhost:8000/usuarios/id

        ##Atualizar produto -> put http://localhost:8000/usuários

        ##Deletar produto -> delete http://localhost:8000/usuarios/id

       
