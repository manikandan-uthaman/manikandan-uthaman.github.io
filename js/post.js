$(document).ready(function () {
  getPostHtml = function () {
    var index = window.location.href.indexOf("?");
    if (index < 0) {
      displayNotFound();
      return;
    }
    var url = window.location.href.slice(index + 1).split("&");
    var postId;
    for (var i = 0; i < url.length; i++) {
      var urlparam = url[i].split("=");
      if (urlparam[0] == "id") {
        postId = urlparam[1];
      }
    }
    if (!postId) {
      displayNotFound();
      return;
    }

    var selectedPost = getPost(postId);

    if (!selectedPost) {
      displayNotFound();
      return;
    }

    var post = `
    <h1>${selectedPost.title}</h1>
    <h2 class="subheading">${selectedPost.subTitle}</h2>
    <span class="meta">Posted by <a href="../index.html">Java Tips</a> on ${selectedPost.postedOn}</span>
    `;
    $(".intro-header").attr(
      "style",
      "background-image: url('img/" + selectedPost.bannerImg + "')"
    );
    $(".post-heading").append(post);
    $(".post-content").append(selectedPost.content);
  };

  displayNotFound = function () {
    $(".intro-header").attr(
      "style",
      "background-image: url('../img/not-found-bg.jpg')"
    );
    $(".post-heading").append("<h1>Sorry, the request post is not found</h1>");
  };

  getPostHtml();
});
