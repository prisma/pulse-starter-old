# Pulse Starter Example

## Getting started

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
