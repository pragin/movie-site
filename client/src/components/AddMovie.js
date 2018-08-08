import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
            <Label for="title" sm={2} lg={4}>Title :</Label>
            <Col sm={10} lg={8}>
              <Input type="text" name="title" id="title" placeholder="Title" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="year" sm={2} lg={4}>year :</Label>
            <Col sm={10} lg={8}>
              <Input type="text" name="year" id="year" placeholder="Year" />
            </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="cast" sm={2} lg={4}>Cast :</Label>
              <Col sm={10} lg={8}>
                <Input type="text" name="cast" id="cast" placeholder="Cast" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="director" sm={2} lg={4}>Director :</Label>
              <Col sm={10} lg={8}>
                <Input type="text" name="director" id="director" placeholder="Director" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="genre" sm={2} lg={4}>Genre :</Label>
              <Col sm={10} lg={8}>
                <Input type="text" name="genre" id="genre" placeholder="Genre" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="runtime" sm={2} lg={4}>Run Time :</Label>
              <Col sm={10} lg={8}>
                <Input type="text" name="runtime" id="runtime" placeholder="Run Time" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="viewRating" sm={2} lg={4}>View Rating :</Label>
              <Col sm={10} lg={8}>
                <Input type="text" name="viewRating" id="viewRating" placeholder="View Rating" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="viewerVotes" sm={2} lg={4}>Viewer Votes :</Label>
              <Col sm={10} lg={8}>
                <Input type="text" name="viewerVotes" id="viewerVotes" placeholder="Viewer Votes" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="imdbId" sm={2} lg={4}>IMDB Id :</Label>
              <Col sm={10} lg={8}>
                <Input type="imdbId" name="imdbId" id="imdbId" placeholder="imdbId" />
              </Col>
            </FormGroup>


            <FormGroup row>
              <Label for="language" sm={2} lg={4}>Language : </Label>
              <Col sm={10} lg={8}>
                <Input type="text" name="language" id="language" placeholder="Language" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="mpaaRating" sm={2} lg={4}>MPAA Rating : </Label>
              <Col sm={10} lg={8}>
                <Input type="text" name="mpaaRating" id="mpaaRating" placeholder="MPAA Rating" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 2 }} lg={{ size: 8, offset: 4 }}>
                <Button className="btn-update" >
                  Update
              </Button>
                <Button
                  onClick={handleClose}
                >
                  Close
              </Button>
              </Col>
            </FormGroup>
        </Form>


      </section>
    </div>
      );
    };
    
export default Modal;