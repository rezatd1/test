import axios from 'axios';

export const DefaultPostAPICall = async (APIName, postObject) => {
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NzEyIiwicm9sZSI6IjIiLCJuYmYiOjE2ODY0NjMyNDksImV4cCI6MTY4OTA1NTI0OSwiaWF0IjoxNjg2NDYzMjQ5fQ.ZEl9SPrj7pC27-kp17RRVRjjCYePICCezFI50kELzzE';
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