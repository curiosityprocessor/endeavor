import { Component } from 'react';
import logo from '../logo.svg';
import './cssContainer.css';

class CssContainer extends Component {
    render() {
        return (
            <div className='App'>
                <header>
                    <img src={logo} className='logo' alt='logo' />
                    <p>
                        React Component Styling
                    </p>
                    <a
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                </header>
            </div>
        )
    }
}
export default CssContainer;