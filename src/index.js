import React from 'react';
import ReactDOM from 'react-dom';

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


class Calculation extends React.Component {
  render() {
    let pi = Math.PI
    let exponentiation = 3**5
    return <div>The value of pi is approximately {pi}
           <h3>{exponentiation}</h3></div>
  }
}

ReactDOM.render(
  <Calculation />, document.getElementById('calculation')
);
