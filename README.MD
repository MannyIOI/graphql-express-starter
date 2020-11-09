Commands

##### *ADD how to add postgres database locally

#### *How to install postgres

#### *How to install pgAdmin4

# How to connect database to pgAdmin4
1. sudo -i -u postgres
2. psql
3. `CREATE DATABASE mokos;`
4. `CREATE USER manny WITH ENCRYPTED PASSWORD '123456';`
5. `GRANT ALL PRIVILEGES ON DATABASE mokos TO manny;`
6. Open pgAdmin application
7. In the connect tab of the create new server \
    option Enter `manny` as username and `123456` as password

# KNEX

## How to install knex
#### npm install knex -g

## to create migration files

#### knex migrate:make `MODEL_NAME` -x ts  

## to apply migrations locally

#### knex migrate:latest

## to apply migrations on production server

#### knex migrate:latest --env production

## to rollback migrations locally

#### knex migrate:rollback

## to apply migrations on production server

#### knex migrate:rollback --env production

# NPM
### For development purpose
#### yarn start:dev

<hr>

### For deployment
#### yarn start
<hr>

### add to package.json as script on deploy
#### "postinstall": "npm run build-ts",
