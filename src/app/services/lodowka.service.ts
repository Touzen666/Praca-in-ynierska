import { Produkt } from './../models/produkt';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LodowkaService {
  constructor() {}
  getRef() {
    var db = firebase.firestore();
    // var storage = firebase.storage();
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var detailsRef = imagesRef.child('details');

    // console.log(imagesRef);

    var produktyRef = db
      .collection('produkty')
      .doc('lodowka')
      .collection('details')
      .doc('data');

    console.log(produktyRef);
  }
}
