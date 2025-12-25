import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroBackground from './HeroBackground'

const Hero = () => {
    return (
      <>
        <Helmet>
          <title>TestPrep Academy</title>
          <meta
            name="description"
            content="CBT Innovation Platform helps you manage and track cognitive behavioral therapy progress with modern tools and insights"
          />
          <link rel="canonical" href="https://www.cbtinnovation.com" />
          {/* OpenGraph / Twitter tags */}
          <meta property="og:title" content="Test Prep Academy " />
          <meta
            property="og:description"
            content="Track and improve your CBT journey with the TestPrep Academy. Modern tools for therapists and clients."
          />
          <meta property="og:image" content="/undraw_certification_i2m0.svg" />
        </Helmet>

        {/* content goes here */}
        {/* <h1>Welcome to My Cool React App</h1> */}
        <HeroBackground />
      </>
    );
}

export default Hero