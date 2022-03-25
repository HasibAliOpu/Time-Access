import React from "react";

const Footer = () => {
  return (
    <div className="container d-flex g-4 mb-5">
      <div className="border-end border-info border-5">
        <h3>How react Work?</h3>
        <p>
          React works in declarative code. To show what we mean by declarative
          code, we want you to imagine the following code expressed as an app.
          What you picture could look like the screen below, with a navbar, a
          header, a filter, and a list. That's because each line of code
          declares what each element of the app is.
        </p>
      </div>
      <div className="ms-4">
        <h3>How (useState) Work?</h3>
        <p>
          useState is a Hook that allows you to have state variables in
          functional components. You pass the initial state to this function and
          it returns a variable with the current state value (not necessarily
          the initial state) and another function to update this value.
        </p>
      </div>
    </div>
  );
};

export default Footer;
