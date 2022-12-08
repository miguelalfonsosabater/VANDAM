

import Lottie from 'lottie-react'
import VandamLottie from '../assets/vandam.json'
import ArrowDown from '../assets/arrowdown.json'
import Image from 'react-image-webp'




import('../components/hero.css')


const HeroSection = () => {



    return (
        <div className='heroSectionContainer'  id='hero'>

        

            <div className='Lottie-Container' >
                <Lottie animationData={VandamLottie} loop={true}
                speed={1}
                />

            </div>


            <div className='Lottie-Shadow'>
                <Image
                    className='shadow'
                    webp={require('../assets/lottieshadow.webp')}
                />

            </div>

            <div className='arrowDown' >
                    <a href="#start">

                    <Lottie animationData={ArrowDown} 
                    loop={true}
                speed={1}
                />
                    </a>

            </div>





        </div>

    )
}



export default HeroSection