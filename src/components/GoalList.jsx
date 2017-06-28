import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SET_GOALS} from '../actions';
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

function mapStateToProps(state) {
    const {user} = state;
    console.log('state in addgoal',user);
    return {user}
}

export default connect(mapStateToProps, null)(AddGoal);