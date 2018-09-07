import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component 
        for each one. give the tab component a `selectTabHandler`, the `selectedTab`, 
        and the `tab` itself as props*/
        props.tabs.map(tab => (
        <Tab key={tab} tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab}/>))
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

