import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { temaDegis } from "../redux/slices/counterSlice"
import Button from 'react-bootstrap/Button';


const Header = () => {
    const { isDarkTheme } = useSelector(store => store.counterReducer)
    const dispatch = useDispatch()


    return (
        <header className="py-4 border-bottom">
            <div className="container d-flex justify-content-between align-items-center">
                <h3>REDUX<span className="text-warning">TOOLKIT</span></h3>

                <nav className="d-flex gap-3 align-items-center">
                    <NavLink to="/" >Sayaç</NavLink>
                    <NavLink to="/crud" >Crud</NavLink>
                    {
                        isDarkTheme ? <Button onClick={() => dispatch(temaDegis())} variant="light">Açık Tema</Button>
                            : <Button onClick={() => dispatch(temaDegis())} variant="dark">Koyu Tema</Button>
                    }
                </nav>
            </div>

        </header>
    )
}

export default Header
