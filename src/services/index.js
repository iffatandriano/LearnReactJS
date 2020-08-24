import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

//DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);

//PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

//GET
const getNewsBlog = Get('posts?_sort=id&_order=desc', false);
const getComments = Get('comments', true);

//POST
const postNewsBlog = (data) => Post('posts', false, data);

const API = {
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog,
    getNewsBlog,
    getComments
}

export default API;