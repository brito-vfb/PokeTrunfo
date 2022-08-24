import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { testId, value, onClick, disabled } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }
        disabled={ disabled }
        onClick={ onClick }
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  testId: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Button;
