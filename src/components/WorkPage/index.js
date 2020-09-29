import React, { useRef } from 'react';
import NavigationBar from '../NavigationBar';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import Footer from "../Footer";
import Project from './Project';
import bloom from './images/bloom.png';
import servicenow from './images/servicenow.png';
import pdf from './Xiao_Jennifer_Fall2021.pdf';
import research from './images/research.jpg';
import codeo from "./images/codeo.png";
import stratim from "./images/stratim.png";
import music from "./images/169.gif";
import crave from "./images/crave.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WorkPage(props) {
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
            font-family: Lato;
        `,
        top: css `
            font-size: x-large;
            margin-top: ${spacing.kilo};
        `,
        list: css `
            background-color: ${colors.white};
            margin-bottom: 25px;
            font-family: Lato;
            font-size: medium;
            padding: 10px;
            list-style-position: inside;
            text-align: left;
        `
    };

  return (
    <div>
        <NavigationBar/>
        <div className={styles.body}>
            <div className={styles.top} >
                <p styles={fontStyles.lion}> 
                    <a style={{color: colors.black, textDecoration: "underline", pointerEvents: "all"}} target="_blank"  href={pdf}>  
                        View my resume in paper form:   📄 
                    </a>
                </p>
                <p styles={fontStyles.lion}>  Or scroll down </p>
                <p> ↓ </p>
            </div>
            <div className={styles.row}>
                <p className={styles.header}> <span className={styles.spanblue}> Work Experience </span></p>
            </div>
                <Project 
                    title="Bloom: Stock Market Research App"
                    role="Software Engineering Intern"
                    subhead="July 2020 - Present"
                    description={["Developing front-end features in React (e.g. scanable price charts, sortable investment portfolios)", "Creating back-end support for dynamic collections of investments using Python + Django"]}
                    techStack={["React", "CSS", "Python"]}
                    img={bloom}
                    link="https://apps.apple.com/us/app/bloom-stock-market-research/id1436348671"
                />

                <Project 
                    title="ServiceNow"
                    role="Applications Development SWE Intern"
                    subhead="Summer 2019 • Santa Clara 2020 - Present"
                    description={[
                        "Migrated single-use-case map component from Angular to new React.js based framework to allow for company-wide adoption.",
                        "Built filtered data selection utilizing RESTful API and display of custom clustered markers on a map using Google API",
                        "Integrated map into new Agent Workspace product that services dispatch workers customers",

                    ]}
                    techStack={["React", "CSS", "Angular", "REST API", "Google API"]}
                    img={servicenow}
                    link=""
                />  


                <Project 
                    title="Kar (formerly STRATIM)"
                    role="Backend SWE Intern"
                    subhead="Summer 2018 • San Francisco"
                    description={[
                        "Built new microservice with REST API to manage mobile app events using Spring Boot. Improved server reliability and speed by moving away from monolithic server architecture",
                        "Developed internal HR tooling using Java Play to automate re-processing of employees", 
                    ]}
                    techStack={["SpringBoot", "Java", "Java Play", "REST API", "microservices"]}
                    img={stratim}
                    link=""
                />      
                <Project 
                    title="Matlab data processing for rodent MRI"
                    role="BioE Research Intern "
                    subhead="Summer 2016 • Summer 2015"
                    description={[
                        "(2017) Improved data extraction speed 2x on rat brain MR images through new technique", 
                        "(2016) Developed image processing automation in Matlab to identify infected brain cells."
                    ]}
                    techStack={["Matlab"]}
                    img={research}
                    link=""
                />      
            
            
            <div className={styles.row}>
                <p className={styles.header}> <span className={styles.spanblue}> Projects </span></p>
            </div>

            <Project 
                    title="The Music Connection Rails Web App"
                    role="CS168 Software Engineering Client Project"
                    subhead="Fall 2019"
                    description={["Developed Rails web app to schedule music tutoring between teachers and 75 volunteer UC Berkeley students. Utilizing test-driven-development and Agile practices to refactor legacy code"]}
                    techStack={["Rails", "Heroku", "CSS" , "Agile Development"]}
                    img={music}
                    link="https://tmc-ucberkeley.herokuapp.com/"
                />   

            <Project 
                    title="iOS Chatbot Food Recommendations"
                    role="Codeology Project Lead (team of 6)"
                    subhead="Spring 2019"
                    description={["Led a 6 person team to create an iOS app that allows users to swipe through restaurants based on their responses to a chatbot. Uses Yelp API and Flask to service REST API "]}
                    techStack={["iOS", "Swift", "Flask" , "Yelp API"]}
                    img={crave}
                    link="https://github.com/tinayzhao/cravebot"
            />    

            <div className={styles.row}>
                <p className={styles.header}> <span className={styles.spanblue}> Skills </span></p>
            </div>
            <div className={styles.list}>
            <Row md={3} xs={1} sm={1} >
                <Col>
                    <p style={{fontWeight: 600}} > Relevant Coursework </p> 
                    <ul> 
                        <li> Operating Systems </li>
                        <li> Networking  </li>
                        <li> Security  </li>
                        <li> Software Engineering  </li>
                        <li> Algorithms </li>
                        <li> Intro to AI  </li>
                    </ul>
                   
                </Col>

                <Col>
                    <p style={{fontWeight: 600}} >  Frameworks/Tech </p> 
                    <ul> 
                        <li> React </li>
                        <li> Ruby on Rails </li>
                        <li> Adobe Suite / Figma </li>
                    </ul>
                </Col>
                <Col>
                    <p style={{fontWeight: 600}} > Languages I've worked with </p> 
                    <ul> 
                        <li> Java  </li>
                        <li>  Python </li>
                        <li> JavaScript </li>
                        <li> C </li>
                        <li> Ruby </li>
                        <li> Go </li>
                        <li> Swift </li>
                        <li> SQL </li>
                    </ul>
                </Col>

            </Row>
            </div>

            <div className={styles.row}>
                <p className={styles.header}> <span className={styles.spanblue}> Other </span></p>
            </div>
            <Project 
                    title="Social Chair"
                    role="Codeology"
                    subhead="Fall 2019 - Spring 2020"
                    description={["Organized 2 semester retreats and 15+ social events for 70+ club member"]}
                    techStack={[]}
                    img={codeo}
                    link="https://www.codeology.club/"
            />  
      </div>
        <Footer/>
    </div>
  )
}
 
export default WorkPage;