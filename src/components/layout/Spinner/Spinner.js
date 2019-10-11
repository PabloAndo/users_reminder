import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import style from './Spinner.module.scss';

export default () => (
  <Fragment>
    <img src={spinner} style={style} alt='Loading...' />
  </Fragment>
);
