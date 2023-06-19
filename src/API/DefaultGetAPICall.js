import axios from 'axios';

export const DefaultGetAPICall = async (APIName, APIParams) => {
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NzEyIiwicm9sZSI6IjIiLCJuYmYiOjE2ODYwNDM5ODQsImV4cCI6MTY4ODYzNTk4NCwiaWF0IjoxNjg2MDQzOTg0fQ.zkOOcjn6aCWt0zIgvOE8cgs2FSjWqscW2XqoWTBWo9w';
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