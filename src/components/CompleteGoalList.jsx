import React, {Component} from 'react';
import {completeGoalRef} from '../firebase';
import {setCompleted}  from '../actions';
class CompleteGoalList extends Component {
    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completeGoals = [];  
             snap.forEach(completeGoal => {
                const {email, title} = completeGoal.val();
                goals.push({email, title});
            })
            console.log("COMPLETED GOALS",completeGoals);
            this.props.setCompleted(completeGoals);
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
function mapStateToProps(state) {
    const {goals} = state;
    console.log('state in goalList', goals);
    return {goals}
}
export default CompleteGoalList;