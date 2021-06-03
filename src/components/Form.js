import React from "react";
import { connect } from "react-redux";
import { CHANGE_PERSON, ADD_PERSON,  } from "../store/typesList";

const Forma = ({ changeInput, person, addPerson, clearState }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addPerson();
  };

  const addId = (event) => {
    changeInput(event.target.name, event.target.value);
  };

  const renderForm = () => {
    return (
      <div className="w-50 mx-auto mt-5">
        <form onSubmit={onSubmit} className="">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="fName"
              value={person.fName}
              onChange={addId}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lName"
              value={person.lName}
              onChange={addId}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={person.phone}
              onChange={addId}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-100 mt-2">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInput: (name, value) =>
      dispatch({ type: CHANGE_PERSON, payload: { name, value } }),
    addPerson: () => dispatch({ type: ADD_PERSON }),
  };
};

const mapStateToProps = (state) => {
  return {
    person: state.person,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forma);
