export default class Clock {
  container: HTMLDivElement;
  clockDigital!: HTMLDivElement;
  clockAnalog!: HTMLDivElement;
  hoursArrow!: HTMLDivElement;
  minutesArrow!: HTMLDivElement;
  secondsArrow!: HTMLDivElement;
  clockCircle!: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div') as HTMLDivElement;
    this.container.classList.add('clock');
  }

  public render = (): HTMLDivElement => {
    this.container.innerHTML = `
      <div class="clock-digital"></div>
      <div class="clock-analog">
        <div class="clock-analog__circle"></div>
        <div class="clock-analog__num clock-analog__num--12">12</div>
        <div class="clock-analog__num clock-analog__num--3">3</div>
        <div class="clock-analog__num clock-analog__num--6">6</div>
        <div class="clock-analog__num clock-analog__num--9">9</div>
        <div class="clock-analog__arrow clock-analog__arrow--hour"></div>
        <div class="clock-analog__arrow clock-analog__arrow--minute"></div>
        <div class="clock-analog__arrow clock-analog__arrow--second"></div>
      </div>
    `;

    return this.container;
  };

  private getElements = (): void => {
    this.clockDigital = this.container.querySelector(
      '.clock-digital'
    ) as HTMLDivElement;
    this.clockAnalog = this.container.querySelector(
      '.clock-analog'
    ) as HTMLDivElement;
    this.clockCircle = this.container.querySelector(
      '.clock-analog__circle'
    ) as HTMLDivElement;
    this.hoursArrow = this.container.querySelector(
      '.clock-analog__arrow--hour'
    ) as HTMLDivElement;
    this.minutesArrow = this.container.querySelector(
      '.clock-analog__arrow--minute'
    ) as HTMLDivElement;
    this.secondsArrow = this.container.querySelector(
      '.clock-analog__arrow--second'
    ) as HTMLDivElement;
  };

  private setTime = (): void => {
    const date = new Date();
    let hours: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();
    let seconds: number | string = date.getSeconds();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    this.secondsArrow.style.transform = `rotate(${secondsDegrees}deg)`;

    const minsDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    this.minutesArrow.style.transform = `rotate(${minsDegrees}deg)`;

    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    this.hoursArrow.style.transform = `rotate(${hourDegrees}deg)`;

    this.clockCircle.style.transform = `rotate(${hourDegrees + 90}deg)`;

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
