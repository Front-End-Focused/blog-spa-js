import API from '../api';
import PostPage from '../components/PostPage';


let props = '';
let currentId = ''
async function mountPostPage(postId) {
  const PostPageComponent = new PostPage();
  if (!props || currentId != postId) {
    currentId = postId
    try {
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
    } catch (error) {
      console.log(error);
    }
  }
  
  PostPageComponent.initialize(props);

}

export default mountPostPage;
