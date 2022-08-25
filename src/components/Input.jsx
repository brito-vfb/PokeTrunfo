import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends React.Component {
  render() {
    const { type, testId, labelText, onInputChange, value, name } = this.props;
    if (testId === 'name-input') {
      return (
        <div className="nameInput">
          <label htmlFor={ testId }>{labelText}</label>
          <input
            type={ type }
            data-testid={ testId }
            id={ testId }
            name={ name }
            onChange={ onInputChange }
            value={ value }
          />
        </div>
      );
    }
    if (testId === 'trunfo-input') {
      return (
        <div className="trunfoInput">
          <div>
            <input
              type={ type }
              data-testid={ testId }
              id={ testId }
              name={ name }
              onChange={ onInputChange }
              checked={ value }
            />
            <label htmlFor={ testId }>{labelText}</label>
          </div>
        </div>
      );
    }
    return (
      <div className="sameLine">
        <label htmlFor={ testId }>{labelText}</label>
        <input
          type={ type }
          data-testid={ testId }
          id={ testId }
          name={ name }
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
  name: PropTypes.string,
}.isRequired;

export default Input;
