import React, {Component} from 'react';
import {goalRef} from '../firebase';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                let goalObject = goal.val();
                console.log("goalObject", goalObject);
                goals.push(goalObject);
            })
            console.log("GOALS",goals);
        })
    }

    render() {
        return (
            <div>GoalList</div>
        )
    }
}

export default GoalList;