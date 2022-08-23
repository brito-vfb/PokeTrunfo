import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { testId, labelText, maxlength } = this.props;
    if (maxlength === 0) {
      return (
        <div>
          <label htmlFor={ testId }>{labelText}</label>
          <textarea
            data-testid={ testId }
            id={ testId }
            name={ testId }
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
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  testId: PropTypes.string,
  labelText: PropTypes.string,
  maxlength: PropTypes.number,
}.isRequired;

export default TextArea;
