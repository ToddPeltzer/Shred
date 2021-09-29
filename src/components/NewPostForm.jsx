import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import axios from 'axios';

function NewPostModal({ setPost }) {


    const [beach, setBeach] = useState()
    const [user, setUser] = useState()
    const [body, setBody] = useState()
    const [date, setDate] = useState()
    const [image, setImage] = useState()

    const [postModal, setPostModal] = useState(false)


    const newPost = () => {
        axios.post('http://localhost:8000/post/', {
            user,
            body,
            date,
            image,
            beach,
        })
            .then((res) => {
                axios.get('http://localhost:8000/post/').then(res => {
                    setPost(res)
                    closePostModal()
                })
            })
    }

    function closePostModal() {
        setPostModal(false)
    }


    const storeUser = (e) => {
        setUser(e.target.value)
    }

    const storeBody = (e) => {
        setBody(e.target.value)
    }

    const storeDate = (e) => {
        setDate(e.target.value)
    }

    const storeImage = (e) => {
        setImage(e.target.value)
    }

    const storeBeach = (e) => {
        setBeach(e.target.value)
    }



    return (
        <div>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="user" placeholder="Enter username" onChange={storeUser}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupFirstName">
                        <Form.Label>Update</Form.Label>
                        <Form.Control placeholder="Update" onChange={storeBody}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupMiddleName">
                        <Form.Label>Date</Form.Label>
                        <Form.Control placeholder="Date" onChange={storeDate}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupLastName">
                        <Form.Label>Image</Form.Label>
                        <Form.Control placeholder="Image URL" onChange={storeImage}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>Beach</Form.Label>
                        <Form.Control placeholder="Beach" onChange={storeBeach}/>
                    </Form.Group>
                    <button onClick={() => newPost}>CREATE</button>
        </div>
    );
}

export default NewPostModal;