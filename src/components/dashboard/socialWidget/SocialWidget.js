import React from 'react';
import PropTypes from 'prop-types';

class SocialWidget extends React.Component {
  render (props) {
    const SVG = this.props.svg;
    return (
      <section className="social__widget" >
        <div className="social__widget--icon" > 
           < SVG />
        </div>
        <div className="social__widget--info">
          <h4 className="headline--med">{this.props.title}</h4>
          <p className="social__widget--text">{this.props.stats}</p>
        </div>
      </section>
    );
  }
}

SocialWidget.propTypes = {
  svg   : PropTypes.func.isRequired,
  stats : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired
}

export default SocialWidget;