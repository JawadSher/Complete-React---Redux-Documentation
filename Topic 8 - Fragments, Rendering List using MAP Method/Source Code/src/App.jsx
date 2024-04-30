import react from "react"
function App() {
  let foodItems = ['Bandi', 'Gajar','Salad', 'Milk', 'Saag']
  return (

    <>
    <h1>Healthy Foods</h1>
    <ul className="list-group">
      {foodItems.map((item) => (
      <li key={item} className="list-group-item">{item}</li>))}
      
    </ul>
    </>

    // // <div>
    // // <react.Fragment>
    // <>
    //   <h1>Healthy Foods</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Bandi</li>
    //     <li class="list-group-item">Gajar</li>
    //     <li class="list-group-item">Salad</li>
    //     <li class="list-group-item">Milk</li>
    //     <li class="list-group-item">Saag</li>
    //   </ul>
    //   </>
    //   // </react.Fragment>
    // // </div>
  );
}

export default App;


