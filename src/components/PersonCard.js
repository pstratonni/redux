import React from "react";

const PersonCard = ({ person }) => {
  return (
    
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            {person.fName} {person.lName}
          </h3>
          <h5 className="card-text">{person.phone}</h5>
        </div>
      </div>
    
  );
};
export default PersonCard
