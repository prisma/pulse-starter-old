import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { withPulse } from "@prisma/extension-pulse";

const apiKey: string =
	process.env.PULSE_API_KEY !== undefined ? process.env.PULSE_API_KEY : "";
const prismaClient = new PrismaClient().$extends(withPulse({ apiKey: apiKey }));

export default prismaClient;
