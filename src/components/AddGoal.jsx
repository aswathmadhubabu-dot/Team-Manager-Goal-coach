import React, {Component} from 'react';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : ''
        }
    }
    AddGoal()
    {
        console.log("Goal State",this.state);
    }    
    render(){
        return(<div>
            <div className="container">
					<div className="col-md-4 col-md-offset-4">

						<div className="form-group has-feedback">
<input type="text" className="form-control text-center" placeholder="Enter Goals" required onChange={event => this.setState({ title: event.target.value })} onKeyPress={event => { if (event.key === 'Enter') this.AddGoal() } } />
                        <button className="btn btn-success" onClick={() => this.AddGoal()}>Add Goal</button>

						</div>

					</div>
				</div>
        </div> )
        
    }
}

export default AddGoal;