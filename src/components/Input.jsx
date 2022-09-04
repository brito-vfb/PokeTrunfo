import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends React.Component {
  render() {
    const { type, testId, labelText, onInputChange, value, name, className } = this.props;
    if (testId === 'name-input') {
      return (
        <div className={ className }>
          <label htmlFor={ testId }>{labelText}</label>
          <input
            type={ type }
            data-testid={ testId }
            id={ testId }
            name={ name }
            onChange={ onInputChange }
            value={ value }
            // maxLength={ 25 }
          />
        </div>
      );
    }
    if (testId === 'trunfo-input') {
      return (
        <div className={ className }>
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
      <div className={ className }>
        <label htmlFor={ testId }>{labelText}</label>
        <input
          type={ type }
          data-testid={ testId }
          id={ testId }
          name={ name }
          onChange={ onInputChange }
          value={ value }
          // min={ 0 }
          // max={ 90 }
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
  className: PropTypes.string,
}.isRequired;

export default Input;
