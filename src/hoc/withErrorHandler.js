import React from "react";

import Modal from "../components/UI/Modal";

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Modal>
          Something didn't work!
          <WrappedComponent {...props} />;
        </Modal>
      </>
    );
  };
};

export default withErrorHandler;
