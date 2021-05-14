const express = require('express');
const posts = express.Router();
module.exports = posts;

const generateCode = require('../../service/codeGenerator.js');
const groupsCollection = require('../../database/database.js')('groups');
const postsCollection = require('../../database/database.js')('posts');
const permissions = require('../../service/permissions.js');
const Text = require('../../service/responseMessages.js');
const { sendResponse } = require('../../service/requestService.js');


async function generateBasicPost(groupId, authorId, type='default') {
    let posts = await postsCollection.find({id: groupId}, true);
    
    return {
        id: generateCode(posts, 'id', 'post_id'),
        groupId: groupId,
        author: authorId,
        createdAt: Date.now(),
        type: type,
        comments: []
    };
}


posts.post('/:groupId/default', async (req, res) => {
    let senderId = res.locals.userId;
    let { groupId } = req.params;
    let { title, description } = req.body;

    let group = await groupsCollection.find({id: groupId});
    if (!group) return sendResponse(res, 400, Text.error.findGroupById);
    
    let author = group.users.filter(u => u.id === senderId)[0];
    if (!author) {
        return sendResponse(res, 400, Text.error.notGroupMember);
    } 
    else if ( !permissions[author.role].includes('createPost') ) {
        return sendResponse(res, 400, Text.error.permissionDenied);
    }
    else if (!title) {
        return sendResponse(res, 400, Text.error.emptyPostTitle);
    } else {
        const post = await generateBasicPost(groupId, senderId, 'default');
        post.title = title;
        post.description = description || '';

        await postsCollection.insertOne(post);
        
        return sendResponse(res, 200, Text.success.postCreated);
    }
});