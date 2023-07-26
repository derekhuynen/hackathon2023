
import { useAppDispatch } from "../store/hooks";
import { IconButton } from "@mui/material";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { openModal } from "../store/slice/modalSlice";

const LoginIconButton = () => {
    const dispatch = useAppDispatch();

    const handleOnClick = () => {
        dispatch(openModal({ title: "Login", content: <div>hi</div> }))
    }

    return (
        <IconButton aria-label="login" onClick={handleOnClick}>
            <VpnKeyIcon />
        </IconButton>
    )
}

export default LoginIconButton;