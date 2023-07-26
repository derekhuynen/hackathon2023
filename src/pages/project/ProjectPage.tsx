import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
    //get id from url
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        //fetch project by id
        console.log(id);
    }, [id])


    return (
        <div>
            Hello ID: {id}
        </div>
    );

}

export default ProjectPage;
