import React, { Component } from 'react'
import Modal from 'react-modal'
const customStyles = {
  content: {
    width: '40%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')
class NewContact extends Component {
  constructor() {
    super()
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      person_name: "",
      mobile_number: "",
      modalIsOpen: false
    }
  }


  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clearForm = () => {
    this.setState({
      person_name: "",
      mobile_number: ""
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log("handledata", this.state.person_name)
    this.props.getPerson(this.state)
    //console.log("hello")
    this.clearForm();
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div>

        {/* <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">newcontact</h4>
              </div>
              <div className="modal-body">


                
              </div>

            </div>
          </div>
        </div> */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>newcontact</h2>

          <form className="ui form" onSubmit={this.handleSubmit} >
            <div className="form-group" >
              <label>EnterName</label>
              <input type="text" name="person_name" placeholder="PersonName" className="form-control"
                onChange={this.handleChange}
                value={this.state.person_name} />

            </div>
            <div className="form-group">
              <label>PhoneNumber</label>
              <input type="text" name="mobile_number" className="form-control"
                onChange={this.handleChange}
                placeholder="enter phone" value={this.state.mobile_number} />

            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit"  >Submit</button>
              <button className="btn btn-warning" type="submit" onClick={this.closeModal} >Cancel</button>
            </div>
          </form>
        </Modal>

      </div>
    )
  }
}

export default NewContact;