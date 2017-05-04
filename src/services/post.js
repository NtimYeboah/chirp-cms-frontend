/**
 * Created by ntimobedyeboah on 4/17/17.
 */
import Api from './api';

class Post {
    static save(data) {
        return Api.save('/api/posts', data)
            .then(res => res.data.post)
            .catch(err => err);
    }

    static getAll() {
        return Api.getAll('/api/posts')
            .then(res => {
                if (res.status === 200) {
                    return res.data.posts
                }
            })
            .catch(err => err);
    }

    static getOne(cuid) {
        return Api.get(`/api/posts/${cuid}`)
            .then(res => res.data.post)
            .catch(err => err)
    }
}

export default Post;