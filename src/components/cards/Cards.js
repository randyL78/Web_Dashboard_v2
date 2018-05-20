import React from 'react';
import PropTypes from 'prop-types';

class Cards extends React.Component {
  render (props) {
    let className = `card card--${this.props.size}`;
    return  (
      <div className= {className} >
      </div> 
    ); 

  }

}

Cards.propTypes = {
  size : PropTypes.oneOf(['half', 'full']).isRequired
}

export default Cards;