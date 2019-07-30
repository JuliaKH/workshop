import * as firebase from "firebase";

import SignInObservable  from './Observable'
import Observer from './Observer'
import {closeForm} from "../sign-in";
import {signInButton} from '../sign-in'

const provider = new firebase.auth.GoogleAuthProvider();

const googleSignInBtn = document.querySelector('.google-btn');
let signOutButton = document.querySelector('.sign-out__button');

const closeRegistrationForm = () => {
    closeForm();
};
const addUserImage = (user) => {
    document.querySelector('.sign-in__logo').src = user.photoURL;
};

const googleSignIn  = () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        signInButton.classList.remove('sign-in__button--active');
        signOutButton.classList.add('sign-in__button--active');
        UserSignInObservable.notifyObservers(user);
        })
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};


const UserSignInObservable = new SignInObservable(),
      signInFormCloseObserver = new Observer(closeRegistrationForm),
      setPhotoObserver = new Observer(addUserImage);

UserSignInObservable.subscribe(signInFormCloseObserver);

UserSignInObservable.subscribe(setPhotoObserver);

googleSignInBtn.addEventListener('click', () => {
    googleSignIn();
});

signOutButton.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        signInButton.classList.add('sign-in__button--active');
        signOutButton.classList.remove('sign-in__button--active');
        document.querySelector('.sign-in__logo').src = "./assets/img/header/signin.png";
    }).catch((error) => {
        console.log(error);
    });

});



// export {signInButton, signInFormCloseObserver, setPhotoObserver};
