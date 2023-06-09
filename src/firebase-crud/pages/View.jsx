import React, { useEffect, useState } from 'react'
import fireDb from '../../helper/firebase';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
const View = () => {

const [data, setData] = useState([])
const {id} = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const databaseVal = await fireDb.database().ref().once("value");
        const dataVal = databaseVal.val();
        if (dataVal) {
          const dataArray = Object.keys(dataVal).map((key) => ({
            id: key,
            ...dataVal[key],
          }));
          setData(dataArray);
        }
      } catch (error) {
        console.error("Error reading data: ", error);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate()
  const navigateAdd = ()=>{
    navigate("/Add")
  }
  const editData = (id) => {
    navigate(`/edit/${id}`);
  };
  
  const handleDelete = (id) => {
  fireDb
  .database()
  .ref(`/${id}`)
  .remove()
  .then(()=>{
    setData((prevData)=> prevData.filter(item=> item.id !==id))
    alert("Deleted successfully")
  })
    .catch((error)=>{
      console.log("Error deleting data" + error.message);
    
    ;
  })
  }
  return (
    <>
    <Container className='mt-5'>

     <h1>View Details</h1>
   
     <Row>
      <Col>
      <h4 className='mt-3 mb-4'>Read operation</h4>
      </Col>

    <Col>
    <button className='btn btn-primary' onClick={navigateAdd} >ADD DETAILS</button>
    </Col>
     </Row>
    
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th> Name</th>
          <th>Email</th>
          <th>Contact No</th>
         <th>EDIT</th>
         <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item) => (
        <>
        <tr key={item.id} >
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
          <td><button className='btn btn-success' 
          onClick={ ()  => editData(item.id)}
          >EDIT</button></td>
          <td><button className='btn btn-danger' onClick={ () =>handleDelete(item.id)} >DELETE</button></td>
        </tr>
        </>
        ))}
       
        
      </tbody>
    </Table>
    </Container>
     
    </>
  )
}

export default View