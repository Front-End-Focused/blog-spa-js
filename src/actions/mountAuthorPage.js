import API from '../api';
import AuthorPage from '../components/AuthorPage';

async function mountAuthorPage(userId) {
  try {
    const data = await API.users.getById(userId);
    const AuthorPageComponent = new AuthorPage();
    const posts = await API.posts.getByUserId(userId);
    const props = {
      ...data,
      posts,
    };
    AuthorPageComponent.initialize(props);
  } catch (error) {
    console.log(error);
  }
}

export default mountAuthorPage;
