import React, { Component } from 'react';
import NewContact from './new-contact'
import FavContacts from './fav-contacts'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PersonsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "contactlist": [
        {
          "id": 1,
          "person_name": "bhargav",
          "mobile_number": "+91 8904428667"
        },
        {
          "id": 2,
          "person_name": "vishnu",
          "mobile_number": "+91 9848022338"

        },
        {
          "id": 3,
          "person_name": "naveen",
          "mobile_number": "+91 9080706050"

        },
        {
          "id": 4,
          "person_name": "mani",
          "mobile_number": "+91 9878685848"

        },
        {
          "id": 5,
          "person_name": "raju",
          "mobile_number": "+91 9232425346"

        },
        {
          "id": 6,
          "person_name": "ramya",
          "mobile_number": "+91 9876543210"

        },
        {
          "id": 7,
          "person_name": "nandu",
          "mobile_number": "+91 9121314151"

        },
        {
          "id": 8,
          "person_name": "venky",
          "mobile_number": "+91 8769534218"

        },
        {
          "id": 9,
          "person_name": "kushal",
          "mobile_number": "+91 9657432170"

        },
        {
          "id": 10,
          "person_name": "samrat",
          "mobile_number": "+91 9076543821"

        }
      ],

      Selectedfavperson: null,
      newId: 11
    };
  }

  selectedDeatils = (selectedPerson) => {
    console.log('Selcted Person is', selectedPerson)
    this.props.addFavPerson(selectedPerson);


  }


  recivedPerson = (data) => {
    let newData = Object.assign({}, data, { personId: this.state.newId })
    let newDataList = [...this.state.contactlist, newData]
    this.setState({
      contactlist: newDataList,
      newId: this.state.newId + 1
    })
    console.log("Recived Data", data)
  }



  render() {

    const styles = {
      nameColor: {
        color: 'blue',
        fontSize: '18px'

      },
      numColor: {
        color: 'red',
        marginLeft: '100px',
        marginRight: '50px',
        fontSize: '15px'
      },
      staricon: {
        fontSize: '22px'
      },
      ullist: {
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto'
      }
    }
    const listcontacts = this.state.contactlist.map(data => {
      return (

        <ul key={data.id} styles={styles.ullist} className="list-group">
          <li className="list-group-item" ><span style={styles.nameColor}>{data.person_name}</span> 
          <span style={styles.numColor}>{data.mobile_number}</span>
            <Link to="/favcontact">
            <i class="fas fa-star fa-xl" style={styles.staricon}  onClick={() => this.selectedDeatils(data)} >   
              </i>
            </Link>
          </li>
        </ul>

      )
    });

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
          <h3>Contacts</h3>
             {listcontacts}
             <button onClick={() => { this._modal.openModal() }} className="btn btn-primary" > AddContact </button>
             <NewContact getPerson={this.recivedPerson} ref={(modal) => { this._modal = modal; }} />
              {this.state.Selectedfavperson && <FavContacts persondeatils={this.state.Selectedfavperson} />}
          </div>
        </div>
      </div>

    );
  }
}
const dispatchStateToProps = (dispatch) => {
  return {
    addFavPerson: (addPerson) => {
      console.log('addPerson: ', addPerson)
      dispatch({ type: 'ADD_PERSON', payload: addPerson })
    }
  }
}

export default connect(null, dispatchStateToProps)(PersonsList);