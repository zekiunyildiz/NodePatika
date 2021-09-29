const posts = [
    { name: "Post1", author: "Zeki" },
    { name: "Post2", author: "Zeki" },
    { name: "Post3", author: "Zeki" },
  ];
  
  const listPosts = () => {
    posts.map((post) => {
      console.log(post.name);
    });
  };
  
  const addPost = (newpost) => {
    const promise1 = new Promise((resolve, reject) => {
      posts.push(newpost);
      resolve(posts);
    });
    return promise1;
  };
  
/*   addPost({ name: "Post5", author: "Zeki" })
    .then(() => {
      console.log("Yeni Liste");
      listPosts();
    })
    .catch((error) => {
      console.log(error);
    });
   */

async function showPost() {
    await addPost({name: "Post4", author:"Zeki"})
    listPosts();
}

showPost()