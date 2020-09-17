import React, { useRef } from 'react';
import NavigationBar from '../NavigationBar';
import Footer from "../Footer";
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import Carousel from 'react-bootstrap/Carousel';
import Gallery from 'react-grid-gallery';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer';
import Art from '../Art';
import Cooking from '../Cooking';

function PlayPage(props) {
  const styles = {
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
        color: ${colors.black};
    `,
    carousel: css `
      width: 500px;
      height:500px;
      margin: auto;
    `
};


  return (
    <div>
        <NavigationBar/>
        <div className={styles.body}>
        <Container>
        <Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="art">
          <Row>
              <Nav c variant="tabs" lassName="justify-content-center">
                  <Nav.Item>
                    <Nav.Link eventKey="art"> <span className="styles.top"> Art </span></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="cooking">Cooking</Nav.Link>
                  </Nav.Item>
              </Nav>
            </Row>
          <Row>
              <Tab.Content>
                <Tab.Pane eventKey="art">
                  <Art></Art>
                </Tab.Pane>
                <Tab.Pane eventKey="cooking">
                  <Cooking/>
                </Tab.Pane>
              </Tab.Content>
          </Row>
          
        </Tab.Container>
        </Row>
        </Container>
          {/* <Container>
            <Row>
              <p className={styles.top}>
              <NavLink className={styles.top} activeClassName={styles.activeLink} to="/art" > Art </NavLink>
              /
              <NavLink className={styles.top} activeClassName={styles.activeLink} to="/dance" > Dance </NavLink>
              </p>   
            </Row>
          </Container> */}
        </div>
        <Footer/>
    </div>
  )
}
 
export default PlayPage;