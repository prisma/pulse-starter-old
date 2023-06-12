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

```bash
cd pulse-starter
npm i
```

## Configure your project

Create your `.env` file:

```bash
cp .env.example .env
```

Open your new `.env` file and set your two variables

```text
DATABASE_URL=""
PULSE_API_KEY=""
```

Run prisma generate:

```bash
npx prisma generate
```

## Run this example

To run a pulse subscription, execute the index.ts file. This file contains multiple function calls, each with comments explaining their purpose. Feel free to use these to test different subscriptions.

```bash
npx ts-node index.ts
```

> ℹ️ Note: that you can only run one subscription per file. Therefore, do not uncomment more than one call, as it will cause the code to break.

In a seperate terminal run prisma studio and create a user:

```bash
npx prisma studio
```

![Create a user](https://prismaio.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2b50f40d-84a8-42c8-8fd4-139571eaf838%2FScreenshot_2023-06-06_at_3.31.03_PM.png?id=416636c3-5f8f-430a-9ebe-6ec8e9faa708&table=block&spaceId=4835b259-702e-40fc-a59e-e46c06095210&width=2000&userId=&cache=v2)

![Add a user row](https://prismaio.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F562e88e4-6881-40f4-bb28-9c3594bf84ea%2FScreenshot_2023-06-06_at_3.33.36_PM.png?id=3b0dce12-9140-4b16-841b-eff302000921&table=block&spaceId=4835b259-702e-40fc-a59e-e46c06095210&width=2000&userId=&cache=v2)

If you are running the `userCreateSub()` function in the `index.ts` file you should see the following output in your termainl where you ran `npx ts-node index.ts`

```
just received a user create event: {
  action: 'create',
  after: {
    id: 1,
    email: 'marc@pulseiscool.io',
    name: 'Marc'
  }
}
```

## Learn more about Pulse

-   [Pulse products page](https://www.prisma.io/data-platform/pulse)
-   [Sign up for early access](https://prisma-data.typeform.com/to/K3fQej6J)
-   [Pulse introduction blog post](https://www.prisma.io/blog/introducing-pulse-jtu4UPC8ujy4)
-   [Pulse Documentation](https://pris.ly/pulse-docs)
