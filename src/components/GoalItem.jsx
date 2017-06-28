import React, {Component} from 'react';
// import {connect} from 'react-redux'; import {completeGoalRef} from
// '../firebase';
class GoalItem extends Component {

    render() {
        const {email, title} = this.props.goal;
        return (
            <div>
                <strong>{title}</strong>
                <span>Submitted By:<em>
                        {email}
                    </em>
                </span>
            </div>
        )
    }
}

export default GoalItem;