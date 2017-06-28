import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
class App extends Component {
    signOut() {
        firebaseApp
            .auth()
            .signOut();
    }
    render() {
        return (
            <div className="text-center">
                <h3 className="text-center">Goal Coach</h3>
                <AddGoal />
                <hr />
                <h4 className="text-center">Goals</h4>
                <GoalList />
                <hr />
                <h4 className="text-center">Complete Goals List</h4>
                <CompleteGoalList />
                <button className="btn btn-danger" onClick={() => this.signOut()}>Sign Out</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('State : ', state);
    return {}
}

export default connect(mapStateToProps, null)(App);