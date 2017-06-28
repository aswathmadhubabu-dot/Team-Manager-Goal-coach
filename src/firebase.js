/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-28 20:42:13 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-28 20:42:13 
 */
import * as firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyDpSZ90AKUhZrwhgGEW90vXculp6QFxbDM",
    authDomain: "goalcoach-ae743.firebaseapp.com",
    databaseURL: "https://goalcoach-ae743.firebaseio.com",      
    projectId: "goalcoach-ae743",
    storageBucket: "goalcoach-ae743.appspot.com",
    messagingSenderId: "183303894280"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');