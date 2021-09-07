import Component from './Component';
import { parseAndRender } from '../utils';

export default class PostsList extends Component {

  fetchPosts() {
    const { data } = this.state;

    return data
      .map(({ title, body, id }) =>
        this.createMarkupTemplatePosts({
          title,
          body,
          id,
        })
      )
      .join('');
  }

  render() {
    return parseAndRender(this.rootElement, this.fetchPosts());
  }
}
