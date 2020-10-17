# Comandos utilizados no backend

- Iniciando um projeto node
`yarn init -y`

- Adicionando o express como dependência do projeto
`yarn add express`
`yarn add @types/express -D`

## Executar para testar
- Instalando o typescript como dep. de desenvolvimento
`yarn add typescript -D`
`yarn tsc --init`

Precisamos mudar a versão do tsconfig criado para es2017.

Pacote para executar o projeto TS usando node
`yarn add ts-node-dev -D`

Agora, precisamos alterar o package.json para conter o seguinte script:
`"scripts": {
    "dev": "ts-node-dev src/server.ts"
},`

Agora podemos executar 
`yarn dev`
para executar a aplicação

=======================

# Configurando o banco de dados

`yarn add typeorm sqlite3`

Alterando o package.json para habilitar o typeorm com ts. Adicionar essa linha aos scripts
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

Adiciono duas linhas no ormconfig
"migrations": [
    "./src/database/migrations/*.ts"
],
"cli": {
    "migrationsDir": "./src/database/migrations"
}

E agora podemos fazer o comando
`yarn typeorm migration:create -n create_orphanages`

Depois de implementada a migration
`yarn typeorm migration:run`

Para desfazer
`yarn typeorm migration:revert`

Utilizar o beekeeper studio

Para lidar com upload de imagens 
`yarn add multer`
`yarn add @types/multer`