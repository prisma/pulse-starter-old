import prismaClient from "../prisma";

// Create Events
export async function postCreateSub(filters = {}) {
	const postFilter =
		Object.keys(filters).length > 0 ? { after: { ...filters } } : {};

	const subscription = await prismaClient.post.subscribe({
		create: postFilter,
	});

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received a post create event:", event);
	}
}

// Update Events
export async function postUpdateSub(filters = {}) {
	const postFilter =
		Object.keys(filters).length > 0 ? { after: { ...filters } } : {};

	const subscription = await prismaClient.post.subscribe({
		update: postFilter,
	});

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received a post update event:", event);
	}
}

// Delete Events
export async function postDeleteSub() {
	const subscription = await prismaClient.post.subscribe({
		delete: {},
	});

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received a post delete event:", event);
	}
}
