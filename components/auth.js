import axios from 'axios';

const FIREBASE_API_KEY = 'AIzaSyB1YbGfa-9NfPcZ19CPgnSWmYzisq_HDbs'

export async function createUser(email, password) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + FIREBASE_API_KEY,
    {
        email: email,
        password: password,
        returnSecureToken: true
    });
}