import React from 'react';
import './covid.styles.scss';

const Covid = () => {
  return (
    <div className='covid'>

		<iframe src='http://covid-usa.info/states.html' width="1000" height="800"/>
      
 	</div>
  );
};

export default Covid;