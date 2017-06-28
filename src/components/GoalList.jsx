import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setGoals} from '../actions';
import {goalRef} from '../firebase';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const {email, title} = goal.val();
                goals.push({email, title});
            })
            console.log("GOALS", goals);
            this
                .props
                .setGoals(goals);
        })
        
    }

    render() {
        
        return (
            <div className="col-lg-4 col-lg-offset-4 container text-center well">
                <ul className="list-group">
                    {
                        
                        this
                        .props
                        .goals
                        .map(function (goal, index) {
                            return (
                                <li key={index} className="list-group-item">{goal.title}&nbsp;&nbsp;<span>Submitted By :<em>{goal.email} </em></span></li>
                            )
                        })
}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {goals} = state;
    console.log('state in goalList', goals);
    return {goals}
}

export default connect(mapStateToProps, {setGoals})(GoalList);