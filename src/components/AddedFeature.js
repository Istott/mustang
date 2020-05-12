import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions/actions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={props.removeFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log({ state });
  return {
    removeF: state.removeF
  };
};

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature);
