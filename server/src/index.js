const express = require('express');
const router = express.Router();
module.exports = router;

const authorizedOnly = require('./service/authorizedOnly.js');


// Авторизация
router.use('/auth', require('./routes/auth/auth.js'));

// Группы
router.use('/groups', authorizedOnly, require('./routes/groups/index.js'));

// Посты
router.use('/posts', authorizedOnly, require('./routes/posts/index.js'));