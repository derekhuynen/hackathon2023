import { Box, Button, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectProjectDraftStore } from "store/slice/projectDraftSlice";
import { clear, setProject } from "store/slice/projectFormSlice";
import { Project, selectProjectStore } from "store/slice/projectSlice";

const ProjectList = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { projects } = useAppSelector(selectProjectStore)
    const { projects: drafts } = useAppSelector(selectProjectDraftStore)


    const handleProjectClick = (project: Project) => {
        //navigate to project page
        navigate(`/project/${project.id}`)

    }

    const handleDraftProjectClick = (project: Project) => {
        dispatch(setProject({
            id: project.id,
            name: project.name,
            category: project.category,
            description: project.description,
        }))
    }

    const handleStartNewProjectClick = () => {
        dispatch(clear())
    }

    return (
        <Box sx={{
            width: "300px",
            height: "100%",
            gap: 2,
            display: "flex",
            flexDirection: "column",
        }}>
            <Box>
                <Button variant="contained" onClick={handleStartNewProjectClick}>Start New Projects</Button>
            </Box>

            <Box>
                <Typography variant="h6">Your Projects:</Typography>
                <List disablePadding>
                    {projects.map((project) => (
                        <ListItemButton key={project.id} sx={{ py: 0 }} onClick={() => handleProjectClick(project)}>
                            <ListItemText primary={project.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>

            <Box>
                <Typography variant="h6">Your Drafts</Typography>
                <List disablePadding>
                    {drafts.map((draft) => (
                        <ListItemButton key={draft.id} sx={{ py: 0 }} onClick={() => handleDraftProjectClick(draft)}>
                            <ListItemText primary={draft.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>

        </Box>
    );
}

export default ProjectList;


