import axios from 'axios';

export const DefaultPostAPICall = async (APIName, postObject) => {
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NzEyIiwicm9sZSI6IjIiLCJuYmYiOjE2ODMxOTg4NzYsImV4cCI6MTY4NTc5MDg3NiwiaWF0IjoxNjgzMTk4ODc2fQ.jqGqsz8DNQmob5QTN9b56CM9y36VXhetSuvCxNex-bs';
    try {
    const response = await axios.post(`https://api.naghshealmas.com${APIName}`,postObject, {
            headers: {
            Authorization: `Bearer ${bearerToken}`
        }
        });
    return response.data.messageItems[0].data;
} catch (error) {
    console.error(error);
    return null;
}
};