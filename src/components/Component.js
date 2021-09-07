export default class Component {
  rootElement = document.getElementById('root');
  state = {};

  render() { }

  initialize(...args) {
    const [props] = args;
    this.rootElement.innerHTML = '';
    this.state = props;
    this.render();
  }

  createMarkupTemplatePosts({ title, body, id }) {
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

}
