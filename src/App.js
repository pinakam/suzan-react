import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import UpdatePage from "./pages/UpdatePage";
import CustomHookDemo from "./pages/CustomHookDemo";
import SearchData from "./pages/SearchData";


function App() {
  return (
   <>

   {/* <BrowserRouter>
   <Routes>
    <Route path="/" element={<ReadPage/>}></Route>
    <Route path="/update/:id" element={<UpdatePage/>}></Route>
   </Routes>
   </BrowserRouter> */}
    {/* <CustomHookDemo/> */}
    <SearchData/>
   </>
  );
}

export default App;
