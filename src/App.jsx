 import Navigator from './components/Navigator'
import Gallery from './components/Gallery'
import Card from './components/Card'

function App() {
  const cardWidth = 28
  

  return (
    <> 
      <Navigator></Navigator>
      
      <Gallery cardWidth={cardWidth} >
        {[...Array(100)].map( () => <Card cardWidth={cardWidth} cardHeight={15 + Math.floor(Math.random()*60)}></Card>)}
        
      </Gallery>

    </>
  )
}

export default App
