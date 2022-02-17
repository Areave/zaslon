import axios from 'axios';
// import '../assets/stub/getThreads.json';

const endPoint = '../assets/stub/';

const getApiServiceInstance = () => {

    const apiGetRequest = (route: string) => {
        return axios.get(endPoint + route)
    }

    const getProfileInfo = (id: number) => {
        return apiGetRequest('getProfileInfo' + 1 + '.json').then((data: any) => {
            return data.data;
        });
    }

    const getSections = () => {
        return apiGetRequest('getSections.json').then((data: any) => {
            return data.data;
        });
    }

    const getThreads = (id: number) => {
        return apiGetRequest('getThreads.json').then((data: any) => {
            return data.data.find((sectionObject: { sectionId: number }) => sectionObject.sectionId === id);
        });
    }

    const getThread = (id: number) => {
        return apiGetRequest('getThread' + 1 + '.json').then((data: any) => {
            return data.data;
        });
    }


    const getHelpSections = () => {
        return apiGetRequest('getHelpSections.json').then((data: any) => {
            return data.data;
        });
    }

    const getHelpThreads = (id: number) => {
        return apiGetRequest('getHelpThreads.json').then((data: any) => {
            return data.data.find((sectionObject: { sectionId: number }) => sectionObject.sectionId === id);
        });
    }

    const getHelpThread = (id: number) => {
        return apiGetRequest('getHelpThread' + 1 + '.json').then((data: any) => {
            return data.data;
        });
    }

    return {
        getProfileInfo,
        getSections,
        getThreads,
        getThread,
        getHelpSections,
        getHelpThreads,
        getHelpThread,
    }
}

export default getApiServiceInstance();