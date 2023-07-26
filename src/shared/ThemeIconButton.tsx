import { selectConfig, setTheme } from "../store/slice/configSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IconButton } from "@mui/material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const ThemeIconButton = () => {
    const { theme } = useAppSelector(selectConfig);
    const dispatch = useAppDispatch();

    const handleOnClick = () => {
        dispatch(setTheme(theme === "LIGHT" ? "DARK" : "LIGHT"));
    }

    return (
        <IconButton aria-label="change theme mode" onClick={handleOnClick}>
            <LightbulbIcon />
        </IconButton>
    )
}

export default ThemeIconButton;