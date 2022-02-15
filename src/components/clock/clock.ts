export default class Clock {
  container: HTMLDivElement;
  clockDigital!: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div') as HTMLDivElement;
    this.container.classList.add('clock');
  }

  public render = (): HTMLDivElement => {
    this.container.innerHTML = `
      <div class="clock-digital"></div>
    `;

    return this.container;
  };

  private getElements = (): void => {
    this.clockDigital = this.container.querySelector(
      '.clock-digital'
    ) as HTMLDivElement;
  };

  private setTime = (): void => {
    const date = new Date();
    let hours: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();
    let seconds: number | string = date.getSeconds();

    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    this.clockDigital.innerHTML = `
      <span class="clock-digital__num">${`${hours}`.slice(0, 1)}</span>
      <span class="clock-digital__num">${`${hours}`.slice(1)}</span>
      <span class="clock-digital__num clock__num--divider">:</span>
      <span class="clock-digital__num">${`${minutes}`.slice(0, 1)}</span>
      <span class="clock-digital__num">${`${minutes}`.slice(1)}</span>
    `;

    setTimeout(() => this.setTime(), 1000);
  };

  public init = (): void => {
    this.getElements();
    this.setTime();
  };
}
