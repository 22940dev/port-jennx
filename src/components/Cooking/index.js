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

import a1 from "./images/food11.jpg";
import b1 from "./images/food12.jpg";
import c1 from "./images/food13.jpg";
import d1 from "./images/food14.JPG";
import e1 from "./images/food15.jpg";
import f1 from "./images/food16.jpg";
import g1 from "./images/food17.jpg";
import h1 from "./images/food18.jpg";
import i1 from "./images/food18.jpg";
import { generateKeyPair } from 'crypto';

function Cooking(props) {
  const IMAGES = [
    // [{
    //         src: a,
    //         thumbnail: a,
    //         thumbnailWidth: 3088,
    //         thumbnailHeight: 2316,
    //         caption: "cooking pasta with "
    // },
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
      caption: "coffee cake (recipe from Binging with Babish)"
    },
    {
      src: a1,
      thumbnail: a1,
      thumbnailWidth: 3024,
      thumbnailHeight: 3499,
      caption: "chicken brocolli pasta"
},
{
      src: b1,
      thumbnail: b1,
      thumbnailWidth: 2697,
      thumbnailHeight: 2430,
},
{
    src: c1,
    thumbnail: c1,
    thumbnailWidth: 2724,
    thumbnailHeight: 3634,
},
{
src: d1,
thumbnail: d1,
thumbnailWidth: 2653,
thumbnailHeight: 3208,
caption: "spicy bulgolgi beef (recipe from Korean Bapsang)"
},
{
src: e1,
thumbnail: e1,
thumbnailWidth: 4032,
thumbnailHeight: 3024,
},
{
src: h1,
thumbnail: h1,
thumbnailWidth: 775,
thumbnailHeight: 1090,
caption: "mango crepe"
},
// {
// src: i1,
// thumbnail: i1,
// thumbnailWidth: 3261,
// thumbnailHeight: 2702,
// caption: "kimchi fried rice"
// },
{
src: f1,
thumbnail: f1,
thumbnailWidth: 3261,
thumbnailHeight: 2702,
caption: "kimchi fried rice"
},
{
src: g1,
thumbnail:  g1,
thumbnailWidth: 3986, 
thumbnailHeight: 2553,
}
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
        <p className={styles.description} >  Cooking together with friends is honestly one of the best things out there! </p>
        <Gallery images={IMAGES}/>
    </div>
  )
}
 
export default Cooking;