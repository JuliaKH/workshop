import * as firebase from "firebase";
import {signInButton} from "./sign-in-view";
import SignInObservable  from './google-sign-in/Observable'
import Observer from './google-sign-in/Observer'
import {closeRegistrationForm} from './google-sign-in/google-sign-in'

let signOutButton = document.querySelector('.sign-out__button');
const registerButton = document.querySelector('.register-btn'),
      loginButton = document.querySelector('.login-btn'),
      email = document.getElementsByName('email')[0],
      password = document.getElementsByName('psw')[0];

registerButton.addEventListener('click', () => {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(() => {
        alert('Account was created!');
        UserSignInObservable.notifyObservers();
    }).catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
    });
});
loginButton.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(() => {
        console.log(email.value)
        signInButton.classList.remove('sign-in__button--active');
        signOutButton.classList.add('sign-in__button--active');
        UserSignInObservable.notifyObservers();
        alert('Hello!');
    }).catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
    });
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

const UserSignInObservable = new SignInObservable(),
    signInFormCloseObserver = new Observer(closeRegistrationForm);

UserSignInObservable.subscribe(signInFormCloseObserver);

export {signOutButton};