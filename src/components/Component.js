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
}
