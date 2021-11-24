import React from 'react';
export default class ListDeparts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            departs: [
                {id : 1 , nom : "commercial"},
                {id : 2 , nom : "Developpement"},
                {id : 3 , nom : "maintenance"}
            ],
            nom: ''
        }
    };
    affiche=(event)=>{this.setState({ nom:event.target.value})}
    addDepartment=(event)=>{
        event.preventDefault();
        
        this.setState({nom: event.target.value})
        let i = this.state.departs.length+1
        this.setState({
            departs: [...this.state.departs, {id: i ,nom: this.state.nom}]
        })
    }  
    delete=(i)=>{
        let t=this.state.departs
        t.splice(i,1)
        this.setState({departs:t})
    }
    render() { 
        return (
        <div>
                <h2>Liste des départements: </h2> <br />
                <input type="text" onChange={this.affiche}/>
                <button onClick={this.addDepartment}>Ajouter département</button>
                <div>
                    {this.state.departs.map((e,i)=> <div>{e.id}.   {e.nom}   <button onClick={()=>this.delete(i)}>X</button></div>)}
                </div>
        </div>
        );
    }
}
