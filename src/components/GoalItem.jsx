import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef} from '../firebase';
class GoalItem extends Component {
    completeGoal()
    {}
    render() {
        console.log('this.props.goal', this.props.goal);
        const {email, title} = this.props.goal;
        return (
            <div>
                <strong>{title}</strong>
                <span>Submitted By:<em>
                        {email}
                    </em>
                </span>
                <button className="btn btn-primary" onClick={() => this.completeGoal()}>Complete</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {user} = state;
    console.log('state in goalItem', user);
    return {user}
}
export default GoalItem;