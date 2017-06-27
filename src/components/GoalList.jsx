import React, {Component} from 'react';
import {goalRef} from '../firebase';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const {email , title} = goal.val();
                goals.push({email , title});
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