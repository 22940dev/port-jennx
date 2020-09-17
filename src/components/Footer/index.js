import React, {useRef} from "react"
import { NavLink } from 'react-router-dom';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import { css } from 'emotion';
import Email from '@material-ui/icons/Email'
import git from './github.svg'
import linkedin from './linkedin.png'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

 
function Footer() {
  const ref = useRef();

    const styles = {
        navigationBar: css`
          z-index: 1;
          width: 100%;
          left: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${spacing.regular};
          font-family: Roboto Mono;
          background-color: ${colors.white};
        `,
        headingStyle: css`
          color: ${colors.liquorice};
          margin-left:  ${spacing.regular};
        `,
        link: css`
          height: 40px;
        `,
        activeLink: css`
          border-bottom-width: 2px;
          padding: 2px;
          border-bottom-style: inset;
        `,
        icon: css`
          height: 22px;
        `,
        right: css`
          float:right;
          margin-right:  ${spacing.regular};
          display: flex;
          align-items: center;
          justify-content: space-between;
          vertical-align: center;
        `,
      };
    
    
  return (
    <div className={styles.navigationBar}>
      <div >
        <a href={`mailto:jenniferxiao@berkeley.edu`}> <Email/> Email me! </a>
        <a href="https://github.com/jennxiao"> 
          <img className={styles.link} src={git} />
        </a>
        <a href="https://linkedin.com/in/jennifer-xiao-181459156/"> <img className={styles.link} src={linkedin}/>
        </a>
      </div>
      <div className={styles.right}>
        <a class="text-muted small mb-0" href="github.com/jennxiao/personalwebsite" color = "#fff">built with create-react-app </a>
      </div>  
    </div>
  )
}
 
export default Footer;