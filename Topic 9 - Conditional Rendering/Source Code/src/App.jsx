function App() {
  // let foodItems = ['Daal', 'Bindi', 'Sugar', 'Roti', 'Milk', 'Banana']
  let foodItems = [];
  // let EmptyMessage = foodItems.length === 0 ? <h3>Food Box is Empty !!!</h3> : null

  
  // if(foodItems.length === 0){
  //   return <h3>Food Box is Empty !!!</h3>
  // }

  return (
    <>
      <h1>Healthy Foods</h1>
      {
        // EmptyMessage
        foodItems.length === 0 && <h3>Food Box is Empty !!!</h3>
      }
      <ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;


