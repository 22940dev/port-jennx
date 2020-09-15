import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import useDimensions from "react-cool-dimensions";
import TechStack from "./Tech";
// import Container from 'react-bootstrap';
// import Row from 'react-bootstrap';
// import Column from 'react-bootstrap';
// import { Container, Row, Column } from 'bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Column from 'react-bootstrap/Column';

 
function Project(props) {
  const styles = {
    row: css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      `,
    column: css`
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
        margin: ${spacing.centi};
        text-align: left;
      `,
    header: css`
        font-family: Lato;
        color: ${colors.snow};
        margin-top: 10%;
        margin-left: ${spacing.centi};
        left: 0px;
        text-align: left;
    `,

    subhead: css `
      font-family: Lato;
      color: ${colors.grey};
      font-size: small;  
      text-align: left;    
    `,

    title: css `
      font-family: Roboto Mono;
      font-weight: 900;
      color: ${colors.black};
      font-size: large;
      text-align: left;
      padding-top: 10px;
    `,
    body: css `
      font-family: Lato;
      color: ${colors.black};
      font-size: medium;      
  `,
  link: css`
    text-decoration: underline;
    color: ${colors.redorange};
  `,
  image: css`
    overflow: hidden;
    object-fit: contain;
    max-height: 500px;
  `

};

const techPills = props.techStack.map(technology => <TechStack tech={technology} > </TechStack>);

  return (
  <Container style={{backgroundColor: colors.white, paddingBottom: "10px", marginBottom: "25px"}}> 
    <p className={styles.title}> {props.title} | <span style={{color: colors.grey}} > {props.role} </span> </p> 
    <p className={styles.subhead} > {props.subhead} </p>
    <Container fluid="true"> 
      <Row xs={1} sm={1}>
        <Col xs lg="5">
          <div className={styles.image}>
              <Image fluid src={props.img}/>     
          </div>
        </Col>
        <Col xs lg="5" style={{textAlign: "left"}}  >
            <p className={styles.body} > {props.description} </p>
            
            <Row md="auto" > 
              {techPills}
            </Row>

            <NavLink style={{color: colors.redorange, bottom: "0px"}} className={styles.link} activeClassName={styles.activeLink} to="/play" > More about this project ↗ </NavLink>
        </Col>

      </Row>
    </Container>
  </Container>
  )
}
 
export default Project;