import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setGoals} from '../actions';
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
            this.props.setGoals(goals);
        })
    }

    render() {
        return (
            <div>GoalList</div>
        )
    }
}

function mapStateToProps(state) {
    const {goals} = state;
    console.log('state in goalList',goals);
    return {goals}
}

export default connect(mapStateToProps, {setGoals})(GoalList);