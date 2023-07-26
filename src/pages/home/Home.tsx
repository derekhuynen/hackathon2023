import { Box, Button } from "@mui/material";
import ProjectList from "./ProjetList";
import ProjectForm from "./ProjectForm";



const Home = () => {

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            padding: "24px",
        }}>
            <ProjectList />

            <Box sx={{
                flexGrow: 1,
            }}>

                <ProjectForm />
            </Box>

        </Box>


    );
}

export default Home;