import React from 'react';

class FormRecherche extends React.Component{
    search = (event) => {
        this.props.rech(event.target.s.value)
        event.target.s.value=""
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.search}>
                <input type="text" placeholder="Mot clé" name="s" />
                <input type="submit" value="Rechercher" />
            </form>
        )
    }
}
export default FormRecherche;
