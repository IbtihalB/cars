import Car from './Cars';
import React from 'react';

class Mycars extends React.Component{
    noCopy=()=>{
        alert ('Copy Denied');
    }
    state={
        voitures:[{name:'ford',color:'red',year:2000},{name:'nissan',color:'yellow',year:2010},{name:'peugeot',color:'green',year:2001}],
        titre:'Mon catalogue 2'
    }
    AddNumber=()=>{
        const updatedState=this.state.voitures.map((param)=>{return param.year-=10});
        this.setState({updatedState})
    }
    render()
    {   const year =new Date().getFullYear();
        return(
           <div>
           <h1>{this.state.titre}</h1>
           <p onCopy={this.noCopy}>Salut, voici notre catalogue </p>
           <button onClick={this.AddNumber}>-10ans</button>
           {this.state.voitures.map((voiture,index)=>{
               return(<Car key={voiture.index} couleur={voiture.color} annee={year-voiture.year+' ans'} >{voiture.name}</Car>);
           })}
           </div> 
        );
    }
}
export default Mycars;
