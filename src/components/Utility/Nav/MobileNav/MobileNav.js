import React from 'react';
import PropTypes from 'prop-types';
import NavItems from '../NavItems/Navitems';
import close from '../../../../assets/images/utility/exit.svg';
import style from './MobileNav.module.css';

const MobileNav = (props) => {
  let attachedClasses = [style.Load];

  if (props.show) {
    attachedClasses = [style.MobileNav, style.Open];
  }

  return (
    <div className={attachedClasses.join(' ')}>
      <NavItems clicked={props.close} />
      <div className={style.CloseBtn} onClick={props.close}>
        <img src={close} alt="Close Menu" height="20px" />
      </div>
    </div>
  );
};

MobileNav.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default MobileNav;
