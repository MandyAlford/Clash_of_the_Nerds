import React from 'react';
import './Nav.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import small from '../../assets/logo-small.png';


export const Nav = (props) => {
  return (
    <section className='nav-bar'>
      <h1 className='user-name-nav'>Welcome {props.user[0].name}</h1>
      <img src={ small } className='small-title-logo' alt='clash of the nerds logo but small' />
      <Link to='/'><button type='button' className='home-btn'>Quit</button></Link>
    </section>
  )
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Nav)
