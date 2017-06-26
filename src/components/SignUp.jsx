import React , {Component} from 'react';

class SignUp extends Component{
    render(){
        return(      
<div className="card">
    <div className="card-block">

        
        <div className="form-header blue-gradient text-center">
            <h3><i className="fa fa-user"></i> Register:</h3>
        </div>

        <div className="md-form">
            <i className="fa fa-envelope prefix"></i>
            <input type="text" id="form2" className="form-control" />
            <label for="form2">Your email</label>
        </div>

        <div className="md-form">
            <i className="fa fa-lock prefix"></i>
            <input type="password" id="form4" className="form-control" />
            <label for="form4">Your password</label>
        </div>

        <div className="text-center">
            <button className="btn btn-indigo">Sign up</button>
            <hr />
           
        </div>

    </div>
</div>


)
    }
}

export default SignUp;