import API from '../api';
import PostsList from '../components/PostsList';

async function mountHomePage() {
  try {
    const data = await API.posts.getAll();
    const PostsListComponent = new PostsList();
    PostsListComponent.initialize({ data });
  } catch (error) {
    console.log(error);
  }
}

export default mountHomePage;
