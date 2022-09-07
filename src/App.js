import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import Input from './components/Input';
import Select from './components/Select';
import preBuildCards from './Source/DataBase'

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardsList: preBuildCards,
    filterName: '',
    filtertrunfo: false,
    filterSelect: 'todas',
  };

  habilitSaveButton = () => {
    const hableButton = { isSaveButtonDisabled: true };
    const totalPoint = 298;
    const totoalAtt = 100;
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
      if (at1 + at2 + at3 < totalPoint
        && at1 < totoalAtt && at2 < totoalAtt && at3 < totoalAtt
        && at1 >= 0 && at2 >= 0 && at3 >= 0) {
        hableButton.isSaveButtonDisabled = false;
      }
    }
    this.setState(hableButton);
  };

  onInputChange = (event) => {
    const { target: { name, value, checked, type } } = event;
    const genericObj = {};
    if (name === 'cardTrunfo' || name === 'filtertrunfo') {
      genericObj[name] = checked;
    } else {
      genericObj[name] = value;
    }
    if (type === 'number' && value.length > 2){
      const newValue = value.splice(0,2)
      genericObj[name] = newValue;
    }

    this.setState(genericObj, this.habilitSaveButton);
  };

  resetState = () => {
    const defaultState = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.setState(defaultState);
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardsList,
      cardTrunfo,
    } = this.state;
    const saveCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };
    cardsList.push(saveCard);
    if (cardTrunfo) {
      this.setState({ cardsList, hasTrunfo: true }, this.resetState);
    } else {
      this.setState({ cardsList }, this.resetState);
    }
  };

  onExcludeButtonClick = (event) => {
    const excludeCard = event.target.dataset.cardname;
    const { cardsList } = this.state;
    const found = cardsList.find((element) => element.cardName === excludeCard);
    const newList = cardsList.filter((element) => element.cardName !== excludeCard);
    if (found.cardTrunfo) {
      return this.setState({ hasTrunfo: false, cardsList: newList });
    }
    return this.setState({ cardsList: newList });
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
      hasTrunfo,
      isSaveButtonDisabled,
      cardsList,
      filterName,
      filtertrunfo,
      filterSelect,
    } = this.state;
    return (
      <div>
        <div className="formsCard">
          <div className="leftSide">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="rigthSide">
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
        <div className="seconPage">
          <header className="searchBar">
            <Input
              name="filterName"
              type="text"
              testId="name-filter"
              labelText="Name Filter"
              value={ filterName }
              onInputChange={ this.onInputChange }
              className="filterInput"
            />
            <Input
              name="filtertrunfo"
              type="checkbox"
              testId="trunfo-filter"
              labelText="Super Trunfo"
              value={ filtertrunfo }
              onInputChange={ this.onInputChange }
              className="filtertrunfo"
            />
            <Select
              name="filterSelect"
              testId="rare-filter"
              labelText="Raridade"
              onInputChange={ this.onInputChange }
              value={ filterSelect }
              options={ ['todas', 'normal', 'raro', 'muito raro'] }
              className="filterSelect"
            />
          </header>
          <Deck
            cardList={ cardsList }
            excludeCalback={ this.onExcludeButtonClick }
            filterName={ filterName }
            filtertrunfo={ filtertrunfo }
            filterSelect={ filterSelect }
          />
        </div>
      </div>
    );
  }
}
export default App;
