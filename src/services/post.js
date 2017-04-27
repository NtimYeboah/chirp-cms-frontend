/**
 * Created by ntimobedyeboah on 4/17/17.
 */
import Api from './api';

class Post {
    static save(data) {
        return Api.save('http://localhost:9000/api/posts', data)
            .then(res => res.data.post)
            .catch(err => err);
    }

    static getAll() {
        return Api.getAll('http://localhost:9000/api/posts')
            .then(res => res.data.posts)
            .catch(err => err);
    }

    static getOne(cuid) {
        return Api.get(`http://localhost:9000/api/posts/${cuid}`)
            .then(res => res.data.post)
            .catch(err => err)
    }
}

export default Post;