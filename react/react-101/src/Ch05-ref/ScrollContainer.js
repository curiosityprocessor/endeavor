import { Component } from 'react';
import ScrollBox from './ScrollBox'

class ScrollContainer extends Component {
    render() {
        return (
            <div>
                <div>Scroll Container</div>
                <ScrollBox ref={(ref) => this.scrollBox = ref} />
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    scroll to bottom
                </button>
            </div>
        )
    }
}

export default ScrollContainer;