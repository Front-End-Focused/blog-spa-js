import API from '../api';
import PostPage from '../components/PostPage';

const postsRepo = {};

async function mountPostPage(postId) {
  try {
    const PostPageComponent = new PostPage();
    let props;
    if (postsRepo[postId]) {
      props = postsRepo[postId];
    } else {
      const { userId, ...rest } = await API.posts.getById(postId);
      const { username, website, company } = await API.users.getById(userId);
      const comments = await API.comments.getByPostId(postId);
      props = {
        comments,
        author: {
          username,
          id: userId,
          website,
          companyName: company.name,
        },
        ...rest,
      };
      postsRepo[postId] = props;
    }
    PostPageComponent.initialize(props);
  } catch (error) {
    console.log(error);
  }
}

export default mountPostPage;
