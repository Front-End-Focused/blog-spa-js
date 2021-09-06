import Component from './Component';
import { AvatarIcon } from './Icons';

export default class AuthorPage extends Component {
  renderPostsSection() {
    const { posts } = this.state;
    if (!posts.length) return;

    const data = posts
      .map(
        ({ title, body, id }) =>
          `
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
            `
      )
      .join('');

    return `
        <section class="mt-5 mb-5">
            <h4 class="mb-5">Posts (${posts.length})</h4>
            ${data}
        </section>
        `;
  }

  createMarkupTemplate() {
    const { name, phone, website, company, email, address } = this.state;

    return `
      <main>
          <section class="d-flex mt-5 mb-5">
          <div class="flex-shrink-0">
          ${AvatarIcon}
          </div>
          <div class="flex-grow-1 ms-3">
              <h4>${name}</h4>
              <p>${company.name} . ${company.catchPhrase}</p>
              <p>${company.bs}</p>
              <p>${website}</p>
              <p>${email}</p>
              <p>${phone}</p>
              <p>${address.street}, ${address.city}, ${address.zipcode}</p>
          </div>
          </section>
          <hr />
          ${this.renderPostsSection()}
      </main>
      `;
  }

  render() {
    this.rootElement.innerHTML = this.createMarkupTemplate();
  }
}
