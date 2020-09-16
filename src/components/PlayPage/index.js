import React, { useRef } from 'react';
import NavigationBar from '../NavigationBar';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import ami from './images/art/Ami_komura.jpg';
import animals from './images/art/animals.JPG';
import clothing2 from './images/art/clothing2.jpg';
import hwasa from './images/art/hwasa.JPG';
import sketches2 from './images/art/sketches2.JPG';
import solar from './images/art/solar.JPG';
import koreanactor from './images/art/koreanactor.jpg';

function PlayPage(props) {
  let art = [ami, animals, clothing2, hwasa, sketches2, solar, koreanactor];

  let artCaro = art.map(artLink => 
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={artLink}
        alt=""
      />
    </Carousel.Item>
    )

  const styles = {
    navigationBar: css`
      z-index: 1;
      background-color: ${colors.snow};
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      height: 10%;
      padding-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 ${spacing.regular} 0;
    `,
    row: css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
      `,
    column: css`
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
        margin: ${spacing.centi};
        margin-bottom: 10%;
      `,
    header: css`
        font-family: Roboto Mono;
        font-size: x-large;
        margin-top: 10%;
        left: 0px;
        text-align: left;
    `,
    spanred: css `
        background-color: ${colors.redorange};
        padding: 10px;
        font-weight: 700;
        color: ${colors.snow};
    `,
    spanblue: css `
        background-color: ${colors.blue};
        padding: 10px;
        font-weight: 700;
        color: ${colors.snow};
    `,
    body: css `
        padding-top: ${spacing.mega};
        margin: ${spacing.regular};
        align-items: center;
    `,
    description: css `
      font-family: Lato;
      color: ${colors.black};
      font-size: large; 
      text-align: left;     
  `,
    top: css `
        font-size: x-large;
        margin-top: ${spacing.kilo};
    `
};


  return (
    <div>
        <NavigationBar> </NavigationBar>
        <div className={styles.body}>
        
        <p className={styles.header}> <span className={styles.spanred}> Art </span></p>
        <p className={styles.description} >  Some sketches and photostudies done in Procreate or on paper with graphite/prismacolor pencils </p>
        <Container> 
          <Row>
            <Carousel>
            {artCaro}
              
            </Carousel>
          </Row>
        </Container>
          {/* <p className={styles.header}> <span className={styles.spanred}> Cooking </span></p>
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ami}
                  alt=""
                />
              </Carousel.Item>
              
            </Carousel>
          </Row>
          </Container>
          <p className={styles.header}> <span className={styles.spanred}> Dance </span></p> */}
        </div>
    </div>
  )
}
 
export default PlayPage;