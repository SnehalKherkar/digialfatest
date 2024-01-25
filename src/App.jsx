import { useState } from 'react'
import './App.css'
import Headers from './headerPage/Headers';
import Content from './headerPage/Content';
import ArticalOne from './articals/ArticalOne';
import ArticalTwo from './articals/ArticalTwo';
import GetDemo from './getDemo/GetDemo';
import MarketingContent from './marketing/MarketingContent';
import Footer from './footer/Footer';

function App() {
  return (
    <>

      <Headers />
      <div className='contentcompo'>
      <Content  />
      </div>
      <ArticalOne />
      <ArticalTwo />
      <MarketingContent />
      <GetDemo />
      <Footer />
    </>
  )
}

export default App
