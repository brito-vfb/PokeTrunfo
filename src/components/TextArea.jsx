import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { testId, labelText, maxlength, value, onInputChange } = this.props;
    if (maxlength === 0) {
      return (
        <div>
          <label htmlFor={ testId }>{labelText}</label>
          <textarea
            data-testid={ testId }
            id={ testId }
            name={ testId }
            value={ value }
            onChange={ onInputChange }
          />
        </div>
      );
    }
    return (
      <div>
        <label htmlFor={ testId }>{labelText}</label>
        <textarea
          data-testid={ testId }
          id={ testId }
          name={ testId }
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
}.isRequired;

export default TextArea;
