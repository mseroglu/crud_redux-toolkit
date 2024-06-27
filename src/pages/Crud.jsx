import { Tab } from 'bootstrap';
import { Container, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import FormModal from '../components/FormModal';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { delTask, editTask } from '../redux/slices/crudSlice';


const Crud = () => {
  const { isDarkTheme } = useSelector(store => store.counterReducer)
  const { tasks } = useSelector(store => store.crudReducer)
  console.log("tasks ", tasks)
  const [isOpen, setIsOpen] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const dispatch = useDispatch()

  return (
    <div>
      <Container>
        <Stack className='align-items-center my-5'>
          <Button onClick={() => setIsOpen(!isOpen)} variant="primary">Yeni Görev Ekle</Button>
        </Stack>

        <Table responsive bordered hover striped variant={!isDarkTheme && "dark"}>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>#</th>
              <th style={{ textAlign: "center" }}>Görev</th>
              <th style={{ textAlign: "center" }}>Yazan</th>
              <th style={{ textAlign: "center" }}>Atanan</th>
              <th style={{ textAlign: "center" }}>Tarih</th>
              <th style={{ width: "100px", textAlign: "center" }}>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((item, i = 1) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.assigned_to}</td>
                <td>{new Date(item.end_date).toLocaleDateString()}</td>
                <td className='d-flex gap-2'>
                  <Stack className='flex-row gap-1'>
                    <Button className='d-flex align-items-center justify-content-center p-1' style={{ width: "40px" }}
                      onClick={() => dispatch(delTask(item.id))} variant='light' >
                      <MdDelete className='text-danger fs-4' />
                    </Button>

                    <Button className='d-flex align-items-center justify-content-center p-1' style={{ width: "40px" }}
                      onClick={() => {
                        setIsOpen(true); 
                        setEditItem(item)}} 
                        
                        variant='light' >
                      <FaRegEdit className='text-info fs-5 cursor-pointer' />
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      </Container>

      {isOpen && <FormModal editItem={editItem} isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          setEditItem(null)
        }}

      />}

    </div>
  )
}

export default Crud
