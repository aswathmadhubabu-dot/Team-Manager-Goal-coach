import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email :'',
            password : ''
        }
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-block">

                    <div className="form-header text-center">
                        <h3>
                            <i className="fa fa-user"></i>
                            Register:</h3>
                    </div>

                    <div className="md-form">
                        <i className="fa fa-envelope prefix"></i>
                        <input type="text" id="form2" className="form-control" placeholder="E-mail" onChange={event => this.setState({email:event.target.value})}/>

                    </div>

                    <div className="md-form">
                        <i className="fa fa-lock prefix"></i>
                        <input type="password" id="form4" className="form-control"/>

                    </div>

                    <div className="text-center">
                        <button className="btn btn-indigo">Sign up</button>
                        <hr/>

                    </div>

                </div>
            </div>

        )
    }
}

export default SignUp;