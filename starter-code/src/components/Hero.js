import React from 'react';
import '../app.css'
import Title from './Title'
import Button from './Button';
import Nav from './Nav';
class Hero extends React.Component {
  render() {
    return (
      <div id="hero">
        <Nav />
        <Title titleText="Say hello to reactJS" subtitleText="You will learn a Frontend framework from scratch, to become a ninka Developer" />
        <Button />
      </div>
    )
  }
}

export default Hero