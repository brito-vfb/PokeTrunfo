import React from 'react';
import PropTypes from 'prop-types';
import './Deck.css';
import Card from './Card';

class Deck extends React.Component {
  filterPriority = (cardList, filterName, filtertrunfo, filterSelect) => {
    let newList = cardList;
    if (filtertrunfo !== false) {
      newList = newList.filter((card) => card.cardTrunfo === filtertrunfo);
    }
    if (filterSelect !== 'todas') {
      newList = newList.filter((card) => card.cardRare === filterSelect);
    }
    if (filterName !== '') {
      newList = newList.filter(
        (card) => card.cardName.toLowerCase().includes(filterName.toLowerCase()),
      );
    }
    return newList;
  };

  render() {
    const { cardList,
      excludeCalback,
      filterName,
      filtertrunfo,
      filterSelect,
    } = this.props;
    const newList = this.filterPriority(cardList, filterName, filtertrunfo, filterSelect);
    console.log(cardList);
    console.log(newList);
    return (
      <div className="deckContainer">
        {
          newList.map((card) => {
            const {
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            } = card;
            return (
              <div className="cardCombo" key={ cardName }>
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
                <button
                  className="excludbtn"
                  type="button"
                  data-testid="delete-button"
                  onClick={ excludeCalback }
                  data-cardname={ cardName }
                >
                  Excluir
                </button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Deck.propTypes = {
  testId: PropTypes.string,
  cardList: PropTypes.array,
  excludeCalback: PropTypes.func,
  filterName: PropTypes.string,
  filtertrunfo: PropTypes.bool,
  filterSelect: PropTypes.string,
}.isRequired;

export default Deck;
