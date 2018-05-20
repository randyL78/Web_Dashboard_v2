import React from 'react';
import PropTypes from 'prop-types';

class SearchTab extends React.Component {
  render (props) {
    let tab = this.props.tab || "Dashboard";
    return (
      <div className="search-tab--wrapper" > 
        <h3 className="headline--med tab" >{tab}</h3>
        <div className="search--wrapper" >
          <input type="search" placeholder="Search..." name="search-site" id="search-site" />
        </div>
      </div>
    );
  }
}

SearchTab.propTypes = {
  tab : PropTypes.string
}

export default SearchTab;