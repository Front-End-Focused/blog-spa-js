import Component from './Component';
import { AvatarIcon } from './Icons';
import { createMarkupTemplatePosts } from './CreateMarkupTemplatePosts';

export default class AuthorPage extends Component {
  renderPostsSection() {
    const { posts } = this.state;
    if (!posts.length) return;

    const data = posts
      .map(
        ({ title, body, id }) =>
          createMarkupTemplatePosts({
            title,
            body,
            id,
          })
      )
      .join('');

    return `
        <section class="mt-5 mb-5">
            <h4 class="mb-5">Posts (${posts.length})</h4>
            ${data}
        </section>
        `;
  }

  renderImage() {
    const { photo } = this.state;
    return ` 
     <div class="flex-grow-1 ms-3">
        <img width="200" src="${photo.url}" alt="${photo.title}"/>
    </div>`
  }

  createMarkupTemplateAutor() {
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
        ${this.renderImage()}
          </section>
          <hr />
          ${this.renderPostsSection()}
      </main>
      `;
  }

  render() {
    this.rootElement.innerHTML = this.createMarkupTemplateAutor();
  }
}
