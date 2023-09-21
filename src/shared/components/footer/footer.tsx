import React, { FC } from 'react';
import styles from './footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer}>
    Footer Component is working!
  </div>
);

export default Footer;
