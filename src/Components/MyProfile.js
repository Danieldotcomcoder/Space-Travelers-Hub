import React from 'react';
import { useSelector } from 'react-redux';
import JoinedMissions from './JoinedMissions';

export default function MyProfile() {
  const rocketsName = useSelector((state) => state.rockets);
  const reservedRockets = rocketsName.filter((rocket) => rocket.reserved);
  return (
    <div>
      <div className="my-mission">
        <h1>My Missions</h1>
        <JoinedMissions />
      </div>
      <div className="my-rockets">
        <h2>My Rockets</h2>
        <ul className="rocket-profile">
          {reservedRockets.map((rocket) => (
            <li className="rocket-name" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
