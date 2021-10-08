export const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "description": "Cadastro de usuários",
        "version": "1.0.0",
        "title": "API Hvex teste"
    },
    "host": "localhost:3000",
    "tags": [
        {
            "name": "API Hvex",
            "description": "Cadastro de usuários"
        }
    ],
    "paths": {
        "/usuarios": {
            "post": {
                "tags": [
                    "usuarios"
                ],
                "summary": "Cadastrar usuário no banco de dados",
                "description": "",
                "operationId": "CadastrarUsuario",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Usuário para cadastrar no banco de dados",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/cadastroUsuario"
                        }
                    }
                ],
                "responses": {
                    "405": {
                        "description": "Entrada inválida"
                    }
                }
            },
            "put": {
                "tags": [
                    "usuarios"
                ],
                "summary": "Atualizar usuário",
                "description": "",
                "operationId": "atualizaUsuario",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Cadastro de usário no banco de dados",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/usuario"
                        }
                    }
                ],
                "responses": {
                    "400": {
                        "description": "Id inválido"
                    },
                    "404": {
                        "description": "Usuário não encontrado"
                    },
                    "405": {
                        "description": "Erro na validação"
                    }
                }
            }
        },
        "/usuarios/{id}": {
            "get": {
                "tags": [
                    "usuarios"
                ],
                "summary": "Pegar usuário pelo id",
                "description": "Retorna um usuário",
                "operationId": "pegarUsuarioPorId",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Retorna usuário do id ",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Operaçào com sucesso!",
                        "schema": {
                            "$ref": "#/definitions/usuario"
                        }
                    },
                    "400": {
                        "description": "Id invalido"
                    },
                    "404": {
                        "description": "Usuario não encontrado"
                    }
                }
            },
            "delete": {
                "tags": [
                    "usuarios"
                ],
                "summary": "Excluir usuário",
                "description": "",
                "operationId": "deleteUsuario",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Id do usuário para excluir",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "400": {
                        "description": "Id invalido"
                    },
                    "404": {
                        "description": "Usuario não encontrado"
                    }
                }
            }
        }
    },
    "definitions": {
        "usuario": {
            "type": "object",
            "required": [
                "nome",
                "nomeDeUsuario",
                "senha"
            ],
            "properties": {
                "id": {
                    "type": "string",
                    "format": "string",
                    "example": "615f3b41e30f250fc0c84b44"
                },
                "nome": {
                    "type": "string",
                    "example": "José"
                },
                "nomeDeUsuario": {
                    "type": "string",
                    "example": "admin"
                },
                "senha": {
                    "type": "string",
                    "description": "senha de acesso",
                    "example": "123456"
                },
                "data": {
                    "type": "number",
                    "format": "date",
                    "example": "2021-10-07T18:24:01.562+00:00"
                }
            }
        },
        "cadastroUsuario": {
            "type": "object",
            "required": [
                "nome",
                "nomeDeUsuario",
                "senha"
            ],
            "properties": {
                "nome": {
                    "type": "string",
                    "example": "José"
                },
                "nomeDeUsuario": {
                    "type": "string",
                    "example": "admin"
                },
                "senha": {
                    "type": "string",
                    "description": "senha de acesso",
                    "example": "123456"
                }
            }
        }
    }
}