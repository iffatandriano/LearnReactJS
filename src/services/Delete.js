import axios from 'axios';
import { onlineRoot, rootPath } from './Config';

const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? onlineRoot : rootPath}/${path}`)
            .then((rest) => {
                resolve(rest.data);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default Delete;