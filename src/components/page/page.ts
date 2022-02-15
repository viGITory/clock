import Clock from '../clock/clock';

export default class Page {
  container: HTMLDivElement;

  clock: Clock;

  constructor() {
    this.container = document.getElementById('root') as HTMLDivElement;

    this.clock = new Clock();
  }

  private addComponents = (): void => {
    this.container.append(this.clock.render());
  };

  public init = (): void => {
    this.addComponents();

    this.clock.init();
  };
}
