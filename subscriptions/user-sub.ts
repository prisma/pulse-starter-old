import prisma from "../prisma";

// Create Events
export async function userCreateSub(filters = {}) {
	const userFilter =
		Object.keys(filters).length > 0 ? { after: { ...filters } } : {};

	const subscription = await prisma.user.subscribe({
		create: userFilter,
	});

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received a user create event:", event);
	}
}

// Update Events
export async function userUpdateSub(filters = {}) {
	const userFilter =
		Object.keys(filters).length > 0 ? { after: { ...filters } } : {};

	const subscription = await prisma.user.subscribe({
		update: userFilter,
	});

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received a user update event:", event);
	}
}

// Delete Events
export async function userDeleteSub() {
	const subscription = await prisma.user.subscribe({
		delete: {},
	});

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received a user delete event:", event);
	}
}
