import Component from './Component';
import { CommentIcon, AvatarIcon } from './Icons';

export default class PostPage extends Component {
  renderCommentsSection() {
    const { comments } = this.state;
    if (!comments.length) return;

    const data = comments
      .map(
        ({ name, body, email, id }) =>
          `
            <div class="col-12">  
                <div class="row">
                    <div class="col-1">
                        ${CommentIcon}
                    </div>
                    <div class="col-11">
                            <div class="card mb-4" id="comment-${id}">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${email}</h6>
                                <p class="card-text">${body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
      )
      .join('');

    return `
        <section class="mt-5 mb-5">
            <h4 class="mb-5">Comments (${comments.length})</h4>
            <div class="row">
                ${data}
            </div>
        </section>
        `;
  }

  createMarkupTemplate() {
    const { title, body, author } = this.state;

    return `
            <main>
                <section>
                <h1 class="display-3 text-capitalize">${title}</h1>
                <p class="lead mt-5 mb-5">${body}</p>
                </section>
                <section class="d-flex mt-5 mb-5">
                <div class="flex-shrink-0">
                    ${AvatarIcon}
                </div>
                <div class="flex-grow-1 ms-3">
                    <h4>
                      <a href="#author/${author.id}">
                        ${author.username}
                      </a>
                    </h4>
                    <p>${author.companyName} . ${author.website}</p>
                </div>
                </section>
                <hr />
                ${this.renderCommentsSection()}
            </main>
            `;
  }

  render() {
    this.rootElement.innerHTML = this.createMarkupTemplate();
  }
}
