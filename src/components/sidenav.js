import React, {useEffect, useRef} from 'react';
import { Link,useHistory } from 'react-router-dom';
const Sidenav = props => {
  const history = useHistory()
  console.log(history)
  const nav = useRef(null);
  const updateActiveButton =() =>{
    let navHref=nav.current.getElementsByTagName('A');
    for(let i=0;i<navHref.length;i++){
      if(navHref[i].href.substr(window.location.origin.length)===history.location.pathname)
        navHref[i].classList.add("is-active")
      else
        navHref[i].classList.remove("is-active")
    }
  }
  useEffect(()=>{
    updateActiveButton()
  },[])
    return (
        <aside ref={nav} onClick={()=>{updateActiveButton()}} className="menu" style={{minHeight:"100vh"}}>
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li ><Link to="/" className="is-active">Dashboard</Link></li>
          <li ><Link to="/videos">Videos</Link></li>
        </ul>
        <p className="menu-label">
          Administration
        </p>
        <ul className="menu-list">
          <li><a>Settings</a></li>
        </ul>
      </aside>
    );
};
export default Sidenav;
