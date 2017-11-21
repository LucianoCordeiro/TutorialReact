import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return(<h1>Hello Word</h1>);
  }
}

ReactDOM.render(
  <Greeting />, document.getElementById('root')
);

class UserData extends React.Component {
  render() {
    return <div>
             <h1>Contacts</h1>
             <ul>
               <li>
                 <h2>Luciano Cordeiro</h2>
                 <a href="mailto:lucianocordeiro1991@hotmail.com">lucianocordeiro1991@hotmail.com</a>
               </li>
             </ul>
           </div>
  }
}

ReactDOM.render(
  <UserData />, document.getElementById('userdata')
);
