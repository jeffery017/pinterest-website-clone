 import Navigator from './components/Navigator'
import Gallery from './components/Gallery'
import Card from './components/Card'

function App() {
  

  return (
    <> 
      <Navigator></Navigator>
      <Gallery>
        {[...Array(100)].map( () => <Card height={20 + Math.floor(Math.random()*5)*7}></Card>)}
        
      </Gallery>

    </>
  )
}

export default App
