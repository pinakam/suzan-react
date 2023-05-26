import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import UpdatePage from "./pages/UpdatePage";


function App() {
  return (
   <>
   
   
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<ReadPage/>}></Route>
    <Route path="/update/:id" element={<UpdatePage/>}></Route>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
