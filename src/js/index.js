import Car from './models/Car.js';
export default class Racing {
  constructor() {
    this.cars = [];

    this.resetUI();
    this.addListeners();
  }

  resetUI() {
    document.querySelector('.try-count-form').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'none';
  }

  getCarNames() {
    const carNameInput = document.querySelector('.car-name').value;

    for (let name of carNameInput.split(',')) {
      if (name.trim().length > 5) {
        alert('자동차 이름을 5자 이하로 입력해 주세요.');
        return;
      }
      const car = new Car(name.trim());
      this.cars.push(car);
    }

    document.querySelector('.try-count-form').style.display = 'block';
  }

  addListeners() {
    document
      .querySelector('.car-name-btn')
      .addEventListener('click', this.getCarNames.bind(this));
  }
}

new Racing();
