import React from 'react';
import PropTypes from 'prop-types';

const rrd = require('react-router-dom');

rrd.BrowserRouter = ({ children }) => <div>{children}</div>;
module.exports = rrd;

rrd.BrowserRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
