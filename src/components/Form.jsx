import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

class Form extends React.Component {
  render() {
    const {
      cardName, //uma string
      cardDescription, //uma string;
      cardAttr1,// uma string;
      cardAttr2,// uma string;
      cardAttr3,// uma string;
      cardImage,// uma string;
      cardRare,// uma string;
      cardTrunfo,// um boolean;
      hasTrunfo,// um boolean;
      isSaveButtonDisabled,// um boolean;
      onInputChange,// uma callback;
      onSaveButtonClick,//uma callback
    } = this.props;
    return (
      <form>
        <h2>Adicionar nova Carta</h2>
        <Input type="text" testId="name-input" labelText="Nome" />
        <TextArea testId="description-input" labelText="Descrição" maxlength={ 0 } />
        <Input type="number" testId="attr1-input" labelText="Pontos de Vida" />
        <Input type="number" testId="attr2-input" labelText="Pontos de Ataque" />
        <Input type="number" testId="attr3-input" labelText="Tamanho" />
        <Input type="text" testId="image-input" labelText="Imagem" />
        <Input type="checkbox" testId="trunfo-input" labelText="Super Trunfo" />
        <Button testId="save-button" value="Salvar" />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string, //uma string
  cardDescription: PropTypes.string, //uma string;
  cardAttr1: PropTypes.string, // uma string;
  cardAttr2: PropTypes.string, // uma string;
  cardAttr3: PropTypes.string, // uma string;
  cardImage: PropTypes.string, // uma string;
  cardRare: PropTypes.string, // uma string;
  cardTrunfo: PropTypes.string, // um boolean;
  hasTrunfo: PropTypes.string, // um boolean;
  isSaveButtonDisabled: PropTypes.string, // um boolean;
  onInputChange: PropTypes.string, // uma callback;
  onSaveButtonClick: PropTypes.string, //uma callback
}.isRequired;

export default Form;
