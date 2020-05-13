import React from 'react';
// import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount is a liar: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log({ state });
//   return {
//     car: state.car.price,
//     additionalPrice: state.additionalFeatures.price
//   };
// };

// export default connect(
//   mapStateToProps,
//   { }
// )(Total);

export default Total;

