import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


const Contact = () => {
    return (
        <div>

            <Container className='mt-5 d-lg-flex justify-content-between'>
                <div className='mt-5 mb-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d392972.7461368768!2d90.39811153461633!3d23.783574708071157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1680946705582!5m2!1sen!2sbd" width="500" height="450" ></iframe>
                </div>
                <div className='mt-5 border border-2 p-5 rounded-1 mb-5'>
                   
                <Form className='w-100 border-2 border-light '>
                    <Form.Group className='w-100' controlId="form.Name">
                        <Form.Label className='text-white'>Name</Form.Label>
                        <Form.Control className='' type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Label className='text-white py-2'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea">
                        <Form.Label className='text-white'>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <div className='mt-5'>
                        <Button >Hire Me</Button>
                    </div>
                </Form> 
                </div>
               
            </Container>




        </div >
    );
};

export default Contact;


// class SimpleForm extends Component {
//     render() {
//         return (
           
//         );
//     }

// }

// export default SimpleForm;