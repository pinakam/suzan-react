import { useState } from "react";
import "../CSS/Menu.css"
import { menuData } from "../json/MenuData";

const MenuPrint = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedSubItem(null);
  };

  const handleSubItemClick = (subItem) => {
    setSelectedSubItem(subItem);
  };

  return (
    <>
    {/* PRINT IN SIDEBAR  */}

      {/* ADD MAIN DROPDOWN AND INNER DROPDOWN IN THIS */}
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
        <h3>Click on menu button </h3>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Menu
      </button>
  
      </div>
     
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <div className="offcanvas-title title-color" id="offcanvasExampleLabel">
            Menu
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="mt-3">
            <ul>
              {menuData.menu.map((item) =>
                item.sub !== null ? (
                  <div>
                    {item.sub && (
                      <li className="nav-item dropdown color" key={item.link}>
                        <a
                          className="nav-link dropdown-toggle"
                          href={item.link}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {item.name}
                        </a>
                        <ul className="dropdown-menu">
                          {item.sub.map((subItem) => (
                            <li key={subItem.link} className="sub-color">
                              <a href={subItem.link} className="dropdown-item">
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </div>
                ) : (
                  
                  <div>
                    <li key={item.link} className="color">
                      <a href={item.link}>{item.name}</a>
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

     

    {/* TO PRINT IN DROPDOWN AND SUBMENU'S ON ANOTHER DROPDOWN */}
      <div className="col-4">
                  <h3>select service and About</h3>
        <select
          value={selectedItem?.link}
          onChange={(e) =>
            handleItemClick(
              menuData.menu.find((item) => item.link === e.target.value)
            )
          }
        >
          {menuData.menu.map((item) => (
            <>
              <option key={item.link} value={item.link}>
                {item.name}
              </option>
            </>
          ))}
        </select>
        {menuData.menu.map((item)=>(
          <>
       {selectedItem && selectedItem.link === item.link && item.sub && (
            <select value={selectedSubItem?.link} onChange={(e) => handleSubItemClick(item.sub.find((subItem) => subItem.link === e.target.value))}>
              <option value="">Select a sub-menu item</option>
              {item.sub.map((subItem) => (
                <option key={subItem.link} value={subItem.link}>{subItem.name}</option>
              ))}
            </select>
          )}


          </>
        ))}
        
       
      </div>
      </div>
    </div>
      {/* for PRINT IN NAVBAR */}

      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid color">
          <ul className="d-flex gap-5">
            {menuData.menu.map((item) => (
              <li key={item.link}>
                <a href={item.link}>{item.name}</a>
                {item.sub && (
                  <ul>
                    {item.sub.map((subItem) => (
                      <li key={subItem.link}>
                        <a href={subItem.link}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default MenuPrint;
