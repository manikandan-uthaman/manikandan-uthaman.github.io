$(document).ready(function () {
  getPostsHtml = function () {
    var posts = getPosts(); // from post-service.js
    var postHtml = "";
    posts.forEach(post => {
      var post = `
          <div class="post-preview">
                          <a href="./posts/post.html?id=${post.id}">
                              <h2 class="post-title">
                                  ${post.title}
                              </h2>
                              <h3 class="post-subtitle">
                              ${post.subTitle}
                              </h3>
                          </a>
                          <p class="post-meta">Posted by <a href="#">Java Tips</a> on ${post.postedOn}</p>
                      </div>
                      <hr>
          `;
      postHtml += post;
    });
    $(".post-row").append(postHtml);
  };

  getPostsHtml();
});
