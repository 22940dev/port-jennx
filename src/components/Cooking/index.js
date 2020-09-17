import React, { useRef } from 'react';
import NavigationBar from '../NavigationBar';
import Footer from "../Footer";
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import Gallery from 'react-grid-gallery';


import a from "./images/cooking.jpg";
import b from "./images/cooking2.jpg";
import c from "./images/cooking3.jpg";
import d from "./images/cooking4.jpg";
import e from "./images/cooking5.jpg";

import f from "./images/cooking6.jpg";
import g from "./images/cooking7.jpg";
import h from "./images/cooking8.jpg";
import i from "./images/cooking9.jpg";
import j from "./images/cooking5.jpg";
import { generateKeyPair } from 'crypto';

function Cooking(props) {
  const IMAGES =
    [{
            src: a,
            thumbnail: a,
            thumbnailWidth: 3088,
            thumbnailHeight: 2316,
            caption: "Ami Komura"
    },
    {
            src: b,
            thumbnail: b,
            thumbnailWidth: 2512,
            thumbnailHeight: 1935,
    },
    {
          src: c,
          thumbnail: c,
          thumbnailWidth: 3024,
          thumbnailHeight: 4032,
    },
    {
      src: d,
      thumbnail: d,
      thumbnailWidth: 1080,
      thumbnailHeight: 1073,
    },
    {
      src: e,
      thumbnail: e,
      thumbnailWidth: 2160,
      thumbnailHeight: 3563,
    },
    {
      src: h,
      thumbnail: h,
      thumbnailWidth: 1875,
      thumbnailHeight: 1250,
    },
    {
      src: i,
      thumbnail: i,
      thumbnailWidth: 1875,
      thumbnailHeight: 1250,
    },
    {
      src: f,
      thumbnail: f,
      thumbnailWidth: 828,
      thumbnailHeight: 1158,
    },
    {
      src: g,
      thumbnail:  g,
      thumbnailWidth: 4032,
      thumbnailHeight: 3024,
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
        <p className={styles.description} >  Cooking together with friends is honestly one of the best things out there! </p>
        <Gallery images={IMAGES}/>
    </div>
  )
}
 
export default Cooking;