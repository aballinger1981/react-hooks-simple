import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    };

    useEffect(() => {
        fetchResource(resource);
        // useEffect gets called on every render.  The callback function only runs if the 'resource' prop has changed.  That's why 'resource' is needed in the below array.  Remember that 'resource' changes from 'posts' to 'todos' depending on what button is clicked.
        // eslint-disable-next-line
    }, [resource]);

    return resources;
};

export default useResources;