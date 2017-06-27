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
        const {title} = this.state;
        goalRef.push({email:'ases573@gmail.com',title});
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
    mapStateToProps(state){
        const{ email }= state;
        return{
            email
        }
    }
}

export default connect(mapStateToProps,null)( AddGoal);