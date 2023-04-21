import React from "react";
import Box from "../Component/Box";

const ObjectDestructuring = () => {
  const person = {
    firstName: "Suzan",
    lastName: "Lakhani",
    id: 12356,
    fullName: function (val) {
      return val;
    },
  };
  const { firstName } = person;
  return (
    <>
    
      <div className="ms-5 me-5"> 
        <h1 className=" mt-5 mb-5 text-danger fst-italic">Object Destructuring:-</h1>
        <div className="shadow-lg p-4  bg-body rounded">
        {/* data arrives from component/Box */}
        <Box PersonName={person} />
        </div>
      </div>
    </>
  );
};

export default ObjectDestructuring;
