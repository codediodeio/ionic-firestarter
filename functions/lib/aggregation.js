"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.updateFollowerCounts = functions.firestore
    .document('relationships/{relationshipId}')
    .onWrite(event => {
    // Check if previous and current data exists, 
    // If true, it's an update and we don't want to change the follow count
    if (event.data.exists && event.data.previous) {
        return null;
    }
    // Otherwise, we want to +1 for a new doc, or -1 for a deleted doc
    const countChange = event.data.exists ? 1 : -1;
    // Get the user ids
    const ids = event.params.relationshipId.split('_');
    const followerId = ids[0];
    const followedId = ids[1];
    // Reference the document locations
    const db = admin.firestore();
    const followerRef = db.collection('users').doc(followerId);
    const followedRef = db.collection('users').doc(followedId);
    // Return a transaction promise
    return db.runTransaction((t) => __awaiter(this, void 0, void 0, function* () {
        // Fetch the data from the DB
        const follower = yield t.get(followerRef);
        const followed = yield t.get(followedRef);
        //  format the counts
        const followerUpdate = {
            followingCount: (follower.data().followingCount || 0) + countChange
        };
        const followedUpdate = {
            followerCount: (followed.data().followerCount || 0) + countChange
        };
        // run the updates
        yield t.set(followerRef, followerUpdate, { merge: true });
        yield t.set(followedRef, followedUpdate, { merge: true });
        return t;
    }));
});
exports.updatePostCount = functions.firestore
    .document('posts/{postId}')
    .onCreate((event) => __awaiter(this, void 0, void 0, function* () {
    // Get the post UserID
    const userId = event.data.data().userId;
    // Reference user doc
    const db = admin.firestore();
    const userRef = db.collection('users').doc(userId);
    // Get the user data
    const user = yield userRef.get();
    // Update the count and run the update
    const postCount = (user.data().postCount || 0) + 1;
    return userRef.update({ postCount });
}));
//# sourceMappingURL=aggregation.js.map