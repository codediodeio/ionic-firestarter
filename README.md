# Ionic Firebase Starter

[![Slack](https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/assets%2Fslack-badge.svg?alt=media&token=3e68acef-3e00-4925-9710-e11cee5923e4)](https://join.slack.com/angularfirebase/shared_invite/MjA2NTgxMTI0MTk2LTE0OTg4NTQ4MDAtMjhhZDIzMjc0Mg)

An Ionic + Firebase starter app targeted at native deployment to iOS and Android platforms (and PWA).

## Features

This app is demonstrates variety of features that can be deployed cross-platform. In most cases, you can drop a provider/component into an existing app painlessly. 

### Auth

- Anonymous and Facebook User Auth
- Customizable User Profile

### Firestore

- Basic CRUD Demo
- Heart/Liking System
- User Follow/Unfollow System
- Automatic Data Aggregation with Cloud Functions

### Storage

- Native Camera Capture
- Firebase Storage Uploads

### Push Notifications

- Multi-device Token Management
- Topic based Notifications
- Automatic Notifications with Cloud Functions

### Firebase iOS Android Platform Features

- Collect Custom User Analytics
- Create a Dymanic User Experience with Remote Config
- Increase Conversions with Predictions
- Serve Ads with Admob

## Install Steps

If only targeting the web, you can skip steps 2 and 3 below. 

### Ionic App

0. `git clone` this repo, cd into it, and run `npm install`
1. Add your Firebase web config to the `app.module`
2. Save `google-services.json` and `GoogleService-Info.plist` from Firebase to the project root.
3. Run `ionic cordova emulate android -l -c` or (ios) to 

### Cloud Functions Deployment

Cloud functions handle backend tasks, such as push notifications and 

0. `cd functions`
1. `npm install`
2. `firebase deploy --only functions`

Building a native app is hard... Watch the videos [Ionic Native + Firebase](https://projects.angularfirebase.com/p/ionic-native-with-firebase) or get in touch on Slack.


## License

You must enroll in the [Ionic Native + Firebase](https://projects.angularfirebase.com/p/ionic-native-with-firebase) for an unrestricted commercial license to the source code.  


