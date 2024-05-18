# Directus Example

This is a [Directus](https://directus.io) project bootstrapped with [`create-directus-project`](https://github.com/directus/directus/tree/main/packages/create-directus-project).

Admin credentials for this Directus instance:

- **Email** — `admin@example.com`
- **Password** — `d1r3ctu5`
  
## 📌 Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (often included with newer Docker installations)

## 🚀 Getting Started

1. Clone this repo.

1. build the angular demo

   ```shell
   cd ./angular
   npm i
   npm run build
   ```

   from WSL shell

   ```shell
   cd ./angular
   docker build . --tag directusdemo/angular:local
   ```

1. Start the docker container.

   ```shell
   cd directus
   docker compose up -d
   ```

   Your Directus example is now running at <http://127.0.0.1:8055>.
   Your directus webapp demo is now running a <http://127.0.0.1:4200>.

1. You can login with the admin credentials shown above to explore this Directus example project [see `.env` config file](./.env).

> many elements (among them, what DB to use) can be configure in [`.env` config file](./.env).

## 🔗 Links

- [Official Site](https://directus.io)
- [Documentation](https://docs.directus.io)
