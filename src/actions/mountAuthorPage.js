import API from '../api';
import AuthorPage from '../components/AuthorPage';

const autorsRepo = {};

async function mountAuthorPage(userId) {
  try {
    const AuthorPageComponent = new AuthorPage();
    let props;
    if (autorsRepo[userId]) {
      props = autorsRepo[userId]
    } else {
      const data = await API.users.getById(userId);
      const posts = await API.posts.getByUserId(userId);
      const photo = await API.albums.getPhotosById();
      const { title, url } = photo[0];
      props = {
        ...data,
        photo: {
          title,
          url,
        },
        posts,
      };
      autorsRepo[userId] = props;
    }
    AuthorPageComponent.initialize(props);

  } catch (error) {
    console.log(error);
  }
}

export default mountAuthorPage;
