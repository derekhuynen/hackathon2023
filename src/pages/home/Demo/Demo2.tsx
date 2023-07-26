import { Box, Button } from "@mui/material";
import { useState } from "react";

const Demo2 = () => {
    const [title, setTitle] = useState("Home Page");

    const handleMoouseEnter = () => {
        setTitle("Hovered");
    }

    const handleMouseLeave = () => {
        setTitle("Home Page");
    }


    return (
        <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "white",

            }}>
                <Box>Test</Box>
                <Button variant={"contained"}
                    onMouseEnter={handleMoouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                        transition: "all 0.3s ease",
                        width: "inherit",
                        "&:hover": {

                        }
                    }}>{title}</Button>
            </Box>

        </Box>

    );
}

export default Demo2