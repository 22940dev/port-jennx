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
    }];



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