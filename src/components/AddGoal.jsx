import React, {Component} from 'react';
import {goalRef} from '../firebase';
import {connect} from 'react-redux';
class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    AddGoal()
    {
        console.log("Goal State", this.state);
        console.log('this.props',this.props);
        const {title} = this.state;
        const {email} = this.props;
        goalRef.push({email, title});
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-4 col-md-offset-4">

                        <div className="form-group has-feedback">
                            <input
                                type="text"
                                className="form-control text-center"
                                placeholder="Enter Goals"
                                required
                                onChange={event => this.setState({title: event.target.value})}
                                onKeyPress={event => {
                                if (event.key === 'Enter') 
                                    this.AddGoal()
                            }}/>
                            <button className="btn btn-success" onClick={() => this.AddGoal()}>Add Goal</button>

                        </div>

                    </div>
                </div>
            </div>
        )

    }

}
function mapStateToProps(state) {
    const {user} = state;
    console.log('state in addgoal',user);
    return {user}
}

export default connect(mapStateToProps, null)(AddGoal);