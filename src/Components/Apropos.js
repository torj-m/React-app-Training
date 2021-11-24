import React from 'react';


export class Apropos extends React.Component {
   constructor(props){
       super(props);
       this.state={
        titre: "Qui sommes nous?",
        Contact : {
            nom: "Ma ste",
            email: "ste@sote.com",
            logo: <img src="images/logo192.jpg" alt="logo" width="100" height="100"></img>
        }


       }
   }
    
    render() { 
        return(<div>
            <h2>{this.state.titre}</h2>
                    <br />
                    {this.state.Contact.logo}
                    <ul>
                        <li>
                            {this.state.Contact.nom}
                        </li>
                        <li>
                            {this.state.Contact.email}
                        </li>
                    </ul>
        </div>);
    }

}
 
