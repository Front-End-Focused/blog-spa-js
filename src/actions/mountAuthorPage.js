import API from '../api';
import AuthorPage from '../components/AuthorPage';


async function mountAuthorPage(userId) {
  try {
    const data = await API.users.getById(userId);
    const AuthorPageComponent = new AuthorPage();
    const posts = await API.posts.getByUserId(userId);
    const photos = await API.albums.getPhotosById();
    const {title, url} = photos[0]
    const props = {
      ...data,
      posts,
      photos: {
        title,
        url
      }
    };
    AuthorPageComponent.initialize(props);
  } catch (error) {
    console.log(error);
  }
}

export default mountAuthorPage;
