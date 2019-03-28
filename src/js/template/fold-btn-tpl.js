import React from 'react';

const FoldBtnTpl = props => {
  return (
    <button className={props.className} onClick={props.handleBFolded}>
      접기
    </button>
  );
};
export default FoldBtnTpl;
