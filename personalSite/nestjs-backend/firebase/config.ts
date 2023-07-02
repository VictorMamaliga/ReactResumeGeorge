import myJson from './key.json';
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({
    credential: cert(myJson)
});

export const db = getFirestore();
