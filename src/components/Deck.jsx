import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { cardList, excludeCalback } = this.props;
    return (
      <div className="deckContainer">
        {
          cardList.map((card) => {
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
}.isRequired;

export default Deck;
