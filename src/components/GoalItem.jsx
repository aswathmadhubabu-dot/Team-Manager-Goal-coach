import React, {Component} from 'react';
// import {connect} from 'react-redux'; import {completeGoalRef} from
// '../firebase';
class GoalItem extends Component {
    completeGoal()
    {
        
    }
    render() {
        console.log('this.props.goal',this.props.goal);
        const {email, title} = this.props.goal;
        return (
            <div>
                <strong>{title}</strong>
                <span>Submitted By:<em>
                        {email}
                    </em>
                </span>
                <button className="btn btn-primary" onClick={() =>this.completeGoal()} >Complete</button>
            </div>
        )
    }
}
export default GoalItem;