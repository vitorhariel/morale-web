import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, loading }) {
  return <button type="button">{loading ? 'Carregando...' : children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
