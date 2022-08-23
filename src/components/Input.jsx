import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, testId, labelText } = this.props;
    return (
      <div>
        <label htmlFor={ testId }>{labelText}</label>
        <input type={ type } data-testid={ testId } id={ testId } name={ testId } />
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  testId: PropTypes.string,
  labelText: PropTypes.string,
}.isRequired;

export default Input;
