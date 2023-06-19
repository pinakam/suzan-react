
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEditPage from './Pages/AddEditPage';
import ViewPage from './Pages/ViewPage';

function App() {
  return (
   <>
  
   <BrowserRouter>
   <Routes>
   <Route  path='/' element={<ViewPage/>}></Route>
    <Route  path='/AddPage' element={<AddEditPage/>} ></Route>
    <Route  path='/Edit/:id' element={<AddEditPage Editmode={true}/>} ></Route>
   
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
