import ListGroup from "./components/ListGroup";

function App() 
{
  let items = ['Tokyo', 'New York', 'Paris', 'London'];
  return (<div><ListGroup item={items} heading={"Cites"} /></div>);

}

export default App;