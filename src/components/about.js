

import { useState } from 'react'


import('../components/about.css')


const AboutMe = () => {

    const [graphicDisplay, setGraphicDisplay] = useState(true)

    const [webDevDisplay, setWebDevDisplay] = useState(false)

    const [brandingDisplay, setBrandingDisplay] = useState(false)




    return (

        <div className='aboutMeContainer' id='about'>




            <div className='contentContainer'>
                {graphicDisplay && <div>
                    <strong className='Title'> GRAPHIC DESIGN</strong>
                    <p className='para2'>
                        I started doing graphics when we had a subject called Software Packages and
                        Advertising
                        when I was 3rd year in College. I got Appointed as Vice President for Creative for
                        our
                        Organization in my Senior year. From then until present I have worked and have tasks
                        with regard to graphic designing.
                    </p>
                </div>}



                {webDevDisplay && <div>
                    <strong className='Title'> WEB DEVELOPMENT</strong>
                    <p className='para2'>
                        I have one year experience in Web Development using Wordpress and and Elementor Pro.
                        This Journey Started when a Client of mine asked if I know some simple
                        webdevelopment
                        using the above mentioned applications and I answered I have none but i am willing
                        to learn. A year from then we are building
                        websites and landing pages together. Currently I am studying to be a Full Stack Web
                        Developer with Uplift.
                    </p>



                </div>}



                {brandingDisplay && <div>
                    <strong className='Title'>BRANDING</strong>
                    <p className='para2'>
                        I have one year experience in Brand Management where I was tasked to handle the
                        branding
                        of 12 different Sports and Exercise brands (some: JK exer , Winmau Darts,
                        Rollerderby, and Polar
                        Watches) Most of the tasks I did here were handling social media pages and joining
                        sponsorship events where we promote our Brands.
                    </p>



                </div>}
                        

                <div className='expSign'>
                        EXP
                </div>




            </div>



            <div className='NavContainer'>
                <button className='aboutbtn'

                    onClick={(e) => {
                        e.preventDefault()
                        setGraphicDisplay(true)
                        setWebDevDisplay(false)
                        setBrandingDisplay(false)
                        

                    }}
                >
                    GRAPHIC DESIGN
                </button>

                <button className='aboutbtn' 
                    onClick={(e) => {
                        e.preventDefault()
                        setGraphicDisplay(false)
                        setWebDevDisplay(true)
                        setBrandingDisplay(false)
                    }}
                >
                    WEB DEVELOPMENT
                </button>


                <button className='aboutbtn'
                    onClick={(e) => {
                        e.preventDefault()
                        setGraphicDisplay(false)
                        setWebDevDisplay(false)
                        setBrandingDisplay(true)
                    }}
                >
                    BRANDING
                </button>


            </div>


        </div >

    )
}



export default AboutMe