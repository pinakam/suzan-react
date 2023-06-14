import React, { useContext, useEffect } from "react";
import { ThemeContext, themes } from "../context/themeContext";

const DemoUseContext = () => {
  const { theme, handleClick } = useContext(ThemeContext);

  const body = document.body;
  useEffect(() => {
    
    switch (theme) {
      case themes.light:
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        break;
      case themes.dark:
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        break;
// default it will remain light 
      default:
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
    }
  }, [theme]);

  return (
    <>
      <div className="container">
        <h1  className="mt-5 mb-5">Demo UseContext</h1>
        <h5 className="mb-3">My Current Theme is  {theme}</h5>
        <button
          className={`btn  ${theme === "dark" ? "btn-light" : "btn-dark"}`}
          onClick={handleClick}
        >
          Turn to {theme === "dark" ? "light" : "dark"}{" "}
        </button>
      </div>
    </>
  );
};

export default DemoUseContext;
