import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import './Form.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h2>Adicionar nova Carta</h2>
        <Input
          name="cardName"
          type="text"
          testId="name-input"
          labelText="Nome"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <TextArea
          name="cardDescription"
          testId="description-input"
          labelText="Descrição"
          maxlength={ 0 }
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Input
          name="cardAttr1"
          type="number"
          testId="attr1-input"
          labelText="Vida"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <Input
          name="cardAttr2"
          type="number"
          testId="attr2-input"
          labelText="Ataque"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <Input
          name="cardAttr3"
          type="number"
          testId="attr3-input"
          labelText="Tamanho"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Input
          name="cardImage"
          type="text"
          testId="image-input"
          labelText="Imagem"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <Select
          name="cardRare"
          testId="rare-input"
          labelText="Raridade"
          onInputChange={ onInputChange }
          value={ cardRare }
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <Input
          name="cardTrunfo"
          type="checkbox"
          testId="trunfo-input"
          labelText="Super Trunfo"
          value={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <Button
          testId="save-button"
          value="Salvar"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
