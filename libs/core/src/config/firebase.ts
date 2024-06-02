import * as admin from "firebase-admin";
import * as serviceAccount from "../../serviceAccountKey.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: "https://<your-database-name>.firebaseio.com",
});

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
