import React, {Component} from 'react';
import {completeGoalRef} from '../firebase';
class CompleteGoalList extends Component {
    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completeGoals = [];  
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