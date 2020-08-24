import axios from 'axios';
import { onlineRoot, rootPath } from './Config';

const Get = (path, root) => (data) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? onlineRoot : rootPath}/${path}`)
            .then((rest) => {
                resolve(rest.data);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default Get;