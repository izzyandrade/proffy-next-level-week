# Instalação

- yarn add | npm install

- "start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts",
- "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
- "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback"

# Funcionalidades

## Conexões

- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
  - Filtrar por matéria, dia da semana e horário;
