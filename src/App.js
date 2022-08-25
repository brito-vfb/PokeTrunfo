import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  habilitSaveButton = () => {
    const hableButton = { isSaveButtonDisabled: true };
    const totalPoint = 211;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    if (cardName !== '' && cardDescription !== '' && cardImage !== ''
    && cardRare !== '' && cardAttr1 !== '' && cardAttr2 !== '' && cardAttr3 !== '') {
      const at1 = parseInt(cardAttr1, 10);
      const at2 = parseInt(cardAttr2, 10);
      const at3 = parseInt(cardAttr3, 10);
      if (at1 + at2 + at3 < totalPoint) {
        hableButton.isSaveButtonDisabled = false;
      }
    }
    this.setState(hableButton);
  };

  onInputChange = (event) => {
    const { target: { name, value, checked } } = event;
    const genericObj = {};
    if (name === 'cardTrunfo') {
      genericObj[name] = checked;
    } else {
      genericObj[name] = value;
    }
    this.setState(genericObj, this.habilitSaveButton);
  };

  onSaveButtonClick = () => {
    console.log('clicou no botão');
  };

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
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <div className="formsCard">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            // hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </div>
    );
  }
}
// primeiro commitd
export default App;
