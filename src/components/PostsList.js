import Component from './Component';
import { parseAndRender } from '../utils';

export default class PostsList extends Component {
  createMarkupTemplate({ title, body, id }) {
    return `
        <article class="post" id="post-${id}">
            <h3 class="text-capitalize">${title}</h3>
            <div class="row">
                <p class="col-10 text-truncate">
                    ${body}
                </p>
            </div>
            <a href="#post/${id}" class="btn btn-dark">Read more &raquo;</a>
            <hr />
        </article>
        `;
  }

  fetchPosts() {
    const { data } = this.state;

    return data
      .map(({ title, body, id }) =>
        this.createMarkupTemplate({
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
