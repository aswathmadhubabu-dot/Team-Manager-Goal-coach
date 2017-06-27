import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }
    signIn()
    {
        console.log('this.state', this.state);
        const email = this.state.email;
        const password = this.state.password;
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log("Error:", error);
                this.setState({error})
            });

    }
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <hr/>
                    <div className="form-header text-center">
                        <h3>
                            <i className="fa fa-user"></i>
                            Login:</h3>
                    </div>
                    <hr/>
                    <form id="signInForm">
                        <div className="md-form">
                            <i className="fa  fa-user-circle-o prefix"></i>
                            <input
                                type="text"
                                id="form2"
                                className="form-control"
                                placeholder="E-mail"
                                onChange={event => this.setState({email: event.target.value})}
                                required/>

                        </div>
                        <hr/>
                        <div className="md-form">
                            <i className="fa fa-lock prefix"></i>
                            <input
                                type="password"
                                id="form4"
                                className="form-control"
                                placeholder="Password"
                                onChange={event => this.setState({password: event.target.value})}
                                required/>

                        </div>

                        <div className="text-center">
                            <button className="btn btn-indigo" type="button" onClick={() => this.signIn()}>Sign In</button>
                            <hr/>

                        </div>
                    </form>
                    <div className="well">{this.state.error.message}</div>
                    <div>
                        <Link className="btn btn-info text-center" type="button" to={'/signup'}>SIGN UP</Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignIn;