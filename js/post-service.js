var posts = [
  {
    id: "21",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "Dec 05, 2021",
  },
  {
    id: "2",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "Nov 05, 2021",
  },
  {
    id: "3",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "Oct 05, 2021",
  },
  {
    id: "4",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "Sep 05, 2021",
  },
  {
    id: "5",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "Aug 05, 2021",
  },
  {
    id: "6",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "Jul 05, 2021",
  },
  {
    id: "7",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "Jun 05, 2021",
  },
  {
    id: "8",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "May 05, 2021",
  },
  {
    id: "9",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "April 05, 2021",
  },
  {
    id: "10",
    title: "For Vs Streams",
    subTitle: "Are streams just a fancy for loop?",
    bannerImg: "post1.png",
    content:
      '<p>Ever since java 8 was launched, our view towards some of the concepts have changed drastically. One such this looping. With streams, looping through any set of data has become easier and fun even. But is it really worth it? What are the advantages we get by replacing good old for loops with streams? Let see in detail the various things to be considered while switching from for loop to streams.</p><h2 class="section-heading">Performance</h2><p>As a developer, taking care of</p>',
    postedOn: "Mar 05, 2021",
  },
];

getRecentPosts = function (count) {
  var copiedPosts = posts;
  copiedPosts.sort(function (a, b) {
    return new Date(b.postedOn) - new Date(a.postedOn);
  });
  return copiedPosts.slice(0, count);
};

getPosts = function () {
  var copiedPosts = posts;
  copiedPosts.sort(function (a, b) {
    return new Date(b.postedOn) - new Date(a.postedOn);
  });
  return copiedPosts;
};

getPostsCount = function () {
  return posts.length;
};

getPost = function (postId) {
  var selectedPost = posts.filter(post => post.id === postId);
  if (selectedPost.length > 0) return selectedPost[0];

  return null;
};
