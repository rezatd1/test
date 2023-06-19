import axios from 'axios';

export const DefaultGetAPICall = async (APIName, APIParams) => {
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NzEyIiwicm9sZSI6IjIiLCJuYmYiOjE2ODMxOTg4NzYsImV4cCI6MTY4NTc5MDg3NiwiaWF0IjoxNjgzMTk4ODc2fQ.jqGqsz8DNQmob5QTN9b56CM9y36VXhetSuvCxNex-bs';
    try {
        const response = await axios.get(`https://api.naghshealmas.com${APIName}&${APIParams}`, {
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