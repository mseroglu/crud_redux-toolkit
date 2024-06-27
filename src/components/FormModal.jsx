import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/slices/crudSlice';


const FormModal = ({ isOpen, handleClose, editItem }) => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target)

        const taskData = Object.fromEntries(formData.entries())

        editItem 
        ? dispatch(editTask({...taskData, id:editItem.id}))
        : dispatch(addTask(taskData))       
        handleClose()

        
    }

    return (
        <div>

            <Modal centered show={isOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editItem ? "Görev Düzenle ": "Yeni Görev"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Görev</Form.Label>
                            <Form.Control name="title" type="text" autoFocus required defaultValue={editItem?.title} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput2" >
                            <Form.Label>Yazan Kişi</Form.Label>
                            <Form.Control name="author" type="text" required  defaultValue={editItem?.author}/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput3">
                            <Form.Label>Atanan Kişi</Form.Label>
                            <Form.Control name='assigned_to' type="text" required  defaultValue={editItem?.assigned_to}/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput4">
                            <Form.Label>Tarih</Form.Label>
                            <Form.Control name='end_date' type="date" required  defaultValue={editItem?.end_date}/>
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Vazgeç
                            </Button>
                            <Button type='submit' variant="primary" >
                                Kaydet
                            </Button>
                        </Modal.Footer>
                    </Form>

                </Modal.Body>

            </Modal>

        </div>
    )
}

export default FormModal
