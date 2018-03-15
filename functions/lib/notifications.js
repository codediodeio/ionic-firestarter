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
exports.newUnicornPost = functions.firestore
    .document('posts/{postId}')
    .onCreate((event) => __awaiter(this, void 0, void 0, function* () {
    const post = event.data.data();
    const isUnicorn = post.content.toLowerCase().indexOf("unicorn") >= 0;
    if (!isUnicorn) {
        return null;
    }
    // Notification content
    const payload = {
        notification: {
            title: 'New Post about Unicorns',
            body: `Read the latest unicorn post!`,
            icon: 'https://goo.gl/Fz9nrQ'
        }
    };
    return admin.messaging().sendToTopic("unicorns", payload);
}));
//# sourceMappingURL=notifications.js.map