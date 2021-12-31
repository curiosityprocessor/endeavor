import { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class LifeCycleContainer extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        return(
            <div>
                <ErrorBoundary>
                    <button onClick={this.handleClick}>random color</button>
                    <LifeCycleSample color={this.state.color} />
                </ErrorBoundary>
            </div>
        )
    }
}
export default LifeCycleContainer;