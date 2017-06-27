import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
class App extends Component {
    signOut() {
        firebaseApp
            .auth()
            .signOut();
    }
    render() {
        return (
            <div className="text-center">
                <h3 className="text-center">Goals</h3>
                <div> Add Goals </div>
                <div> Goal List </div>
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