import React from "react";
import { Fragment } from "react";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  return (
    <Fragment>
      <section className="container">
        <Form />
      </section>
      <section className="container mt-5">
        <Persons />
      </section>
    </Fragment>
  );
};

export default App;
