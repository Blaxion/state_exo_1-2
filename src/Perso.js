import React, { Component } from 'react';

class Perso extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <p>Je m'appelle {this.props.personnages.personnage1.nom}{this.props.personnages.personnage1.prenom}, j'ai {this.props.personnages.personnage1.age}  et je suis appelé du composant Perso.js</p>
                <button onClick= {() => this.props.onMod()} >MODIFIER</button>
            </div>
        );
    }
}

export default Perso;