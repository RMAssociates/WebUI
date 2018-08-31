import React from 'react';
import NavigationBar from './subComponents/navigationBar';
import MobileHeader from './header/mobile';

export default function Header(props) {
  return (
    <div className="">
      <MobileHeader />
      <NavigationBar />
    </div>
  );
}
