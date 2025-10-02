import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroBackground from './HeroBackground'

const Hero = () => {
    return (
        <>
            <Helmet>
                <title>My Cool React App</title>
                <meta name='description' content='A short description of this page' />
                <link rel='canonical' href='https://www.mycoolsite.com' />
                {/* OpenGraph / Twitter tags */}
                <meta property='og:title' content='My Cool React App' />
                <meta property='og:description' content='Share friendly description' />
                <meta property='og:image' content='/og-image.jpg' />
            </Helmet>


            {/* content goes here */}
            {/* <h1>Welcome to My Cool React App</h1> */}
            <HeroBackground />
        </>
    )
}

export default Hero