import React, { useRef } from 'react';
import NavigationBar from '../NavigationBar';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import RobotoMono from 'typeface-roboto-mono';
import Lato from 'typeface-lato';
import useDimensions from "react-cool-dimensions";
import Project from './Project';
import bloom from './images/bloom.png'
import servicenow from './images/servicenow.png'

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
            <div className={styles.top} >
                <p styles={fontStyles.lion}> 
                    <NavLink style={{color: colors.black, textDecoration: "underline"}}   to="/resume" >  View my resume in paper form:   📄 </NavLink>
                </p>
                <p styles={fontStyles.lion}>  Or scroll down </p>
                <p> ↓ </p>
            </div>
            <div className={styles.row}>
                <p className={styles.header}> <span className={styles.spanblue}> Work Experience </span></p>
            </div>
                <Project 
                    title="Bloom: Stock Market Research App"
                    role="Software Intern"
                    subhead="June 2020 - Present"
                    description="Developing front-end features in React, such as scanable price charts and sortable investment portfolios.  Building dynamic collections of investments using Python."
                    techStack={["React", "CSS", "Python"]}
                    img={bloom}
                />

                <Project 
                    title="ServiceNow"
                    role="Applications Development SWE Intern"
                    subhead="Summer 2019 • Santa Clara 2020 - Present"
                    description="Migrated single-use-case map application built in Angular to React as reusable component useful for company-wide product development
                    
                    Integrated map into Agent Workspace product, a centralized web app for dispatch workers

                    Built filtered data selection utilizing RESTful API and display of custom clustered markers on a map using Google API

                    "
                    techStack={["React", "CSS", "Angular", "REST API", "Google API"]}
                    img={servicenow}
                />  


                <Project 
                    title="Kar (formerly STRATIM)"
                    role="Backend SWE Intern"
                    subhead="Summer 2018 • San Francisco"
                    description="Built new microservice with REST API to manage mobile app events using Spring Boot. Improved server reliability and speed by moving away from monolithic server architecture

                    Developed internal HR tooling using Java Play to automate re-processing of employees 

                    "
                    techStack={["SpringBoot", "Java", "Java Play", "REST API", "microservices"]}
                    img={""}
                />      
            
            
            <div className={styles.row}>
                <p className={styles.header}> <span className={styles.spanblue}> Projects </span></p>
            </div>

            <div className={styles.row}>
                <p className={styles.header}> <span className={styles.spanblue}> Projects </span></p>
            </div>
      </div>
    </div>
  )
}
 
export default WorkPage;