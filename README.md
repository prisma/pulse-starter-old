# Pulse Starter Example

## Getting started

Be sure to have the following set up before using this project. Check the [docs](https://pris.ly/pulse-docs) for more information.

-   A database with the following configuration
    -   Postgres version 12+
    -   Ensure your database is publicly accessible
    -   Enable [logical replication](https://www.postgresql.org/docs/current/logical-replication-quick-setup.html) on your database
    -   A database superuser that can be used for connections inside Pulse
-   An invitation to Pulse's Early Access program.
-   A Pulse Cloud Projects API key

## Download and install dependencies

Clone this repository:

```bash
git clone https://github.com/mhessdev/pulse-starter.git
```

Install dependencies:

```bash
cd pulse-starter
npm i
```

## Configure your project

Create your `.env`

```bash
cp .env.example .env
```

Open your new `.env` file and set your two variables

```text
DATABASE_URL=""
PULSE_AP_KEY=""
```

Run prisma generate

```bash
npx prisma generate
```

## Contributing to this project
