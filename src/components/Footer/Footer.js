import React from "react";

const Footer = () => {
  return (
    <div className="container d-flex g-4 mb-5">
      <div className="border-end border-info border-5 ms-1">
        <h3>How react Work...?</h3>
        <p>
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces.It's a open source and component based
          application. It's use a declarative paradigm,and that's make it easier
          to reason about your application and aims to be both efficient and
          flexible.
        </p>
      </div>
      <div className="ms-4">
        <h3>How (useState) Work...?</h3>
        <p>
          useState is a Hook that allows you to have state variables in
          functional components. You pass the initial state to this function and
          it returns a variable with the current state value and another
          function to update this value.
        </p>
      </div>
    </div>
  );
};

export default Footer;
