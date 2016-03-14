module.exports = function(app, route, express) {

  //search blog posts
  app.get('/posts', function(req, res){
    app.models.Post.find(res.body.search, function(err, posts){
      if (err) throw err;
      res.json(posts);
    });
  });

  //get post with comments
  app.get('/posts/:post_id', function(req, res){
    app.models.Post.find(res.body.params.post_id, function(err, post){
      if (err) throw err;
      res.json(post);
    });
  });

  return function(req, res, next) {
    next();
  };
};
