
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

import banderas from '../../../src/utils/banderas.png'
import cubo8_1 from '../../../src/utils/cubo8_1.png'
import cubo8_2_1 from '../../../src/utils/cubo8_2_1.png'
import cubo8_2_2 from '../../../src/utils/cubo8_2_2.png'

import './mainPage.css'

function MainPage() {
  const navigate = useNavigate()

  const responseMessage = ()=>{
    navigate("/home")
  } 
  const errorMessage = ()=>{
    
  } 
 

  return (
    <div className='mainPageContainer'>
        <div className='mainGrid'>
          <div className='cubo1'>
            <img src={'https://th.bing.com/th/id/R.53e12e72d04485b35380be0b0683d6b2?rik=BItnxOKR7npg8Q&pid=ImgRaw&r=0'} alt="banderas" className='lasVegas'/>
            {/* <ReactPlayer
            className='videoEgipto'
              url={video_egipto}
              width= '100%'
              height= '100%'
              muted
              playing
              loop
            /> */}
          </div>
          <div className='cubo2'>
            <h2 className='titlleMain'>Proyecto Paises</h2>
          </div>
          <div className='cubo3'>
            <img src={banderas} alt="banderas" className='band'/>
          </div>
          <div className='cubo4'></div>
          <div className='cubo5'>
            <p>En esta página podrás
            encontrar diferentes
            actividades turísticas
            que te ayudaran a
            planificar tus
            próximas vacaciones.</p>
          </div>
          <div className='cubo6'>
            
            </div>
          <div className='cubo7'>
            <img src={'https://th.bing.com/th/id/R.0267494a523db9e2793ef91fde1f0d33?rik=IXy37dFAQzN%2f%2bw&pid=ImgRaw&r=0'} alt="mundoViajero" className='mundoViajero'/>
          {/* <ReactPlayer
              url={video_dubai}
              width= '100%'
              height= '100%'
              muted
              playing
              loop
            /> */}
          </div>
          <div className='cubo8'>
            <div className='cubo8_1'>
            <img src={cubo8_1} alt="viajeros" className='viajando'/>
            </div>
            <div className='cubo8_2'>
              <div className='cubo8_2_1'>
                <img src={cubo8_2_1} alt="viajeros" className='lasVegas'/>
              </div>
              <div className='cubo8_2_2'>
                <img src={cubo8_2_2} alt="viajeros" className='laPlaya'/>
              </div>
            </div>
            </div>
          <div className='cubo9'>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
            {/* <Link className='linlMain' to='/home'>
              <button className='buttonMain'>INGRESAR</button>
            </Link>   */}
            
          </div>
         
        </div>
    </div>
  )
}

export default MainPage
