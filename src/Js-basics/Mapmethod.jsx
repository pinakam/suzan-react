import React from "react";

const Mapmethod = () => {
  const students = [
    {
    
      name: "suzan",
      surname: "lakhani",
      Age: "20",
      Course: "Bcom",
    },
    {
     
      name: "Mansi",
      surname: "vaghela",
      Age: "22",
      Course: "Bca",
    },
    {
      name: "Vidhi",
      surname: "shah",
      Age: "25",
      Course: "Diploma",
    },
  ];
  return (
    <>
     <h1 className="mb-5 ms-5 mt-5">Student Information:-</h1> 
      <table border={2} style={{width:"50%" , height:"50%", margin:"50px", padding:"20px"}} >

        <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Age</th>
        <th>Course</th>
        </tr>
        {students.map((item) => (
          <>

            <tr style={{border:"2px solid black"}}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
};

export default Mapmethod;
