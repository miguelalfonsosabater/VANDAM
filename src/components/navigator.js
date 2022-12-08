// import homeicon from 'https://res.cloudinary.com/dsn8zvh4a/image/upload/v1670126220/homeicon_h4rstn.webp'
// import profileicon from 'https://res.cloudinary.com/dsn8zvh4a/image/upload/v1670126220/profileicon_vjfflv.webp'
// import skillicon from 'https://res.cloudinary.com/dsn8zvh4a/image/upload/v1670126220/gearicon_yxcu4c.webp'
// import appicon from '../assets/appicon.webp'
// import line from '../assets/line.webp'
// import logo from '../assets/logov.png'


import Image from 'react-image-webp';



import('./navigator.css')




const VandamNavigator = () => {



    return (

        <div className='NavigatorContainer'>


            <Image
                className=' line'
                webp={require('../assets/line.webp')}
            />

            <a href='#start'>
                <Image
                    className='icon'
                    webp={require('../assets/homeicon.webp')}
                />
            </a>

            <Image
                className=' line'
                webp={require('../assets/line.webp')}
            />

            <a href='#about'>
            <Image
                className='icon'
                webp={require('../assets/profileicon.webp')}
            />

            </a>

            <Image
                className=' line'
                webp={require('../assets/line.webp')}
            />


            <a href='#skill'>
            <Image
                className='icon'
                webp={require('../assets/gearicon.webp')}
            />
                
                </a>    

            <Image
                className=' line'
                webp={require('../assets/line.webp')}
            />

            <a href='#footer'>

            <Image
                className='icon'
                webp={require('../assets/appicon.webp')}
            />
            </a>

            <Image
                className=' line'
                webp={require('../assets/line.webp')}
            />



        </div>


    )
}



export default VandamNavigator



