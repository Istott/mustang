import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature } from './actions/actions'

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total 
          car={props.state.car} 
          additionalPrice={props.state.additionalPrice}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log({ state });
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(App);
