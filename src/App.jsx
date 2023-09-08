import './App.css'
import Card from './components/Card/Card'
import CounterContainer from './components/Counter/CounterContainer'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Greetings/ItemListContainer'

function App() {
  const data = {
    title: "Perro negro",
    description: "Description",
    pic: "https://picsum.photos/id/237/300/300",
  }
  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting="Tu compra OnLine"/>
      
      <div className="row">
  
        <div className="col-3">
          <Card data={data} />
        </div>

      {/* Renderiza el componente CounterContainer */}
      <CounterContainer />
    </div>
    </div>
  )
}

export default App
