

import Image from 'react-image-webp'


import ('./logoleft.css')




const VandamLogo = () =>{


    return (

        <div className='logocontainer'>
            <a href='#hero'>
                <Image
                className='vandamlogo'
                webp={require('../assets/vandamlogo.webp')}
                
                />

            </a>

        </div>
    )
}


export default VandamLogo