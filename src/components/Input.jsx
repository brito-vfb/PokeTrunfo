import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, testId, labelText, onInputChange, value } = this.props;
    return (
      <div>
        <label htmlFor={ testId }>{labelText}</label>
        <input
          type={ type }
          data-testid={ testId }
          id={ testId }
          name={ testId }
          onChange={ onInputChange }
          value={ value }
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  testId: PropTypes.string,
  labelText: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Input;
