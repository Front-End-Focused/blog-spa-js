import Component from './Component';
import { parseAndRender } from '../utils';
import wrapperPost from './WrapperPost';

export default class PostsList extends Component {
 fetchPosts() {
    const { data } = this.state;
    return data
      .map(({ title, body, id }) =>
        wrapperPost(title, body, id))
      .join('');
  }

  render() {
    return parseAndRender(this.rootElement, this.fetchPosts());
  }
}


/// DRY убрать посты, которые у автора и на первой странице
/// many requests .... нужно задать проверку, если у нас есть данные в стейте от предыдущего запроса, то возьми, если нет то делай запрос