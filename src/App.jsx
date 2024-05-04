 import Navigator from './components/Navigator'
import Gallery from './components/Gallery'
import Card from './components/Card'
import { useState } from 'react';


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const cardWidth = 20

  if (isMobile != window.innerWidth < 720)
    setIsMobile(window.innerWidth < 720)

  const unit = isMobile ? 9 : 14

  return (
    <> 
      <Navigator></Navigator>
      
      <Gallery cardWidth={cardWidth} isMobile={isMobile} unit={unit}>
        {[...Array(100)].map( () => <Card cardWidth={cardWidth} cardHeight={15 + Math.floor(Math.random()*60)} isMobile={isMobile} unit={unit}></Card>)}
        
      </Gallery>

    </>
  )
}

export default App
