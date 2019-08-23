import * as admin from 'firebase-admin';

//import "@firebase/app";

import serviceAccount from './trug-apparels-firebase-adminsdk-dhrjw-efd749b802.json';

const Firebase_app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trug-apparels.firebaseio.com"
});

export default Firebase_app;
