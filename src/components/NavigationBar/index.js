import React, {useRef} from "react"
import { NavLink } from 'react-router-dom';
import { buildPageSpacing, spacing, fontStyles, colors } from '../../styles';
import { css } from 'emotion';
import RobotoMono from 'typeface-roboto-mono'
import useDimensions from "react-cool-dimensions";
 
function NavigationBar() {
  const ref = useRef();
  const { width, height, entry, unobserve, observe } = useDimensions(ref, {
      onResize: ({ width, height, entry, unobserve, observe }) => {
        // Triggered whenever the size of the target is changed
      },
    });

    const styles = {
        navigationBar: css`
          z-index: 1;
          position: fixed;
          width: 100%;
          left: 0;
          top: 0;
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
          flex: 1;
          text-decoration: none;
          align-items: center;
          margin-right:  ${spacing.regular};
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
      <div className={styles.headingStyle}>
        <NavLink style={{color: colors.black}}  className={styles.link} activeClassName={styles.activeLink} to="/about" > jennifer xiao </NavLink>
      </div>
      <div className={styles.right}>
        <NavLink style={{color: colors.blue}} className={styles.link} activeClassName={styles.activeLink} to="/work" > Work </NavLink>
        <NavLink style={{color: colors.redorange}} className={styles.link} activeClassName={styles.activeLink} to="/play" > Play </NavLink>
      </div>
    </div>
  )
}
 
export default NavigationBar;