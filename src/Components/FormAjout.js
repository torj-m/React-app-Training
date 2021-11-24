import React from 'react';
class FormAjout extends React.Component {
    
    addDepartment=(event)=>{
        event.preventDefault();
        this.props.newDept(event.target.a.value)
       
    }
    
    render() { 
        return(        
        <div>
            <form onSubmit={this.addDepartment}>
                <input type="text" name= "a" />
                <input type="submit" value="Ajouter departement"/>
            </form>
        </div>
        );
    }
}
 
export default FormAjout;