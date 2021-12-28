import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false

    }
    input = React.createRef();

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '1234'
        });
        this.input.focus();
    }

    render(){
        return (
            <div>
                <input
                    ref={(ref) => this.input = ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}

                />
                <button
                    onClick={this.handleButtonClick}
                >validate</button>
            </div>
        )
    }


}

export default ValidationSample;