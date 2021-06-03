import React from "react";
import { connect } from "react-redux";
import PersonCard from './PersonCard'

const Persons = ({ persons }) => {
  const renderPersons = () => {
    if (!persons.length) return <h1 className="w-25 mx-auto">No people</h1>;
    return (
      <div className="row">
        {persons.map((person) => (
          <div key={person.id} className="col-6 col-sm-4 col-md-3">
              <PersonCard person={person}/>
          </div>
        ))}
      </div>
    );
  };
  return renderPersons()
};
const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};
export default connect(mapStateToProps, null)(Persons);
