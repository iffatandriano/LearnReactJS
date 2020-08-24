import axios from 'axios';
import { onlineRoot, rootPath } from './Config';

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? onlineRoot : rootPath}/${path}`, data)
            .then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })

    return promise;
}

export default Post;