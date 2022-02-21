const Post = require('../../models/Post');

module.exports = {
    Query: {
    async getPosts(){
        try{
            const pos = await Post.find();
            return pos;
        }catch (err){
            throw new Error(err);
        }
    }
}}