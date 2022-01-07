import React from 'react';
import classNames from 'classnames/bind';
import styles from './CssModule.scss';

const cx = classNames.bind(styles);

const CssModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
      This is a <span className="something">CSS Module!</span>
    </div>
  );
};

export default CssModule;