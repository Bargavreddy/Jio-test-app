import React, { Component } from 'react'
import { connect } from 'react-redux'


  class FavContacts extends Component{
    constructor(props){
      super(props)
    }
  
  render(){
    console.log("function data",this.props.addPerson);
    const favData = this.props.addPerson.map(addP => <li className="list-group-item" key={addP.id} > {addP.person_name} :
     {addP.mobile_number} </li>)
  return (
    
    <div>
           <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
          <h3>FavourateContacts</h3>
            <ul className="list-group">
            
               {favData}
              
            </ul>
            </div>
            </div>
            
         
    </div>
  )
}
}
const mapStateToProps=(state)=> {
  console.log("favaData" ,state.addFavP)
return{
  addPerson:state.addFavP
}
}
export default connect(mapStateToProps)(FavContacts);