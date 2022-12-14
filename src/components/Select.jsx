import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

class Select extends React.Component {
  render() {
    const {
      testId,
      labelText,
      onInputChange,
      value,
      options,
      name,
      className,
    } = this.props;
    return (
      <div className={ className }>
        <label htmlFor={ testId }>{labelText}</label>
        <select
          data-testid={ testId }
          id={ testId }
          name={ name }
          onChange={ onInputChange }
          value={ value }
        >
          {
            options.map((opt) => (
              <option key={ opt } value={ opt }>{ opt }</option>
            ))
          }
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  testId: PropTypes.string,
  labelText: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.array.string,
  name: PropTypes.string,
  className: PropTypes.string,
}.isRequired;

export default Select;
