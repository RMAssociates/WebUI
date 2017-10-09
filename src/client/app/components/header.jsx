import React from 'react';
import NavigationBar from './subComponents/navigationBar.jsx';

export default function Header(props) {
  return (
    <div>
      <h1 className="bg-success text-white">Leaside Village Dental</h1>
      <NavigationBar />
    </div>
  );
}