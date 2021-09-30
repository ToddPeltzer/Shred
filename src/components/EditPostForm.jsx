import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import axios from 'axios';
import Modal from 'react-modal';


function EditPostForm({ id, setPost, beach, setEditModal, editModal }) {


    const [date, setDate] = useState()
    const [user, setUser] = useState()
    const [body, setBody] = useState()
    const [image, setImage] = useState()

console.log('ID:', id)

    useEffect(() => {setDate('2021-09-28T06:58:00Z')}, [])

    async function editPost(id) {
        console.log('URL:', id)
        axios.put(`http://localhost:8000/post/${id}`, {
            user: user,
            body: body,
            date: date,
            image: image,
            beach: beach.id,
        })
        .then((res) => {
            axios.get('http://localhost:8000/post/').then(res => {
                setPost(res.data)
            })
        })
        closeEditModal()
    }

    function closeEditModal() {
        setEditModal(false)
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
            <Modal style={taskModalStyle} isOpen={editModal} ariaHideApp={false}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="user"  onChange={storeUser}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>Update</Form.Label>
                    <Form.Control  onChange={storeBody}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Image</Form.Label>
                    <Form.Control  onChange={storeImage}/>
                </Form.Group>
                <button onClick={() => editPost(id)}>SAVE</button>
                <button onClick={() => closeEditModal()}>CANCEL</button>
            </Modal>
        </div>
    );
}

export default EditPostForm;