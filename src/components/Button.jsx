import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { testId, value } = this.props;
    return (
      <button type="button" data-testid={ testId }>{value}</button>
    );
  }
}

Button.propTypes = {
  testId: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Button;
