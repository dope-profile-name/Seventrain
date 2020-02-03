import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size, fontFamily }) => {
  return (
    <Text as={as} size={size} fontFamily={fontFamily}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
  fontFamily: PropTypes.string
};

export default Title;
