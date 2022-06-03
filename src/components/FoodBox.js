import { Card, Col, Button } from "antd";

export default function FoodBox(props) {
  //console.log("box", props);
  return (
    
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: </p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b>{" "}
          kcal
        </p>
        <Button
          onClick={() => props.deleteFood(props.food.image)}
          type="primary"
        >
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}
