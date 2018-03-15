import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


export const newUnicornPost = functions.firestore

    .document('posts/{postId}')
    .onCreate(async event => {
    
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
        }

        return admin.messaging().sendToTopic("unicorns", payload)

});