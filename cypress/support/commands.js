// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { attachCustomCommands } from "cypress-firebase";

const fbConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyDKushh9qmC_jKyeIfb-It9dNT5QY4Mpuc",
  authDomain: "moja-dieta-1314d.firebaseapp.com",
  projectId: "moja-dieta-1314d",
  storageBucket: "moja-dieta-1314d.appspot.com",
  messagingSenderId: "615481702404",
  appId: "1:615481702404:web:a8ce989d2209e62b359d51",
  measurementId: "G-7SNZX5CRM1",
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
