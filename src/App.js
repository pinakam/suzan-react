import logo from "./logo.svg";
import "./App.css";
import Firstdemo from "./Firstdemo";
import Spreadoperatordemo from "./Js-basics/Spreadoperatordemo";
import TernaryOperator from "./Js-basics/TernaryOperator";
import Mapmethod from "./Js-basics/Mapmethod";
import Reducemethod from "./Js-basics/Reducemethod";
import FilterMethod from "./Js-basics/FilterMethod";
import ClassBasedFunction from "./OOPS-Concept/ClassBasedFunction";
import ObjectDestructuring from "./OOPS-Concept/ObjectDestructuring";
import MapDemo from "./Practical-demo/MapDemo";
import Typefiltertask from "./Practical-demo/Search-FilterTask/Typefiltertask";
import DropdownTask from "./Practical-demo/Search-FilterTask/DropdownTask";
import GalleryDisplay from "./Practice/GalleryDisplay";

import ListView from "./Practice/ListView";
import MenuPrint from "./Practice/MenuPrint";
import SelectLocation from "./Practice/SelectLocation";
import DisplayCaroselCards from "./Practice/DisplayCaroselCards";
import HomePage from "./amazon-site/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./amazon-site/Product";
import Demo from "./hooks/Demo";
import DemoUseState from "./hooks/DemoUseState";
import DemoUseRef from "./hooks/DemoUseRef";
import AddEdit from "./firebase-crud/pages/AddEdit";
import View from "./firebase-crud/pages/View";

function App() {
  return (
    <>
      {/* <Firstdemo/> */}
      {/* <Spreadoperatordemo/> */}
      {/* <TernaryOperator/> */}
      {/* <Mapmethod/> */}
      {/* <Reducemethod/> */}
      {/* <FilterMethod/> */}
      {/* <ClassBasedFunction/> */}
      {/* <ObjectDestructuring/> */}
      {/* <MapDemo/> */}
      {/* <Typefiltertask/> */}
      {/* <DropdownTask/> */}
      {/* <GalleryDisplay/> */}
      {/* <ListView/>   */}
      {/* <MenuPrint/> */}
      {/* <SelectLocation/> */}
      {/* <DisplayCaroselCards/> */}
      {/* <DemoUseState /> */}
      {/* <DemoUseRef/> */}
      {/* <Demo/> */}
      {/* <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/product/:id' element={<Product/>}></Route>
    </Routes>
   </BrowserRouter> */}
    <BrowserRouter>
   <Routes>
   
   <Route path="/" element={<View/>} ></Route>
    <Route path="/Add" element={<AddEdit/>} ></Route>
    <Route path="/edit/:id"  element={<AddEdit editMode={true} />}></Route>
  
    </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
