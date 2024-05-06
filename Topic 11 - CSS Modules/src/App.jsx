import FoodItems from "./Components/FoodItems";
import ErrorMessg from "./Components/ErrorMessg";
function App() {
  let foodItems = ["Daal", "Bindi", "Sugar", "Roti", "Milk", "Banana"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessg foodItems={foodItems}></ErrorMessg>
      <FoodItems foodItems={foodItems}></FoodItems>
    </>
  );
}

export default App;


