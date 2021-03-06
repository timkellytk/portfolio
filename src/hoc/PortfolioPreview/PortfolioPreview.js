import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../components/Utility/Section/Section';
import LinkArrow from '../../components/Utility/LinkArrow/LinkArrow';

const PortfolioPreview = (props) => {
  return (
    <Section gradient1={props.gradient1} gradient2={props.gradient2}>
      <div>
        <img src={props.logo} alt={props.name + ' logo'} height="65px" />
        <p>{props.description}</p>
        <LinkArrow link={props.link} internal>
          View Full Project
        </LinkArrow>
      </div>
    </Section>
  );
};

PortfolioPreview.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  avatarName: PropTypes.string.isRequired,
  avatarTitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  gradient1: PropTypes.string.isRequired,
  gradient2: PropTypes.string.isRequired,
};

export default PortfolioPreview;
