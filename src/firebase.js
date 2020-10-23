/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-28 20:42:13 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-28 20:42:13 
 */
import * as firebase from 'firebase';

 const config = {
    
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');
