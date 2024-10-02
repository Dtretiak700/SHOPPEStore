import { useTheme } from "../processes/contextTheme";
import "./switcher.css";

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    const handleClick = () => {
        if(theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return(
        <input  onClick={handleClick} type="checkbox" className="theme-checkbox"></input>
    )
}