const POSTS = [];

function getCompose(getTitle, getContent) {
  if (getTitle) {
    const post = {
      title: getTitle,
      content: getContent,
    };
    POSTS.push(post);
  }
}

export { getCompose, POSTS };
