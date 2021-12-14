
import React, { Component } from 'react'
import Header from './components/header'
import Body1 from './components/body1'
import Body2 from './components/body2'
import Body3 from './components/body3'
import Body5 from './components/body5'
import Body6 from './components/body6'
import Form from './components/form'
import Footer from './components/foot'
import about from './components/about'
import logad from './components/adminlogin'
import adhome from './components/adminhome'
import aduser from './components/adminus'
import adpro from './components/adminpro'
import search from './components/search'
import result from './components/result'

import './css/navc.css'




import login from './components/login'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={Body1} />
        <Route exact path="/" component={Body2} />
        <Route exact path="/" component={Body3} />
        <Route exact path="/" component={Form} />
        <Route exact path="/" component={Body5} />
        <Route exact path="/" component={Body6} />
        <Route exact path="/" component={Footer} />
        <Route exact path="/login" component={login} />
        <Route exact path="/aboutus" component={about} />
        <Route exact path="/adminlogin" component={logad} />
        <Route exact path="/adminhome" component={adhome} />
        <Route exact path="/adminuser" component={aduser} />
        <Route exact path="/adminproduct" component={adpro} />
        <Route exact path="/search" component={search} />
        <Route exact path="/result" component={result} />
        {/* <Route path="/about" component={About} />
        <Route path="/posts" component={Post} />
        <Route path="/projects" component={Project} /> */}
      </div>
    )
  }
}
export default App

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <Body1 />
//       <Body2 />
//       <Body3 />
//       <Form />
//       <Body5 />
//       <Body6 />
//       <Footer />
//     </div>
//   )
// }
