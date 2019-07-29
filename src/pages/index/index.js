import "./index.scss";

import "../../components/header/header";
import "../../components/footer/footer";
import "./navigation/navigation";



import "what-input/dist/what-input.min";
import "foundation-sites/dist/js/foundation";
import "foundation-sites/dist/css/foundation.css";

import * as firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../../components/sign-in/firebase.config";


firebase.initializeApp(firebaseConfig);
