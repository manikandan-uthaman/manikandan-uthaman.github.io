$(document).ready(function () {
  const totalCount = getPostsCount();
  getPostsHtml = function () {
    var htmlContent = "";
    var posts = getRecentPosts(10); // from post-service.js
    var rows = Math.ceil(posts.length / 3);
    for (let index = 0; index < rows; index++) {
      htmlContent += `<div class="row">`;
      for (
        let col = index * 3;
        col < index * 3 + 3 && col < posts.length;
        col++
      ) {
        htmlContent += `
        <div class="col-md-4 post-col">
        <div class="thumbnail">
            <img src="./posts/img/${posts[col].bannerImg}">
            <div class="caption" style="text-align: left;">
            <a href="./posts/post.html?id=${posts[col].id}">
                <h3>${posts[col].title}</h3>
                </a>
                <p style="margin: 0px;">${posts[col].subTitle}</p>
            </div>
        </div>
      </div>
        `;
      }
      htmlContent += `</div>`;
    }

    $(".post-container").append(htmlContent);
  };

  getPostsHtml();
});
