import API from '../api';
import PostPage from '../components/PostPage';

async function mountPostPage(postId) {
  try {
    const { userId, ...rest } = await API.posts.getById(postId);
    const PostPageComponent = new PostPage();
    const { username, website, company } = await API.users.getById(userId);
    const comments = await API.comments.getByPostId(postId);
    const props = {
      comments,
      author: {
        username,
        id: userId,
        website,
        companyName: company.name,
      },
      ...rest,
    };
    PostPageComponent.initialize(props);
  } catch (error) {
    console.log(error);
  }
}

export default mountPostPage;
