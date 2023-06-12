/** Uncomment the function you want to use, then run npx ts-node index.ts */

import {
	userCreateSub,
	userUpdateSub,
	userDeleteSub,
} from "./subscriptions/user-sub";

import {
	profileCreateSub,
	profileUpdateSub,
	profileDeleteSub,
} from "./subscriptions/profile-sub";

import {
	postCreateSub,
	postUpdateSub,
	postDeleteSub,
} from "./subscriptions/post-sub";

// all user table create events
userCreateSub();

// user table create events where the user named "Username" was created
// userCreateSub({ name: "Username" });

// all user table update events
// userUpdateSub();

// user table update events where the user named "Username" was updated
// userUpdateSub({name: "Username"});

// all user table delete events
// userDeleteSub();

// all profile table create events
// profileCreateSub();

// profile table create events where the profile with userId 1 was created
// profileCreateSub({ userId: 1 });

// all profile table update events
// profileUpdateSub();

// profile table update events where the profile with userId 1 was updated
// profileUpdateSub({userId: 1});

// all profile table delete events
// profileDeleteSub();

// all post table create events
// postCreateSub();

// post table create events where the post with authorId 1 was created
// postCreateSub({ authorId: 1 });

// all post table update events
// postUpdateSub();

// post table update events where the post with authorId 1 was updated
// postUpdateSub({authorId: 1});

// all post table delete events
// postDeleteSub();
