import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
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
    } = this.props;
    return (
      <section className="cardContainer">
        <div className="CardFront">
          <div className="redPart">
            <header>
              <h2 data-testid="name-card">{ cardName }</h2>
              <p className="raridade" data-testid="rare-card">{ cardRare }</p>
            </header>
            <div className="imagebackground">
              <img src={ cardImage } alt={ cardName } data-testid="image-card" />
            </div>
          </div>
          <div className="pokeLine">
            <div className="pokeBall" />
          </div>
          <div className="withPart">
            <p data-testid="description-card">{cardDescription}</p>
            <p data-testid="attr1-card">{`Att01 - ${cardAttr1}`}</p>
            <p data-testid="attr2-card">{`Att02 - ${cardAttr2}`}</p>
            <p data-testid="attr3-card">{`Att03 - ${cardAttr3}`}</p>
            { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
