import React from 'react';
import HelmetHOC from '../../hoc/Helmet/Helmet';
import AboutComponent from '../About/AboutComponent';
import PortfolioComponent from '../Portfolio/PortfolioComponent';
import ContactComponent from '../Contact/ContactComponent';
import ogHome from '../../assets/images/openGraph/ogHome.png';

const Home = () => {
  let SEO = (
    <HelmetHOC
      title="Tim Kelly, Front-End Web Developer In Sydney, Australia | timkelly.dev"
      description="Tim Kelly is a front-end web developer that creates beautiful, responsive websites with HTML, CSS, JavaScript and React. Tim has built websites for The Rambler Co And Evolutionary Tutors. Tim is available for freelance web development to a select client base."
      image={ogHome}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <AboutComponent />
      <PortfolioComponent />
      <ContactComponent />
    </React.Fragment>
  );
};

export default Home;
