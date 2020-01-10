import React from 'react';
import UserSplash from './user_splash_container';
import IndexSplash from './index_splash_container';

const Yummaly = ({currentUser, location}) => {

  const userShow  = () => {
    return (
      <UserSplash />
    )
  }

  const indexShow = () => {
    return (
      <IndexSplash />
    )
  }

  return (
    <div className="show">
      {
        location === '/' ?
          indexShow() :
          userShow()
      }
    </div>
  )
}

export default Yummaly;
