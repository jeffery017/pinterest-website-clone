 import Navigator from './components/Navigator'
import Gallery from './components/Gallery'
import { useState } from 'react';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  window.addEventListener("resize", () => {
    if (isMobile != window.innerWidth < 720)
      setIsMobile(window.innerWidth < 720)
  })

  

  return (
    <> 
      {/* <h1>{isMobile? "Mobile": "Desktop"}</h1> */}
      <Navigator isMobile={isMobile}></Navigator>
      <Gallery isMobile={isMobile}></Gallery>

    </>
  )
}

export default App
