import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({ title, children }) => (
  <div className={styles.container}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </div>
);

Container.defaultProps = {
  title: '',
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Container;
