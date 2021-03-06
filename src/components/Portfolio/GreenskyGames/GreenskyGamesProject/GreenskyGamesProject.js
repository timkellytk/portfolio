import React from 'react';
import HelmetHOC from '../../../../hoc/Helmet/Helmet';
import PortfolioProject from '../../../../hoc/PortfolioProject/PortfolioProject';
import ogGreensky from '../../../../assets/images/openGraph/ogGreensky.png';
import logo from '../../../../assets/images/projects/greensky-games/greensky-logo.png';
import home from '../../../../assets/images/projects/greensky-games/screenshots/home.png';
import company from '../../../../assets/images/projects/greensky-games/screenshots/company.png';
import work from '../../../../assets/images/projects/greensky-games/screenshots/work.png';
import media from '../../../../assets/images/projects/greensky-games/screenshots/media.png';
import cta from '../../../../assets/images/projects/greensky-games/screenshots/cta.png';
import contact from '../../../../assets/images/projects/greensky-games/screenshots/contact.png';

const GreenskyGamesProject = () => {
  let SEO = (
    <HelmetHOC
      title="Greensky Games Website Build | timkelly.dev"
      image={ogGreensky}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <PortfolioProject
        name="Greensky Games"
        logo={logo}
        url="https://greensky-games.webflow.io/"
        projectTitle="Website Build"
        projectDescription="An indie gaming studio looking to attract the best development talent and get favourable mentions in the press."
        gradient1="#b7d9b8"
        gradient2="#4da13b"
        images={[
          home,
          company,
          work,
          media,
          cta,
          contact
        ]}
        content={[
          {
            heading: 'The Context',
            paragraph:
              'Greensky Games needed a professional website to attract the best developers and work with top media professionals. Greensky creates intense VR games that push the limits of technology, which inspired the minimalist modern website design.',
          }
        ]}
      />
    </React.Fragment>
  );
};

export default GreenskyGamesProject;
