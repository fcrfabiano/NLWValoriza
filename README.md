# NLWValoriza

O projeto NLWValoriza tem como objetivo a troca mensagens de elogios entre pessoas.

##### Regras de Négocio
- Cadastro de Usuário
- 1. Não é permitido cadastrar mais de um usuário com o mesmo e-mail
- 2. Não é permitido cadastrar usuário sem o e-mail
- Cadastro de TAG
- 1. Não é permitido cadastrar mais de uma tag com o mesmo nome
- 2. Não é permitido cadastrar tag sem nome
- 3. Não é permitido o cadastro por usuários que não sejam administradores
- Cadastro de elogios
- 1. Não é permitido um usuário cadastrar um elogio para si
- 2. Não é permitido cadastrar elogio para usuários inválidos
- 3. O usuário precisa estar autenticado na aplicação

#### Técnologias Utilizadas
- TypeORM
- Express
- Sqlite
- JsonWebToken
- uuid
- Typescript
- POO
- S.O.L.I.D
- MSC
- Class Transform


## Como instalar o projeto
```sh
git clone git@github.com:fcrfabiano/NLWValoriza.git && cd NLWValoriza
```

## Instalando dependências
```sh
yarn
ou
npm install
```

## Rodando o projeto
```sh
yarn dev
ou
npm run dev
```
# Rotas POST

## POST /users
##### Corpo da Requisição
~~~json
{
  "name": "username",
  "email": "email@email.com",
  "password": "password",
  "admin": false
}
~~~
##### Resposta da Requisição
~~~json
{
  "id": "92f8b591-a1b7-44d8-8984-2fca76ad8505",
  "name": "username",
  "email": "email@email.com",
  "password": "$2a$08$4x3xPEWm/U487lN9tpaX8OKgBjPrN8VdI68SxZKFbbbb2ivowmYbK",
  "admin": false,
  "created_at": "2022-10-08T01:33:44.000Z",
  "updated_at": "2022-10-08T01:33:44.000Z"
}
~~~
## POST /tags
##### Corpo da Requisição
~~~json
{
  "name": "tag"
}
~~~
##### Cabeçalho da Requisição
~~~json
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsMkBlbWFpbC5jb20iLCJpYXQiOjE2NjUxOTM0ODksImV4cCI6MTY2NTI3OTg4OSwic3ViIjoiY2JiZDJkZTYtYzhjNi00NGMxLTllMmUtZGMzNDJlMmUzZDM3In0.U87-dYNTW6GZsnNxDvYuqJ1LkjYL-ejnD_Cxyu-NsWA"
}
~~~
##### Resposta da Requisição
~~~json
{
  "id": "401b132f-9fbc-40f4-9850-d5753627dadf",
  "name": "tag",
  "created_at": "2022-10-08T01:45:16.000Z",
  "updated_at": "2022-10-08T01:45:16.000Z"
}
~~~
## POST /login
##### Corpo da Requisição
~~~json
{
  "email": "email@email.com",
  "password": "password"
}
~~~
##### Resposta da Requisição
~~~json
{
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY2NTE5MzIyMCwiZXhwIjoxNjY1Mjc5NjIwLCJzdWIiOiI5MmY4YjU5MS1hMWI3LTQ0ZDgtODk4NC0yZmNhNzZhZDg1MDUifQ.Gg5eAwVE0lgFaPtZLuegUUDZiLzoWPwiTjzIgXKdHaI"
}
~~~
## POST /compliments
##### Cabeçalho da Requisição
~~~json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZjcmZhYmlhbm9AdGVzdC5jb20iLCJpYXQiOjE2NjUxOTQwMDcsImV4cCI6MTY2NTI4MDQwNywic3ViIjoiYTJkY2EyMDMtMWEwYy00M2RiLTk3M2QtZTRjNGE0ZDc2YTljIn0.cze5rg4gHXMWDW_T2IFS33nnma6DKjP-ZLrW8jISUSA"
}
~~~
##### Corpo da Requisição
~~~json
{
  "tag_id": "401b132f-9fbc-40f4-9850-d5753627dadf",
  "user_receiver": "92f8b591-a1b7-44d8-8984-2fca76ad8505",
  "message": "mensagem"
}
~~~
##### Resposta da Requisição
~~~json
{
  "id": "d22f3024-d1cb-4d1b-80d8-45aeda06dbe4",
  "user_sender": "a2dca203-1a0c-43db-973d-e4c4a4d76a9c",
  "user_receiver": "92f8b591-a1b7-44d8-8984-2fca76ad8505",
  "tag_id": "401b132f-9fbc-40f4-9850-d5753627dadf",
  "message": "mensagem",
  "created_at": "2022-10-08T01:56:27.000Z"
}
~~~

