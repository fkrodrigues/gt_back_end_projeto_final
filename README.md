Esta a API do projeto final de back end do curso geração tech de um sistema de e-commerce, desenvolvida com Node.js, Express.js e MySQL. 
A API fornece endpoints para gerenciamento de usuários, categorias e produtos, com autenticação JWT para proteção das rotas.

# Tecnologias Utilizadas

Node.js
Express.js
MySQL
Sequelize (ORM)
JWT (Autenticação)
Dotenv (Gerenciamento de variáveis de ambiente)
Nodemon (Desenvolvimento)
Swagger (Documentação)


# Estrutura do Projeto
```
src/
├── config/            # Configurações do banco de dados
├── controllers/       # Lógica dos endpoints
├── middleware/        # Middlewares (autenticação, etc.)
├── models/            # Modelos do Sequelize
├── routes/            # Definição das rotas
├── services/          # Lógica de negócios
├── app.js             # Configuração principal do Express
├── swagger.json       # Documentação
.env                   # Variáveis de ambiente

```

# Mais Detalhes da Estrutura
```
src
├── config
│   └── database.js
├── controllers
│   ├── categoryController.js
│   ├── loginController.js
│   ├── productController.js
│   └── userController.js
├── middleware
│   └── authMiddleware.js
├── models
│   ├── category.js
│   ├── product.js
│   └── user.js
├── routes
│   ├── categoryRoutes.js
│   ├── loginRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
├── services
│   ├── categoryService.js
│   ├── loginService.js
│   ├── productService.js
│   └── userService.js
├── app.js
├── swagger.json
├── env
├── .gitignore
├── package-lock.json
└── package.json

```

# Requisitos do Sistema
```
Node.js
MySQL 
NPM
```

# Endpoints Implementados

## Usuários
```
GET /user/listAll - Obter informações de todos os usuários
GET /user/:id - Obter informações do usuário
POST /user - Cadastrar novo usuário
PUT /user/:id - Atualizar usuário
DELETE /user/:id - Deletar usuário
```

## Categorias
```
GET /category/listAll - Obter informações de todas as categorias
GET /category/:id - Obter informações da categoria
POST /category - Cadastrar nova categoria
PUT /category/:id - Atualizar categoria
DELETE /category/:id - Deletar categoria
```

## Produtos
```
GET /product/listAll - Obter informações de todos os produtos
GET /product/:id - Obter informações do produto
POST /product - Cadastrar novo produto
PUT /product/:id - Atualizar produto
DELETE /product/:id - Deletar produto
```

# Autenticação
POST /login/token - Gerar token JWT


# A API retorna os seguintes códigos de status:
```
200 OK: Requisição bem-sucedida
201 Created: Recurso criado com sucesso
204 No Content: Requisição bem-sucedida sem corpo de resposta
400 Bad Request: Dados da requisição incorretos
401 Unauthorized: Autenticação necessária ou falha
404 Not Found: Recurso não encontrado
```

# Documentação da API com Swagger


Este projeto utiliza o **Swagger** para documentação interativa da API. 
A documentação fornece uma melhor visão dos endpoints disponíveis, seus parâmetros, formatos de requisição/resposta e exemplos de uso.

## Acessando a Documentação

A documentação está disponível em:  
`http://localhost:3000/docs/` 

## Recursos do Swagger

- Listagem completa de todos os endpoints
- Teste interativo das requisições diretamente na interface
- Modelos de requisição/resposta
- Autenticação integrada para endpoints protegidos
- Códigos de status e mensagens de erro documentados

> **Nota:** A versão online sempre reflete a última versão melhor implantada da API.


# Como Executar
```
Clone o repositório
Instale as dependências: npm install
Configure as variáveis de ambiente no arquivo .env
Execute o servidor: npm start (produção) ou npm run dev (desenvolvimento)
```

