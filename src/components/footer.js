




import('../components/footer.css')


const Footer = () => {




    return (

        <div className='footerContainer' >
            <h2 className='sectionTitleFooter'>
                APPLICATIONS I USE
            </h2>
            <div className='graphicsFooter'>

                <h2 className='divTitle'>
                    GRAPHIC APPLICATIONS
                </h2>

                <h4 className='divContents'>
                    PHOTOSHOP
                </h4>

                <h4 className='divContents'>
                    ILLUSTRATOR
                </h4>

                <h4 className='divContents'>
                    CANVA
                </h4>

                <h4 className='divContents'>
                    FILMORA
                </h4>

                <h4 className='divContents'>
                    PREMIER
                </h4>

                <h4 className='divContents'>
                    AFTER EFFECTS
                </h4>

            </div>


            <div className='graphicsFooter'>
                <h2 className='divTitle'>
                    WEB DEV APPLICATIONS
                </h2>

                <h4 className='divContents'>
                    HTML
                </h4>

                <h4 className='divContents'>
                    CSS
                </h4>

                <h4 className='divContents'>
                    JAVASCRIPT
                </h4>

                <h4 className='divContents'>
                    REACT
                </h4>

                <h4 className='divContents'>
                    NODE JS
                </h4>

                <h4 className='divContents'>
                    EXPRESS
                </h4>

            </div>


            <div className='graphicsFooter'>
                <h2 className='divTitle'>
                    WORDPRESS APPLICATIONS
                </h2>

                <h4 className='divContents'>
                    WORDPRESS
                </h4>

                <h4 className='divContents'>
                    ELEMENTOR PRO
                </h4>

                <h4 className='divContents'>
                    FLUENT CRM/FORMS
                </h4>

                <h4 className='divContents'>
                    BUNNY CDN
                </h4>

                <h4 className='divContents'>
                    ASTRA
                </h4>

                <h4 className='divContents'>
                    CONVERSIOBOT
                </h4>

            </div>








            <div className='lowestFooter' id='footer' >
                <div className='footerLeft'>
                    <p className='footerCredits'>
                        © VANDAM DESIGNS 2022
                    </p>
                    <p className='footerCredits'>
                        All images and icons are owned by Vandam
                    </p>
                </div>
                <div className='foorterRight'>
                    <p className='footerCalltoAction'>
                        WORK WITH ME! 
                    </p>

                        <a className='aBtnFooter' href='mailto:vandamdesigns@gmail.com'>
                        SEND MAIL
                        </a>

                </div>
            </div>
        </div>


    )
}


export default Footer