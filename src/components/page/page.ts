export default class Page {
  container: HTMLDivElement;

  constructor() {
    this.container = document.getElementById('root') as HTMLDivElement;
  }

  public init = (): void => {};
}
