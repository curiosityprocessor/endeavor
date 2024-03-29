import { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps')
        if(nextProps.color !== prevState.color) {
            return { color: nextProps.color}
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('componentDidUpdate');
        if(snapShot) {
            console.log(`color before update: ${snapShot}`)
        }
    }

    render() {
        console.log('render');
        const style = {
            color: this.props.color
        }
        
        return(
            <div>
                {/*intentionally invoking error by calling missing property*/}
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>next</button>
            </div>
        )
    }

}

export default LifeCycleSample;