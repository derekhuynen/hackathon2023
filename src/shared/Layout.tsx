import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ThemeIconButton from "./ThemeIconButton";
import BasicModal from "./BasicModal";
import NavBar from "pages/navBar/NavBar";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        }}>
            <NavBar />
            <Box sx={{
                flexGrow: 1,
            }}>
                {children}
            </Box>

            {/* <Box style={{ position: "absolute", top: 24, right: 24 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "nowrap", flexDirection: "row", gap: 1 }}>
                    <ThemeIconButton />
                </Box>
            </Box> */}

            <BasicModal />
        </Box >
    );
}