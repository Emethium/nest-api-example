# nest-api-example

## Description

A [Nest](https://github.com/nestjs/nest) example API using [TypeORM](https://github.com/typeorm/typeorm) with SQLite for simplicity.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Entity

```ts
{
  id: 1,
  genericField: "string"
}
```

## Routes

- {/, GET}: main index
- {/entities, GET}: list of all entities created
- {/entities/create, POST}: entity creation path
- {/entities/:id/update, PUT}: entity update path
- {/entities/:id/delete, DELETE}: entyty deletion path
