import React from 'react'
import Header from '../components/UI/organisms/header'
import Sidemenu from '../components/UI/organisms/sidemenu'
import Main from '../components/UI/organisms/main'
import Article from '../components/UI/organisms/article'

const MasterPage = () => {
  return (
    <>
      <div className="bg-body">
        <Header />
        <div className="main-wrap">
          <Sidemenu />
          <Main />
          <Article />
        </div>
      </div>
    </>
  )
}

export default MasterPage