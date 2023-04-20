import React, { useEffect, useState } from "react";

const FilterMethod = () => {
  const [filteredarr, setFilteredarr] = useState([]);

  useEffect(() => {
    setFilteredarr(data);
  }, []);

  const handlebreakfast = () => {
    const onlybreakfast = data.filter((key) => {
      return key.category != "LUNCH" && key.category != "Dinner";
    });
    console.log({ onlybreakfast });
    setFilteredarr(onlybreakfast);
  };
  const handlelunch = () => {
    const onlylunch = data.filter((key) => {
      return key.category != "Breakfast" && key.category != "Dinner";
    });
    console.log({ onlylunch });
    setFilteredarr(onlylunch);
  };
  const handledinner = () => {
    const onlydinner = data.filter((key) => {
      return key.category != "Breakfast" && key.category != "LUNCH";
    });
    console.log({ onlydinner });
    setFilteredarr(onlydinner);
  };
  const [data] = useState([
    {
      id: 1,
      category: "Breakfast",
      title: "Tasty Drinks",
      description:
        "cold-coffe, Hot-coffe, Tea, orange juice, Water melon juice",
    },
    {
      id: 2,
      category: "Breakfast",
      title: "Morning Meals",
      description: "oatmeals, omlets, tea time breads, dounuts",
    },

    {
      id: 3,
      category: "LUNCH",
      title: "Afternoon Meals",
      description: "pav-bhaji, sweet dish, salad, papad, pickle",
    },
    {
      id: 4,
      category: "LUNCH",
      title: "choice your drinks",
      description: "masala chas, chhas, water",
    },

    {
      id: 5,
      category: "Dinner",
      title: "Dinner Meals",
      description: "CHAT , pasta, punjabi, dal fry , jeera rice",
    },
    {
      id: 6,
      category: "Dinner",
      title: "Dinner Sweetaries",
      description: "cake , choclate pastry, pineapple pasrty, donuts",
    },
  ]);
  return (
    <>
      <h1 className="mb-2 mt-3 display-5 text-danger">Filter Method Task:-</h1>
      <h1 className="text-center display-5  fw-semibold text-danger mt-3 mb-5  p-3 shadow-lg bg-body-tertiary rounded">
        Show menu:-
      </h1>
      <div className="container">
        <div className="row mb-5">
          <div className="col-3">
            <button
              className="btn btn-outline-primary ms-5"
              onClick={handlebreakfast}
            >
              BREAK FAST
            </button>
          </div>

          <div className="col-3">
            <button
              className="btn btn-outline-danger ms-5"
              onClick={handlelunch}
            >
              LUNCH
            </button>
          </div>

          <div className="col-3">
            <button
              className="btn btn-outline-success ms-5"
              onClick={handledinner}
            >
              DINNER
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {filteredarr.length > 0 &&
              filteredarr.map((item) => {
                return (
                  <>
                    <div className="col-4">
                      <h2>{item.id}</h2>
                      <h1 className="text-danger">{item.category}</h1>
                      <h3 className="text-warning">{item.title}</h3>
                      <ul>
                        <li>{item.description}</li>
                      </ul>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMethod;
