import { useState } from 'react'

import WebsiteModal from './website'

import Image from 'react-image-webp'



import '../components/skills.css'



const SkillsPage = () => {


    const [sampleWebsite , setSampleWebsite] = useState(false)

    const onclickWebsiteView = () => {
        if(sampleWebsite === false){
            setSampleWebsite(true)
        } else {
            setSampleWebsite(false)
        }
    }

    return (

        <div className='skillsContainer' id='skill'>

            {sampleWebsite&& <WebsiteModal 
            onclickWebsiteViewProps={onclickWebsiteView}/>}

            <div className='container'>
                <Image
                    className='image'
                    webp={require('../assets/drawings.webp')}
                />

                <div className='overlay '>
                    <div className='text'>
                        DRAWING
                    </div>
                </div>

            </div>

            <div className='container'>
                <Image
                    className='image'
                    webp={require('../assets/logos.webp')}
                />

                <div className='overlay '>
                    <div className='text'>
                        LOGO
                    </div>
                </div>

            </div>

            <div className='container'>
                <Image
                    className='image'
                    webp={require('../assets/posters.webp')}
                />

                <div className='overlay '>
                    <div className='text'>
                        POSTER
                    </div>
                </div>

            </div>

            <div className='container' onClick={onclickWebsiteView}>
                <Image
                    className='image'
                    webp={require('../assets/website.webp')}
                />

                <div className='overlay '>
                    <div className='text'>
                        WEBSITE
                    </div>
                </div>

            </div>


            <div className='servicesOffer'>
                PROJECTS
            </div>

            <div className='iOffer'>
                I DID
            </div>




        </div>
    )
}

export default SkillsPage