# Rotas GET


## GET /users/compliments/send
##### Cabeçalho da Requisição
~~~json
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZjcmZhYmlhbm9AdGVzdC5jb20iLCJpYXQiOjE2NjUxOTQwMDcsImV4cCI6MTY2NTI4MDQwNywic3ViIjoiYTJkY2EyMDMtMWEwYy00M2RiLTk3M2QtZTRjNGE0ZDc2YTljIn0.cze5rg4gHXMWDW_T2IFS33nnma6DKjP-ZLrW8jISUSA"
}
~~~
##### Resposta da Requisição
~~~json
[
  {
    "id": "d22f3024-d1cb-4d1b-80d8-45aeda06dbe4",
    "user_sender": "a2dca203-1a0c-43db-973d-e4c4a4d76a9c",
    "user_receiver": "92f8b591-a1b7-44d8-8984-2fca76ad8505",
    "tag_id": "299b17e4-a0e8-4a18-b3f5-03a7f9815683",
    "message": "mensagem",
    "created_at": "2022-10-08T01:56:27.000Z",
    "userSender": {
      "id": "a2dca203-1a0c-43db-973d-e4c4a4d76a9c",
	  "name": "fcrfabiano",
	  "email": "fcrfabiano@test.com",
	  "password": "$2a$08$r8AhiBtstJlIXVfFz37ztOhpmOJ24aQvJgYDXCtt6y1HeWkmzuGoa",
	  "admin": true,
	  "created_at": "2022-10-08T01:53:12.000Z",
	  "updated_at": "2022-10-08T01:53:12.000Z"
    },
	"userReceiver": {
	  "id": "92f8b591-a1b7-44d8-8984-2fca76ad8505",
	  "name": "username",
	  "email": "email@email.com",
	  "password": "$2a$08$4x3xPEWm/U487lN9tpaX8OKgBjPrN8VdI68SxZKFbbbb2ivowmYbK",
	  "admin": false,
	  "created_at": "2022-10-08T01:33:44.000Z",
	  "updated_at": "2022-10-08T01:33:44.000Z"
	},
	"tag": {
	  "id": "299b17e4-a0e8-4a18-b3f5-03a7f9815683",
	  "name": "resiliência",
	  "created_at": "2022-10-08T01:54:51.000Z",
	  "updated_at": "2022-10-08T01:54:51.000Z"
	}
  }
]
~~~
## GET /users/compliments/receive
##### Cabeçalho da Requisição
~~~json
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZjcmZhYmlhbm9AdGVzdC5jb20iLCJpYXQiOjE2NjUxOTQwMDcsImV4cCI6MTY2NTI4MDQwNywic3ViIjoiYTJkY2EyMDMtMWEwYy00M2RiLTk3M2QtZTRjNGE0ZDc2YTljIn0.cze5rg4gHXMWDW_T2IFS33nnma6DKjP-ZLrW8jISUSA"
}
~~~
##### Resposta da Requisição
~~~json
[
  {
    "id": "d22f3024-d1cb-4d1b-80d8-45aeda06dbe4",
    "user_sender": "a2dca203-1a0c-43db-973d-e4c4a4d76a9c",
    "user_receiver": "92f8b591-a1b7-44d8-8984-2fca76ad8505",
    "tag_id": "299b17e4-a0e8-4a18-b3f5-03a7f9815683",
    "message": "mensagem",
    "created_at": "2022-10-08T01:56:27.000Z",
    "userSender": {
      "id": "a2dca203-1a0c-43db-973d-e4c4a4d76a9c",
      "name": "fcrfabiano",
      "email": "fcrfabiano@test.com",
      "password": "$2a$08$r8AhiBtstJlIXVfFz37ztOhpmOJ24aQvJgYDXCtt6y1HeWkmzuGoa",
      "admin": true,
      "created_at": "2022-10-08T01:53:12.000Z",
      "updated_at": "2022-10-08T01:53:12.000Z"
    },
    "userReceiver": {
      "id": "92f8b591-a1b7-44d8-8984-2fca76ad8505",
      "name": "username",
      "email": "email@email.com",
      "password": "$2a$08$4x3xPEWm/U487lN9tpaX8OKgBjPrN8VdI68SxZKFbbbb2ivowmYbK",
      "admin": false,
      "created_at": "2022-10-08T01:33:44.000Z",
      "updated_at": "2022-10-08T01:33:44.000Z"
    },
    "tag": {
      "id": "299b17e4-a0e8-4a18-b3f5-03a7f9815683",
      "name": "resiliência",
      "created_at": "2022-10-08T01:54:51.000Z",
      "updated_at": "2022-10-08T01:54:51.000Z"
    }
  }
]
~~~
## GET /tags
##### Cabeçalho da Requisição
~~~json
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZjcmZhYmlhbm9AdGVzdC5jb20iLCJpYXQiOjE2NjUxOTQwMDcsImV4cCI6MTY2NTI4MDQwNywic3ViIjoiYTJkY2EyMDMtMWEwYy00M2RiLTk3M2QtZTRjNGE0ZDc2YTljIn0.cze5rg4gHXMWDW_T2IFS33nnma6DKjP-ZLrW8jISUSA"
}
~~~
##### Resposta da Requisição
~~~json
[
  {
    "id": "abebcc2e-71e7-4b73-a455-2bad39d9fff8",
    "name": "inspiração",
    "created_at": "2021-07-05T21:15:31.000Z",
    "updated_at": "2021-07-05T21:15:31.000Z",
    "name_custom": "#inspiração"
  },
  {
    "id": "d7c6de49-961d-43e6-ae7b-7a707a5ab4ab",
    "name": "liderança",
    "created_at": "2021-07-06T02:39:19.000Z",
    "updated_at": "2021-07-06T02:39:19.000Z",
    "name_custom": "#liderança"
  },
  {
    "id": "4d5a5cc6-88a6-4706-a483-e8a2087cfb2a",
    "name": "otimista",
    "created_at": "2021-07-14T00:57:48.000Z",
    "updated_at": "2021-07-14T00:57:48.000Z",
    "name_custom": "#otimista"
  },
  {
    "id": "299b17e4-a0e8-4a18-b3f5-03a7f9815683",
    "name": "resiliência",
    "created_at": "2022-10-08T01:54:51.000Z",
    "updated_at": "2022-10-08T01:54:51.000Z",
    "name_custom": "#resiliência"
  }
]
~~~
## GET /users
##### Cabeçalho da Requisição
~~~json
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZjcmZhYmlhbm9AdGVzdC5jb20iLCJpYXQiOjE2NjUxOTQwMDcsImV4cCI6MTY2NTI4MDQwNywic3ViIjoiYTJkY2EyMDMtMWEwYy00M2RiLTk3M2QtZTRjNGE0ZDc2YTljIn0.cze5rg4gHXMWDW_T2IFS33nnma6DKjP-ZLrW8jISUSA"
}
~~~
##### Resposta da Requisição
~~~json
[
  {
    "id": "92f8b591-a1b7-44d8-8984-2fca76ad8505",
    "name": "username",
    "email": "email@email.com",
    "admin": false,
    "created_at": "2022-10-08T01:33:44.000Z",
    "updated_at": "2022-10-08T01:33:44.000Z"
  },
  {
    "id": "cbbd2de6-c8c6-44c1-9e2e-dc342e2e3d37",
    "name": "username2",
    "email": "email2@email.com",
    "admin": true,
    "created_at": "2022-10-08T01:44:26.000Z",
    "updated_at": "2022-10-08T01:44:26.000Z"
  }
]
~~~

Desenvolvido por [Fabiano César](https://www.linkedin.com/in/fabianocesar/).
