import React, {useRef} from "react"
import { NavLink } from 'react-router-dom';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import { css } from 'emotion';

import git from './github.svg'
import email from './email.svg'
import linkedin from './linkedin.svg'
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
        left: css`
          float:left;
          margin-left:  ${spacing.regular};
          display: flex;
          align-items: center;
          justify-content: space-between;
          vertical-align: center;
        `,
      };
    
    
  return (
    <div className={styles.navigationBar}>
      <div>
        <a href={`mailto:jenniferxiao@berkeley.edu`} color = {colors.black}> <img className={styles.link} src={email} />  </a>
        <a href="https://github.com/jennxiao" target="_blank"> 
          <img className={styles.link} src={git} />
        </a>
        <a href="https://linkedin.com/in/jennifer-xiao-181459156/" target="_blank"> <img className={styles.link} src={linkedin}/>
        </a>
      </div>
        
      <div className={styles.right}>
        <a class="text-muted small mb-0" href="github.com/jennxiao/personalwebsite" color = "#fff" target="_blank" > built with React </a>
      </div> 
    </div>
  )
}
 
export default Footer;