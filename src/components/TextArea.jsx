import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

class TextArea extends React.Component {
  render() {
    const { testId, labelText, maxlength, value, onInputChange, name } = this.props;
    if (maxlength === 0) {
      return (
        <div className="descripInput">
          <label htmlFor={ testId }>{labelText}</label>
          <textarea
            data-testid={ testId }
            id={ testId }
            name={ name }
            value={ value }
            onChange={ onInputChange }
          />
        </div>
      );
    }
    return (
      <div className="descripInput">
        <label htmlFor={ testId }>{labelText}</label>
        <textarea
          data-testid={ testId }
          id={ testId }
          name={ name }
          maxLength={ maxlength }
          value={ value }
          onChange={ onInputChange }
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  testId: PropTypes.string,
  labelText: PropTypes.string,
  maxlength: PropTypes.number,
  value: PropTypes.string,
  onInputChange: PropTypes.func,
  name: PropTypes.string,
}.isRequired;

export default TextArea;
