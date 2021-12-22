import PropTypes from 'prop-types'

const MyComponent = ({name, number, children})  => {
    return <div>name: {name}, number,: {number} children: {children}</div>;
};

MyComponent.defaultProps = {
    name: 'default',
    number: 0
}

MyComponent.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired
}

export default MyComponent;