import prisma from "../prisma";

// Create Events
export async function profileCreateSub(filters = {}) {
	const profileFilter =
		Object.keys(filters).length > 0 ? { after: { ...filters } } : {};

	const subscription = await prisma.profile.subscribe({
		create: profileFilter,
	});

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received a profile create event:", event);
	}
}

// Update Events
export async function profileUpdateSub(filters = {}) {
	const profileFilter =
		Object.keys(filters).length > 0 ? { after: { ...filters } } : {};

	const subscription = await prisma.profile.subscribe({
		update: profileFilter,
	});

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received a profile update event:", event);
	}
}

// Delete Events
export async function profileDeleteSub() {
	const subscription = await prisma.profile.subscribe({
		delete: {},
	});

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received a profile delete event:", event);
	}
}
