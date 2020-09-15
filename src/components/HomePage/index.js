import React, { useRef } from 'react';
import NavigationBar from '../NavigationBar';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import useDimensions from "react-cool-dimensions";
 
function HomePage(props) {
    const ref = useRef();
    const { width, height, entry, unobserve, observe } = useDimensions(ref);

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
            margin-top: 10%;
          `,
        column: css`
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex: 1;
            margin: ${spacing.centi};
          `,
        body: css `
          padding-top: ${spacing.mega};
          margin: ${spacing.regular};
          align-items: center;
      `,
        link: css `
            text-decoration: underline;    
        `
    };



    return (
    <div>
        <NavigationBar> </NavigationBar>
        <Container className={styles.body}>
            <Row>
                <Col>
                <p> 
                Hi I’m Jennifer Xiao!
                </p>

                <p>
                I am a 4th year EECS major at UC Berkeley 🐻  ⏤ currently seeking internship opportunities in SWE.
                </p>
                <NavLink style={{color: colors.blue}} className={styles.link} to="/work" > See what work I do in CS  ↗ </NavLink>
                <p>
                <NavLink style={{color: colors.redorange}} className={styles.link} to="/play" > and what I do outside of it  ↗ </NavLink>
                </p>
                </Col>
                <Col>
                 <Image> 

                 </Image>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
 
export default HomePage;