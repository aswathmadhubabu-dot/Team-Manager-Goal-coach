import React, {Component} from 'react';
import {completeGoalRef} from '../firebase';
class CompleteGoalList extends Component {
    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completeGoals = [];  
             snap.forEach(completeGoal => {
                const {email, title} = completeGoal.val();
                goals.push({email, title});
            })
            console.log("COMPLETED GOALS",completeGoals);
        })
    }
    render() {
        return (
            <div>
                Complete Goal List
            </div>
        );
    }
}

export default CompleteGoalList;