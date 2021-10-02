import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import axios from 'axios';
import Modal from 'react-modal';


function EditPostForm({ id, userPass, bodyPass, imagePass, setPost, beach, setEditModal, editModal }) {
    

    const [user, setUser] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")

    // console.log('out id',id)
    // console.log('out user',user)
    // console.log('out body',body)
    // console.log('out image',image)
    // console.log('out beachid',beach.id)

    async function editPost(id) {

        // if (!body) {
        //     setUser(userPass)
        // }
        // if (!body) {
        //     setUser(bodyPass)
        // }
        // if (!image) {
        //     setUser(imagePass)
        // }
        // console.log(id)
        // console.log(user)
        // console.log(body)
        // console.log(image)
        // console.log(beach.id)
        // ON CHANGE IS CAUSING NO UPDATE IF ONLY TARGETTING ONE VALUE
  
        axios.put(`https://shred-live.herokuapp.com/post/${id}`, {
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
                    <Form.Control type="user" defaultValue={userPass} onChange={storeUser}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>Update</Form.Label>
                    <Form.Control defaultValue={bodyPass} onChange={storeBody}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Image</Form.Label>
                    <Form.Control defaultValue={imagePass} onChange={storeImage}/>
                </Form.Group>
                <button onClick={() => editPost(id)}>SAVE</button>
                <button onClick={() => closeEditModal()}>CANCEL</button>
            </Modal>
        </div>
    );
}

export default EditPostForm;