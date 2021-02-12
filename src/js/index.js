import Car from './models/Car.js';
import RacingUI from './racingUI.js';
import { ALERT_MESSAGE, ELEMENT_CLASS_NAME } from './constants.js';
import { 
  isCarNameOverFive, 
  checkCarNameValidity,
  checkTryCountValidity,
} from './validation.js';
export default class Racing {
  constructor() {
    this.UIController = new RacingUI();
    
    this.resetValues();
    this.UIController.hideUI();
    this.addListeners();
  }

  resetValues() {
    this.cars = [];
    this.tryCount = 0;
  }

  handleCarNameInput() { // createCars? handleCarNameButton?
    const carNameInput = document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).value;
    const isCarNameInputValid = checkCarNameValidity(carNameInput);

    if (!isCarNameInputValid) return;

    for (let name of carNameInput.split(',')) {
      if (isCarNameOverFive(name.trim().length)) {
        alert(ALERT_MESSAGE.CAR_NAME_OVER_FIVE);
        this.cars = [];
        return;
      }

      const car = new Car(name.trim());
      this.cars.push(car);
    }

    this.UIController.showElement(ELEMENT_CLASS_NAME.TRY_COUNT_FORM);
    this.UIController.focusElement(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT);
  }

  handleTryCountInput() {
    const tryCountInput = document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).value;
    const isTryCountInputValid = checkTryCountValidity(tryCountInput);

    if(!isTryCountInputValid) return;

    this.tryCount = Number(tryCountInput);
    this.moveCars();
    this.getWinners();
  }

  moveCars() {
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach(car => car.move());
    }

    this.UIController.showProgress(this.cars);
  }

  getWinners() {
    const winnerResult = this.cars.reduce((winners, car, idx) => {
      if (idx === 0) return [this.cars[0]];
      
      if (car.position === winners[0].position) {
        return winners.concat(car);
      } else if (car.position > winners[0].position) {
        return [car];
      } else {
        return winners;
      }
    }, []).map(winner => winner.name);

    this.UIController.showWinners(winnerResult);
    document.querySelector(ELEMENT_CLASS_NAME.RESTART_BTN).addEventListener('click', this.restartGame.bind(this));
  }

  restartGame() {
    this.UIController.clearUI();
    this.UIController.hideUI();
    this.UIController.enableButtons();
    this.resetValues();
  }

  addListeners() {
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_BTN).addEventListener('click', this.handleCarNameInput.bind(this));
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleCarNameInput.bind(this)();
      }
    });
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_BTN).addEventListener('click', this.handleTryCountInput.bind(this));
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleTryCountInput.bind(this)();
      }
    });
  }
}

new Racing();
