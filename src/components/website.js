

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

                            <div className='buttonsModal'>
                            <button className='websitebutton' onClick={ () => window.open('https://donichesion-hmob.vercel.app/', '_blank')}>
                                VISIT
                            </button>

                            <button className='websitebuttoncode' onClick={ () => window.open('https://github.com/miguelalfonsosabater/donichesion', '_blank')}>
                                CODE
                            </button>

                            </div>

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

                            <div className='buttonsModal'>

                            <button className='websitebutton' onClick={ () => window.open('https://puzzlegame-one.vercel.app/', '_blank')}>
                                VISIT
                            </button>

                            <button className='websitebuttoncode' onClick={ () => window.open('https://github.com/miguelalfonsosabater/puzzlegame', '_blank')}>
                                CODE
                            </button>

                            </div>


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

                            <div className='buttonsModal'>
                            <button className='websitebutton' onClick={ () => window.open('https://saver-hag1.vercel.app/', '_blank')}>
                                VISIT
                            </button>

                            <button className='websitebuttoncode' onClick={ () => window.open('https://github.com/miguelalfonsosabater/saver', '_blank')}>
                                CODE
                            </button>

                            </div>
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
