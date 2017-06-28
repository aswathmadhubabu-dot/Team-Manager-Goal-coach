import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef} from '../firebase';
class GoalItem extends Component {
   
    completeGoal()
    {
        
    }

    render() {
 const {email,title} = this.props.goal;
        return (
            <div className="col-lg-6 col-lg-offset-3 container text-center well">
                <ul className="list-group">
                    {this
                        .props
                        .goals
                        .map(function (goal, index) {
                            return (
                                <li key={index} className="list-group-item">{goal.title}&nbsp;&nbsp;<span>Submitted By :<em>{goal.email}
                                        </em>
                                    </span>
                                    <button className="btn btn-primary" onClick={() => this.completeGoal()}>Complete</button>
                                </li>
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