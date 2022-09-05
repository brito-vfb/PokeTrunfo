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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h1>Adicionar nova Carta</h1>
        <Input
          name="cardName"
          type="text"
          testId="name-input"
          labelText="Nome"
          value={ cardName }
          onInputChange={ onInputChange }
          className="nameInput"
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
          labelText="Ataque"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
          className="sameLine"
        />
        <Input
          name="cardAttr2"
          type="number"
          testId="attr2-input"
          labelText="Defesa"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
          className="sameLine"
        />
        <Input
          name="cardAttr3"
          type="number"
          testId="attr3-input"
          labelText="Velocidade"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
          className="sameLine"
        />
        <Input
          name="cardImage"
          type="text"
          testId="image-input"
          labelText="Imagem"
          value={ cardImage }
          onInputChange={ onInputChange }
          className="sameLine"
        />
        <Select
          name="cardRare"
          testId="rare-input"
          labelText="Raridade"
          onInputChange={ onInputChange }
          value={ cardRare }
          options={ ['normal', 'raro', 'muito raro'] }
          className="selectInput"
        />
        {
          hasTrunfo === false ? <Input
            name="cardTrunfo"
            type="checkbox"
            testId="trunfo-input"
            labelText="Super Trunfo"
            value={ cardTrunfo }
            onInputChange={ onInputChange }
            className="trunfoInput"
          />
            : <h3>Você já tem um Super Trunfo em seu baralho</h3>
        }
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
