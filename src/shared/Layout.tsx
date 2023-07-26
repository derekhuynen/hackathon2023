import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ThemeIconButton from "./ThemeIconButton";
import BasicModal from "./BasicModal";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <Grid container sx={{ minHeight: "100vh" }}>
            <Grid item xs={12}>
                {children}
            </Grid>

            <Box style={{ position: "absolute", top: 24, right: 24 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "nowrap", flexDirection: "row", gap: 1 }}>
                    <ThemeIconButton />
                </Box>
            </Box>

            <BasicModal />
        </Grid >
    );
}