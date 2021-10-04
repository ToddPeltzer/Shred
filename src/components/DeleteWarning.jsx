import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';


function EditPostForm({ setWarningModal, warningModal, setPost, deleteSpecificPost }) {
    


     const deletePost = async (id) => {
        const url = `https://shred-live.herokuapp.com/post/${id}`
        axios.delete(url)
        .then((res) => {
            axios.get('https://shred-live.herokuapp.com/post/').then(res => {
                setPost(res.data)
            })
        })
        closeWarningModal()
    }


    function closeWarningModal() {
        setWarningModal(false)
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
            <Modal style={taskModalStyle} isOpen={warningModal} ariaHideApp={false}>
                <h3 className='modal-title'>Delete Update</h3>
                {/* <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control className='username-form' type="user" defaultValue={userPass} onChange={storeUser}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>Update</Form.Label>
                    <Form.Control className='body-form' defaultValue={bodyPass} onChange={storeBody}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Image</Form.Label>
                    <Form.Control className='image-form' defaultValue={imagePass} onChange={storeImage}/>
                </Form.Group> */}
                <button className='post-edit-button' onClick={() => deletePost(deleteSpecificPost)}>DELETE</button>
                <button className='post-delete-button' onClick={() => closeWarningModal()}>CANCEL</button>
            </Modal>
        </div>
    );
}

export default EditPostForm;