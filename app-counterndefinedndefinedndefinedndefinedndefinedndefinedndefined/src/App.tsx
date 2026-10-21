import ListGroup from "./components/ListGroup";

function App() 
{
  let items = ['Tokyo', 'New York', 'Paris', 'London'];
  const handleselecteditem = (item :String) =>
  {
    console.log(item);
  }
  return (<div><ListGroup item={items} heading={"Cites"} onselectitem={handleselecteditem} /></div>);

}

export default App;