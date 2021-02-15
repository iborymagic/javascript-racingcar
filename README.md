<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>
<p align="middle">
<img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
<img src="https://img.shields.io/badge/language-html-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
  <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>


## 🔥 Projects!
<p align="middle">
  <img width="400" src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/7c76e809d82a4a3aa0fd78a86be25427">
</p>

### ✅ 2단계 Todos
- [ ] try-count-btn을 클릭하면 각 자동차 이름 하단에 spinner를 띄운다.
- [ ] 1초가 지날 때마다 spinner가 경주 진행 상황(화살표)로 덮어씌워진다.
- [ ] 모든 자동차의 spinner가 경주 진행 상황(화살표)로 대체되면 최종 결과를 보여준다.
  - [ ] 먼저 alert로 축하 메세지를 띄운다.
  - [ ] alert를 없애면 최종 우승자와 함께 다시 시작하기 버튼을 화면에 띄운다.
### ✅ 1단계 Todos
- [x] eslint, prettier 세팅 
- [x] cypress 세팅
- [x] 자동차 이름 입력 받아서 배열에 저장한다. 
  - [x] 예외: 이름이 5자를 넘어가면 안 된다.
  - [x] 예외: 이름을 입력하지 않으면 안 된다.
- [x] 리팩토링: class형 컴포넌트로 분리
- [x] 리팩토링: alert 테스트 코드 수정
- [x] 리팩토링: Car model 분리
- [x] 이동 횟수를 입력 받아서 저장한다.
  - [x] 예외: 이동 횟수를 입력하지 않으면 안 된다.
  - [x] 예외: 이동 횟수가 0 혹은 음수이면 안 된다.
  - [x] 예외: 이동 횟수 입력값이 정수여야 한다.
- [x] 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [x] 이동 횟수만큼 반복 후 전진하는 자동차 이름과 화살표를 출력한다.
- [x] 우승자를 구해서 출력한다.
  - [x] 우승자가 여러명일 경우 ,를 이용하여 구분한다.
- [x] 다시 시작하기 버튼 클릭 시 게임이 리셋된다.  
- [x] 리팩토링: 테스트 코드 함수화
- [x] 리팩토링: 모듈 분리 & 상수화

### 🎯 step1
- [ ] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- [ ] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [ ] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [ ] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [ ] 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### 🎯🎯 step2
- [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
    - [ ] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요. 

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-racingcar/issues) 에 등록 후 @eastjun에게 dm을 보내주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.
