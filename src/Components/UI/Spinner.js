import React from 'react';
import spinner from '../../images/spinner-2.gif'

const Spinner = () => {
    return (
        <img
          src={spinner}
          style={{ width: '50px', margin: 'auto', display: 'block' }}
          alt='Loading'
        />
      )
};

export default Spinner;
