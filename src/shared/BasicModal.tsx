import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { closeModal, selectModal } from '../store/slice/modalSlice';


const BasicModal = () => {
    const dispatch = useAppDispatch();
    const { isOpen, title, content, } = useAppSelector(selectModal)

    const handleClose = () => {
        dispatch(closeModal())
    }

    return (
        <Dialog
            fullWidth
            maxWidth='sm'
            open={isOpen}
            disableEnforceFocus={true}
            disableAutoFocus={true}
            onClose={handleClose}
        >
            <DialogTitle variant="h6" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                {title}
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default BasicModal;


