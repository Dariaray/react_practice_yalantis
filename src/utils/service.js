import { mockData } from '../mock/index.js';

export const fetchMockData = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(mockData);
            // reject('Error');
        }, 2000)
    })
}