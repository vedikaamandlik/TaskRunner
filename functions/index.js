const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.verifyLegalDocument = functions.firestore
  .document('legalDocuments/{documentId}')
  .onCreate(async (snapshot, context) => {
    const documentData = snapshot.data();

    // Perform your verification logic here (e.g., contacting the admin for manual verification).

    // If the document is verified, update the user's registration status in the 'users' collection.
    if (documentData.verified) {
      const userId = documentData.userId;
      await admin.firestore().collection('users').doc(userId).update({ verified: true });
    }
  });