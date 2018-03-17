import * as functions from "firebase-functions";

import * as admin from "firebase-admin";
admin.initializeApp(functions.config().firebase);

export const updateFollowerCounts = functions.firestore

  .document("relationships/{relationshipId}")
  .onWrite(event => {
    // Check if previous and current data exists,
    // If true, it's an update and we don't want to change the follow count
    if (event.data.exists && event.data.previous) {
      return null;
    }

    // Otherwise, we want to +1 for a new doc, or -1 for a deleted doc
    const countChange = event.data.exists ? 1 : -1;

    // Get the user ids
    const ids = event.params.relationshipId.split("_");

    const followerId = ids[0];
    const followedId = ids[1];

    // Reference the document locations
    const db = admin.firestore();

    const followerRef = db.collection("users").doc(followerId);
    const followedRef = db.collection("users").doc(followedId);

    // Return a transaction promise
    return db.runTransaction(async t => {
      // Fetch the data from the DB
      const follower = await t.get(followerRef);
      const followed = await t.get(followedRef);

      //  format the counts
      const followerUpdate = {
        followingCount: (follower.data().followingCount || 0) + countChange
      };
      const followedUpdate = {
        followerCount: (followed.data().followerCount || 0) + countChange
      };

      // run the updates
      await t.set(followerRef, followerUpdate, { merge: true });
      await t.set(followedRef, followedUpdate, { merge: true });

      return t;
    });
  });

export const updatePostCount = functions.firestore

  .document("posts/{postId}")
  .onCreate(async event => {
    // Get the post UserID
    const userId = event.data.data().userId;

    // Reference user doc
    const db = admin.firestore();
    const userRef = db.collection("users").doc(userId);

    // Get the user data
    const user = await userRef.get();

    // Update the count and run the update
    const postCount = (user.data().postCount || 0) + 1;

    return userRef.update({ postCount });
  });
