import React, { useRef } from 'react';
import NavigationBar from '../NavigationBar';
import Footer from "../Footer";
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import Gallery from 'react-grid-gallery';


import ami from './images/art/Ami_komura.jpg';
import animals from './images/art/animals.JPG';
import clothing2 from './images/art/clothing2.jpg';
import hwasa from './images/art/hwasa.JPG';
import sketches2 from './images/art/sketches2.JPG';
import solar from './images/art/solar.JPG';
import koreanactor from './images/art/koreanactor.jpg';
import pizza from "./images/art/Pizza.jpg";
import paper from "./images/art/paper.JPG";

import art from './images/art/art.jpg';
import art1 from './images/art/art1.JPG';
import art2 from './images/art/art2.JPG';
import art3 from './images/art/art3.JPG';
import art4 from './images/art/art4.JPG';
import art5 from './images/art/art5.jpg';
import art6 from './images/art/art6.JPG';
import art7 from './images/art/art7.JPG';
import art8 from './images/art/art8.JPG';

function Art(props) {
  const IMAGES =
    [{
            src: ami,
            thumbnail: ami,
            thumbnailWidth: 320,
            thumbnailHeight: 320,
            caption: "Ami Komura"
    },
    {
            src: animals,
            thumbnail: animals,
            thumbnailWidth: 320,
            thumbnailHeight: 320,
    },
    {
          src: hwasa,
          thumbnail: hwasa,
          thumbnailWidth: 417,
          thumbnailHeight: 556,
    },
    {
      src: sketches2,
      thumbnail: sketches2,
      thumbnailWidth: 320,
      thumbnailHeight: 320,
    },
    {
      src: solar,
      thumbnail: solar,
      thumbnailWidth: 917,
      thumbnailHeight: 689,
    },
    {
      src: pizza,
      thumbnail: pizza,
      thumbnailWidth: 320,
      thumbnailHeight: 320,
    },
    {
      src: paper,
      thumbnail: paper,
      thumbnailWidth: 320,
      thumbnailHeight: 320,
    },
    {
      src: koreanactor,
      thumbnail: koreanactor,
      thumbnailWidth: 207,
      thumbnailHeight: 348,
    },
    {
      src: clothing2,
      thumbnail:  clothing2,
      thumbnailWidth: 320,
      thumbnailHeight: 320,
    },
    {
      src: art,
      thumbnail: art,
      thumbnailWidth: 2763,
      thumbnailHeight: 3445,
    },
    {
      src: art1,
      thumbnail:  art1,
      thumbnailWidth: 1539,
      thumbnailHeight: 2448,
    },
    {
      src: art2,
      thumbnail: art2,
      thumbnailWidth: 3024,
      thumbnailHeight: 3024,
    },
    {
      src: art3,
      thumbnail:  art3,
      thumbnailWidth: 2640,
      thumbnailHeight: 2640,
    },
    {
      src: art4,
      thumbnail: art4,
      thumbnailWidth: 3024,
      thumbnailHeight: 3024,
    },
    {
      src: art5,
      thumbnail:  art5,
      thumbnailWidth: 3024,
      thumbnailHeight: 3024,
    },
    {
      src: art6,
      thumbnail: art6,
      thumbnailWidth: 693,
      thumbnailHeight: 866,
    },
    {
      src: art7,
      thumbnail:  art7,
      thumbnailWidth: 719,
      thumbnailHeight: 719,
    },
    {
      src: art8,
      thumbnail: art8,
      thumbnailWidth: 1024,
      thumbnailHeight: 1820,
    },
  
  
  ];



  const styles = {
    header: css`
        font-family: Roboto Mono;
        font-size: x-large;
        margin-top: 10px;
        left: 0px;
        text-align: center;
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
      margin-top: 20px; 
  `,
    top: css `
        font-size: x-large;
        margin-top: ${spacing.kilo};
    `,
    carousel: css `
      width: 500px;
      height:500px;
      margin: auto;
    `
};


  return (
    <div>
        {/* <p className={styles.header}> <span className={styles.spanred}> Art </span></p> */}
        <p className={styles.description} >  Procreate / graphite / prismacolor colorpencils </p>
        <Gallery images={IMAGES}/>
    </div>
  )
}
 
export default Art;