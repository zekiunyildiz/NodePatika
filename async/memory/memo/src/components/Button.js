import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
    const {theme, setTheme} = useContext(ThemeContext)
    return (

        <div>
            <h1>Active Theme: {theme} </h1>
            <br/>
            <br/>
            <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
    )
}

export default Button
