import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../App.css';


// class AddMovie extends Component {  
//   constructor(props){
//     super(props);
//     // this.handleClose = this.props.handleClose;
//     this.showModal = this.props.showModal;
//     this.show = this.props.show;
//     this.children = this.props.children;
//     //this.Modal = this.Modal.bind(this);
//     console.log("Constructor : " + this.show);

//   }


//   render() {  

//     const Modal = () => {
//       const showHideClassName = this.show ? "modal display-block" : "modal display-block"; 

//       return(
//       <div className={showHideClassName}>
//         <section className="modal-main">
//           {this.children}
//           {/* <button onClick={this.handleClose}>close </button> */}
//         </section>
//       </div>
//       );
//     }
//     console.log("showModal : " + this.showModal);
//     console.log("show : " + this.show);
//     console.log("children : " + this.children);   

//     return(
//       <div >
//         {Modal}
//       </div>
//     )
//   }
// }

// export default AddMovie;

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <Form>
          <FormGroup row>
          <Label for="title" sm={2} lg={4}>Name</Label>
          <Col sm={10} lg={8}>
            <Input type="text" name="title" id="title" placeholder="Title" />
          </Col>
          </FormGroup>
          <FormGroup row>
          <Label for="Year" sm={2} lg={4}>year</Label>
          <Col sm={10} lg={8}>
            <Input type="text" name="year" id="year" placeholder="Year" />
          </Col>
          </FormGroup>
          <FormGroup row>
          <Label for="plot" sm={2} lg={4}>Plot</Label>
          <Col sm={10} lg={8}>
            <Input type="text" name="plot" id="plot" placeholder="plot" />
          </Col>
          </FormGroup>          
        </Form>

        <Button className="btn-update" >Update </Button>
        <Button
          onClick={handleClose}
        >
          Close
        </Button>
      </section>
    </div>
  );
};

export default Modal;