import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { addDraftProject, updateDraftProjectById } from 'store/slice/projectDraftSlice';

import { clear, selectProjectForm, setCategory, setDescription, setName } from 'store/slice/projectFormSlice';
import { addProject } from 'store/slice/projectSlice';


export type ProjectFormValues = {
    name: string;
    category: string | undefined;
    description: string;
};

const ProjectForm = () => {
    const dispatch = useAppDispatch();
    const { id, name, category, description } = useAppSelector(selectProjectForm)
    const { register, handleSubmit, formState: { errors } } = useForm<ProjectFormValues>({
        defaultValues: {
            name,
            category,
            description
        }
    });

    const onSubmit = handleSubmit((data) => {
        if (id) {
            dispatch(updateDraftProjectById({
                id,
                name: data.name,
                category: data.category || "",
                description: data.description,
            }))
        } else {
            dispatch(addDraftProject({
                id: Date.now().toString(),
                name: data.name,
                category: data.category || "",
                description: data.description,
            }))
        }
    });

    const handleStartAiProcess = () => {
        dispatch(addProject({
            id: Date.now().toString(),
            name,
            category,
            description,
        }))
        dispatch(clear())
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1
                        }}>
                            <Typography variant="h6">Your Project Name</Typography>
                            <TextField
                                {...register("name")}
                                value={name}
                                onChange={(e) => dispatch(setName(e.target.value))}
                                error={Boolean(errors?.name)}
                                helperText={errors.name?.message}
                                fullWidth
                                size="small"
                                margin="dense"
                                variant="outlined"
                                label="Name"
                            />
                        </Box>

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1
                        }}>
                            <Typography variant="h6">USPTO Category Code</Typography>
                            <TextField
                                {...register("category")}
                                value={category}
                                onChange={(e) => dispatch(setCategory(e.target.value))}
                                error={Boolean(errors?.category)}
                                helperText={errors.category?.message}
                                fullWidth
                                size="small"
                                margin="dense"
                                variant="outlined"
                                label="Category"
                            />
                        </Box>
                    </Box>

                    <Box sx={{
                        width: "100%",
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <Typography variant="h6">Enter The Idea</Typography>
                        <Typography variant="body2">Enter a description of your idea. Ideally between 200 - 500 words to start.</Typography>
                        <TextField
                            {...register("description")}
                            value={description}
                            onChange={(e) => dispatch(setDescription(e.target.value))}
                            error={Boolean(errors?.description)}
                            helperText={errors.description?.message}
                            multiline
                            fullWidth
                            minRows={8}
                            maxRows={20}
                            size="small"
                            margin="dense"
                            variant="outlined"
                            label="Description"
                        />
                    </Box>
                    <Box sx={{
                        width: "100%",
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 2,
                            alignItems: "center",
                        }}>

                            <Typography variant="h6">Add Drawings / Illustrations / Schematics</Typography>
                            <Button variant="outlined">Add Files</Button>
                        </Box>
                        <Typography variant="body2">Upload formats: .pdf, .png, .jpg</Typography>

                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2
                    }}>
                        <Button type="submit" variant="outlined">Save Draft</Button>
                        <Button variant="contained" onClick={() => handleStartAiProcess()} sx={{
                            flexGrow: 1
                        }}>Begin The Ai Patent Building Process</Button>
                    </Box>
                </Box>
            </form>
        </>
    )
}

export default ProjectForm


