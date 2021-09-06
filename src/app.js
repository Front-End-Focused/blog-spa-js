import mountHomePage from './actions/mountHomePage';
import mountPostPage from './actions/mountPostPage';
import mountAuthorPage from './actions/mountAuthorPage';

const routers = {
  post: mountPostPage,
  author: mountAuthorPage,
};

document.addEventListener('DOMContentLoaded', () => {
  mountHomePage();
  handleRouteChange();
});

window.addEventListener('hashchange', handleRouteChange);

function handleRouteChange() {
  window.scrollTo(0, 0);
  const { hash } = window.location;
  const path = hash.substring(1);
  const [route, id] = path.split('/');

  if (routers[route]) {
    routers[route](id);
  }
}
