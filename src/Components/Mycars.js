import Car from './Cars';
import React from 'react';

class Mycars extends React.Component{
    noCopy=()=>{
        alert ('Copy Denied');
    }
    render()
    {
        return(
          <div>
           <h1>{this.props.title}</h1>
           <p onCopy={this.noCopy}>Salut, voici notre catalogue </p>
           <Car couleur='red'>Ford</Car>
           <Car couleur='yellow'>Mercedes</Car>
           <Car >Peugeot</Car>
           </div> 
        );
    }
}
export default Mycars;
