import React from 'react';
import axios from 'axios';
import FormRecherche from './formRecherche';
class Photos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            phoneList :[],
            condition :"",
            page : 1
        }
    }
    componentDidMount() {
        axios.get("https://pixabay.com/api/?key=24497568-bfcc579323f9e5923ff20f532&category=science")
        .then(res => {  
            const phone = res.data.hits
            console.log(phone)
            this.setState({
                phoneList : phone
            });
        })
    }
    
    recherche = (cond) => (
        this.setState({condition : cond})
    )

    render() {
        return (
            
            <div>
                <FormRecherche rech = {this.recherche} />
                 <ul>
                    {this.state.phoneList.filter((p)=>{return p.tags.toString().includes(this.state.condition)}).map((phone, i)=>{return <div><p>{phone.tags}</p><li key={i} style={{listStyleType:'none'}}><img src = {phone.previewURL} alt=""></img></li></div>})}
                 </ul>
            </div>
        )
    }
}
export default Photos