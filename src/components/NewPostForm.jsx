import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import axios from 'axios';
import Modal from 'react-modal';


function NewPostForm({ setPost, beach, setPostModal, postModal }) {


    const [user, setUser] = useState()
    const [body, setBody] = useState()
    const [image, setImage] = useState()



    async function newPost() {
        axios.post('https://shred-live.herokuapp.com/post/', {
            user: user,
            body: body,
            image: image,
            beach: beach.id,
        })
        .then((res) => {
            axios.get('https://shred-live.herokuapp.com/post/').then(res => {
                setPost(res.data)
            })
        })
        closeModal()
    }

    function closeModal() {
        setPostModal(false)
    }


    const storeUser = (e) => {
        setUser(e.target.value)
    }

    const storeBody = (e) => {
        setBody(e.target.value)
    }

    const storeImage = (e) => {
        setImage(e.target.value)
    }

    const taskModalStyle = {
        content: {
            top: '45%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          },
      }



    return (
        <div>
            <Modal style={taskModalStyle} isOpen={postModal} ariaHideApp={false}>
                <h3 className='modal-title'>Create Update</h3>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control className='username-form' type="user" placeholder="Enter username" onChange={storeUser}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>Update:</Form.Label>
                    <Form.Control className='body-form' placeholder="Update" onChange={storeBody}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control className='image-form' placeholder="Image URL" onChange={storeImage}/>
                </Form.Group>
                <button className='post-edit-button' onClick={() => newPost()}>CREATE</button>
                <button className='post-delete-button' onClick={() => closeModal()}>CANCEL</button>
            </Modal>
        </div>
    );
}

export default NewPostForm;