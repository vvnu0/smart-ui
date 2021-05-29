import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user-context/user-context';

const Smart = () => {
  const user = useContext(UserContext);
  let history = useHistory();
  if (!user.loggedInStatus) {
    history.push('/signin');
    return null;
  }
  return (
    <div className="profile">
      <h1> Welcome, {user.userDetails.displayName}</h1>
      <h2> How To : </h2>
      <ul>
        <li>
          <label onClick={() => {window.location.assign("https://www.acwd.org/133/Water-Conservation");}} target="_blank">
            Save Water
          </label>
        </li>
        <li>
          <label onClick={() => {window.location.assign("https://www.pge.com/en_US/residential/save-energy-money/resources/everyday-tips/energy-saving-tips/energy-saving-tips.page");}} target="_blank">
            Save Electricity
          </label>
        </li>
        <li>Links to IOT Devices </li>
        <li>
          <label onClick={() => {window.location.assign("https://www.energysage.com/local-data/solar-panel-cost/ca/alameda-county/alameda/");}} target="_blank">
            Solar Panels
          </label>
        </li>
        <li>Videos / Upcoming Sessions</li>
      </ul>
    </div>
  );
};

export default Smart;
