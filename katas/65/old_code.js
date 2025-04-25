// TODO: Refactor callback hell
function getUserData(userId, callback) {
    db.connect(function(err) {
        if (err) {
            callback(err);
            return;
        }
        db.query('SELECT * FROM users WHERE id = ?', [userId], function(err, user) {
            if (err) {
                callback(err);
                return;
            }
            db.query('SELECT * FROM posts WHERE user_id = ?', [userId], function(err, posts) {
                if (err) {
                    callback(err);
                    return;
                }
                db.query('SELECT * FROM comments WHERE user_id = ?', [userId], function(err, comments) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    callback(null, {
                        user: user,
                        posts: posts,
                        comments: comments
                    });
                });
            });
        });
    });
}

// Old console.log debugging
console.log('Debug 1:', userId);
console.log('Debug 2:', user);
console.log('Debug 3:', posts);

// Inconsistent function declarations
function processUser(data) {
    // ...
}
var validateUser = function(data) {
    // ...
};
const updateUser = (data) => {
    // ...
}; 