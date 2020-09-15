import React, {useRef} from "react"
import { NavLink } from 'react-router-dom';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import { css } from 'emotion';
import useDimensions from "react-cool-dimensions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TechStack(props) {

    function getIconLink() {
        return 
    }

    const styles = {
        pill : css`
            background-color: none;
            border: ${colors.blue};;
            border
            color: black;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 16px;
            font-family: Roboto Mono;
            font-weight: 500;
            font-size: 10px;
            color: ${colors.blue};
            pointer-events: none;
            border-style: solid;
            border-width: thin;
        `,
        headingStyle: css`
          color: ${colors.liquorice};
          margin-left:  ${spacing.regular};
        `,
      };
    
    
  return (
    <Col> 
      <button className={styles.pill} > {props.tech} 
        <i class="devicon-meteor-plain"> </i>
       </button>
    </Col>
  )
}
 
export default TechStack;