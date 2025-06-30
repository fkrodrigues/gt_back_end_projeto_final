Esta a API do projeto final de back end do curso geração tech de um sistema de e-commerce, desenvolvida com Node.js, Express.js e MySQL. A API fornece endpoints para gerenciamento de usuários, categorias e produtos, com autenticação JWT para proteção das rotas.

Tecnologias Utilizadas

Node.js
Express.js
MySQL
Sequelize (ORM)
JWT (Autenticação)
Dotenv (Gerenciamento de variáveis de ambiente)
Nodemon (Desenvolvimento)


Estrutura do Projeto
```
src/
├── config/            # Configurações do banco de dados
├── controllers/       # Lógica dos endpoints
├── middleware/        # Middlewares (autenticação, etc.)
├── models/            # Modelos do Sequelize
├── routes/            # Definição das rotas
├── services/          # Lógica de negócios
├── app.js             # Configuração principal do Express
.env                   # Variáveis de ambiente

```

Mais Detalhes da Estrutura
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
├── tests
├── env
├── .gitignore
├── package-lock.json
└── package.json

```

Requisitos do Sistema

Node.js
MySQL 
NPM

Endpoints Implementados

Usuários
GET /v1/user/listall - Obter informações de todos os usuários
GET /v1/user/:id - Obter informações do usuário
POST /v1/user - Cadastrar novo usuário
PUT /v1/user/:id - Atualizar usuário
DELETE /v1/user/:id - Deletar usuário

Categorias
GET /v1/category/listall - Obter informações de todas as categorias
GET /v1/category/:id - Obter informações da categoria
POST /v1/category - Cadastrar nova categoria
PUT /v1/category/:id - Atualizar categoria
DELETE /v1/category/:id - Deletar categoria

Produtos
GET /v1/product/listall - Obter informações de todos os produtos
GET /v1/product/:id - Obter informações do produto
POST /v1/product - Cadastrar novo produto
PUT /v1/product/:id - Atualizar produto
DELETE /v1/product/:id - Deletar produto


Autenticação
POST /v1/login/token - Gerar token JWT


A API retorna os seguintes códigos de status:

200 OK: Requisição bem-sucedida
201 Created: Recurso criado com sucesso
204 No Content: Requisição bem-sucedida sem corpo de resposta
400 Bad Request: Dados da requisição incorretos
401 Unauthorized: Autenticação necessária ou falha
404 Not Found: Recurso não encontrado



Como Executar

Clone o repositório
Instale as dependências: npm install
Configure as variáveis de ambiente no arquivo .env
Execute o servidor: npm start (produção) ou npm run dev (desenvolvimento)

