import "./App.css";
import { v4 as randomId } from "uuid";
import foodsDataJSON from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";
import { Row, Divider, Button } from "antd";
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState(foodsDataJSON);
  const [foodsData, setFoodsData] = useState(foodsDataJSON);
  const [show, setShow] = useState(false);

  const addNewFood = (newFood) => {
    const updateFoods = [...foods, newFood];
    const updateFoodData = [...foodsData, newFood];
    setFoodsData(updateFoodData);
    setFoods(updateFoods);
  };

  const filterFood = (str) =>
    setFoods(
      foodsData.filter((elem) =>
        elem.name.toLowerCase().includes(str.toLowerCase())
      )
    );

  const deleteFood = (foodImage) => {
    const filteredfood = foodsData.filter((elem) => {
      return elem.image !== foodImage;
    });
    setFoodsData(filteredfood);
    setFoods(filteredfood);
  };

 

  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <Button onClick={() => setShow((prev) => !prev)}> Add New Food </Button>
      {show && <AddFoodForm addFood={addNewFood} />}
      <Search filterFood={filterFood} />
      <Divider>Food List</Divider>
      {foods.length === 0 ? (
        <p>Ops! there is not more content to show </p>
      ) : (
        <Row style={{ width: "100%", justifyContent: "center" }}>
          {foods.map((food) => {
            return (
              <FoodBox key={randomId()} food={food} deleteFood={deleteFood} />
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default App;
