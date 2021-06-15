import React, { Component } from 'react';
import Perso from './Perso';

export default class App extends Component {
  state = {
    personnage1 : {
      prenom:"far", 
      nom:"khi",
      age:"27"
    },
    personnage2 : {
      prenom:"Alex", 
      nom:"VS",
      age:"25"
    },
    personnage3 : {
      prenom:"Loic", 
      nom:"detesmorts",
      age:"150"
    }
  }
  onModParent= () =>{
    switch (prompt('which character do you wanna change? 1 or 2 or 3')) {
      case '1':
        alert('Initializing char 1')
        this.setState({
          personnage1 : {
            prenom:prompt('prenom:'), 
            nom:prompt('nom:'),
            age:prompt('age')
          }
        })
        break;
      case '2':
        alert('Initializing char 2')
        this.setState({
          personnage2 : {
            prenom:prompt('prenom:'), 
            nom:prompt('nom:'),
            age:prompt('age')
          }
        })
        break;
      case '3':
        alert('Initializing char 3')
        this.setState({
          personnage3 : {
            prenom:prompt('prenom:'), 
            nom:prompt('nom:'),
            age:prompt('age')
          }
        })
        break;
      default:
        break;
    }
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Perso personnages={this.state} onMod = {this.onModParent}/>
        <p>prénom:{this.state.personnage1.prenom} nom:{this.state.personnage1.nom} age:{this.state.personnage1.age}</p>
        <p>prénom:{this.state.personnage2.prenom} nom:{this.state.personnage2.nom} age:{this.state.personnage2.age}</p>
        <p>prénom:{this.state.personnage3.prenom} nom:{this.state.personnage3.nom} age:{this.state.personnage3.age}</p>
      </div>
    );
  }
}

