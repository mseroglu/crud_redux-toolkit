import { useDispatch, useSelector } from "react-redux"
import { arttir, azalt, sifirla } from "../redux/slices/counterSlice"
import { useEffect } from "react"


const Counter = () => {
    const { count, isDarkTheme } = useSelector((store) => store.counterReducer)
    const dispatch = useDispatch()

    useEffect(() => { }, [count])
    
    return (
        <div className="vh-100 w-full d-flex align-items-center justify-content-center ">
            <div className="d-flex gap-3 align-items-center">
                <button className={isDarkTheme? "btn btn-light": "btn btn-dark"} onClick={() => dispatch(azalt())}>Azalt</button>
                <span className="bg-warning text-dark py-2 px-3 rounded">{count}</span>
                <button className={isDarkTheme? "btn btn-light": "btn btn-dark"} onClick={() => dispatch(arttir())}>Arttır</button>
                <button className={isDarkTheme? "btn btn-light": "btn btn-dark"} onClick={() => dispatch(sifirla(44))}>Sıfırla</button>
            </div>
        </div>
    )
}

export default Counter
