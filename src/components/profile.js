import Typed from 'react-typed';
import Lottie from 'lottie-react'



import ComputerLottie from '../assets/computerlottie.json'

import('../components/profile.css')



const StartPage = () => {





    return (

        <div className='ProfileContainer' id='start'>
            <div className='topMessage'>
                <h3>
                    HI I'M
                </h3>
            </div>

            <div className='midMessage'>
                    <h2 className='ProfileName'>
                            MIGUEL
                    </h2>
            </div>

            <Typed
                className='typedContainer'
                strings={[
                    'GRAPHIC DESIGNER',
                    'WEB DESIGNER',
                    'WEB DEVELOPER']}
                typeSpeed={60}
                backSpeed={60}
                loop >
            </Typed>

            <Lottie 
            className='ComputerLottie'
            animationData={ComputerLottie} 
            loop={true}
                speed={1}
                />


        </div>
    )
}



export default StartPage