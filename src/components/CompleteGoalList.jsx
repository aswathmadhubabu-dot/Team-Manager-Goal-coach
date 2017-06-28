import React, {Component} from 'react';
import {completeGoalRef} from '../firebase';
import {setCompleted} from '../actions';
class CompleteGoalList extends Component {
    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const {email, title} = completeGoal.val();
                goals.push({email, title});
            })
            console.log("COMPLETED GOALS", completeGoals);
            this
                .props
                .setCompleted(completeGoals);
        })
    }
    render() {
        return (
           <div className="col-lg-6 col-lg-offset-3 container text-center well">
                <ul className="list-group">
                    {this
                        .props
                        .completeGoals
                        .map(function (completeGoal, index) {
                            return (
                                <li key={index} className="list-group-item">
                                    {goal.title}&nbsp;&nbsp;
                                    <GoalItem key={index} goal={goal}/>
                                </li>
                            )
                        })
}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const {completeGoals} = state;
    console.log('state in CompletegoalList', completeGoals);
    return {completeGoals}
}
export default CompleteGoalList;