
import { useState } from 'react'

import Image from 'react-image-webp'
import('./website.css')


const WebsiteModal = ({onclickWebsiteViewProps}) => {




    return (

        <div className='websiteModalContainer'>
            <div className='websiteSampleContainer'>

                <div className='websiteSample' >
                    <div className='Webcontainer'>
                        <Image
                            className='Webimage'
                            webp={require('../assets/donichesion.webp')}
                        />
                        <div className='Weboverlay'>
                            <div className='Webtext'>
                                DONICHESION
                            </div>
                            <button className='websitebutton' onClick={ () => window.open('https://donichesion-hmob.vercel.app/', '_blank')}>
                                VISIT
                            </button>
                        </div>
                    </div>
                </div>

                <div className='websiteSample'>
                    <div className='Webcontainer'>
                        <Image
                            className='Webimage'
                            webp={require('../assets/sliderpuzzle.webp')}
                        />
                        <div className='Weboverlay'>
                            <div className='Webtext'>
                                SLIDERPUZZLE
                            </div>
                            <button className='websitebutton' onClick={ () => window.open('https://puzzlegame-one.vercel.app/', '_blank')}>
                                VISIT
                            </button>
                        </div>
                    </div>
                </div>


                <div className='websiteSample'>
                    <div className='Webcontainer'>
                        <Image
                            className='Webimage'
                            webp={require('../assets/saver.webp')}
                        />
                        <div className='Weboverlay'>
                            <div className='Webtext'>
                                S.A.V.E.R.
                            </div>
                            <button className='websitebutton' onClick={ () => window.open('https://saver-hag1.vercel.app/', '_blank')}>
                                VISIT
                            </button>
                        </div>
                    </div>
                </div>

            <div className='websiteclosebutton'>
                <h2  onClick={onclickWebsiteViewProps}> X </h2>
            </div>





            </div>
        
        </div>

            )
}


            export default WebsiteModal