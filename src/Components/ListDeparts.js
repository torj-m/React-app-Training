import React from 'react';
import FormAjout from './FormAjout';
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
   
    addDepartment=(d)=>{
        let i = this.state.departs.length+1
        this.setState({
            departs: [...this.state.departs, {id: i ,nom: d}]
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
                <FormAjout newDept={this.addDepartment}/>
                <div>
                    {this.state.departs.map((e,i)=> <div>{e.id}.   {e.nom}   <button onClick={()=>this.delete(i)}>X</button></div>)}
                </div>
        </div>
        );
    }
}
