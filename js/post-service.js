var posts = [
  {
    id: "1",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "March 05, 2021",
  },
];

getPosts = function () {
  return posts;
};

getPost = function (postId) {
  var selectedPost = posts.filter(post => post.id === postId);
  if (selectedPost.length > 0) return selectedPost[0];

  return null;
};
