import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"


const NavBar = () => {
    const naviagate = useNavigate()

    const handleLogoClick = () => {
        if (window.location.pathname !== "/") naviagate("/")
    }

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 2
        }}>
            <Typography variant="h4" onClick={() => handleLogoClick()} sx={{
                cursor: "pointer",
            }}>Logo</Typography>
        </Box>
    )
}

export default NavBar