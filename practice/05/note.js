// 함수

/*
용어정리
  - 함수 : 코드의 집합을 나타내는 자료형, 필요할때마다 호출해 반복적 사용 가능
  - 함수 호출 : 함수 사용하는 것
  - 매개변수 : 함수 호출 시 괄호 내부에 넣는 여러가지 자료
  - 리턴값 : 함수를 호출해서 최종적으로 나오는 결과, 함수 내부에 return 키워드 입력하고 뒤에 값 넣어 생성

익명 함수 : 이름이 붙어있지 않은 함수
  - 기본형태 : function () {}

선언적 함수 : 이름이 있는 함수
  - 기본형태 : function 함수이름() {}

나머지 매개변수 : 호출 시 매개변수의 개수가 고정적이지 않은 함수를 가변 매개변수 함수라고 하는데 이러한 함수를 구현할 때 사용
  - 기본형태 : function 함수이름(...나머지 매개변수) {}  // 함수의 매개변수 앞에 ... 입력시 매개변수들이 배열로 들어옴
  - 일반 매개변수와 조합 : function 함수이름(매개변수, 매개변수, ...나머지 매개변수) {}  //나머지 매개변수는 항상 마지막에
  - 전개 연산자 : 배열을 전개해 함수의 매개변수로 전달, 배열 앞 ... 붙이는 형태 ; 함수이름(...배열)  //구 버전 자바스크립트에선 apply() 함수 사용

기본 매개변수 : 매개변수에 기본값 지정
  - 기본형태 : 함수이름(매개변수, 매개변수=기본값, 매개변수=기본값)  // 기본 매개변수는 오른쪽 매개변수에 사용

콜백 함수 : 매개변수로 전달하는 함수
  - 콜백함수를 활용하는 함수  // 콜백함수의 매개변수는 모두 입력할 필요 없고 사용하고자 하는 위치의 것만 순서에 맞춰 입력, 주로 value, index만 사용
    1) forEach() : 배열이 갖고있는 함수로써 단순하게 배열 내부의 요소를 사용해 콜백함수 호출 ; forEach(function (value, index, array) {}) 
    2) map() : 배열이 갖고있는 함수, 콜백함수에서 리턴한 값들 기반으로 새로운 배열 만드는 함수 ; map(function (value, index, array) {})
    3) filter() : 배열이 갖고있는 함수, 콜백함수에서 리턴하는 값이 true인 것들만 모아 새로운 배열 만드는 함수 ; filter(function (value, index, array) {})

화살표 함수 : function 키워드 대신 화살표 사용, 내부에서 this 키워드가 지칭하는 대상이 다르다는 차이 있음

타이머 함수 // 시간 = 밀리초 단위   // 타이머_ID = setTimeout(), setInterval() 호출할 때 리턴값으로 나오는 숫자
  - setTimeout(함수, 시간) : 특정 시간 후에 함수 한번 호출
  - setInterval(함수, 시간) : 특정 시간마다 함수 호출
  - clearTimeout(타이머_ID) : setTimeout() 함수로 설정한 타이머 제거
  - clearInterval(타이머_ID) : setInterval() 함수로 설정한 타이머 제거

변수 이름 충돌
  - 스코프(scope) : 변수가 존재하는 범위 
  - 스코프 단계 변경 방법
    1) 중괄호 사용해 블록 만들기
    2) 함수 생성해 블록 만들기
  - 섀도잉(shadowing) : 블록이 다른 경우 내부 변수가 외부 변수 가리는 현상

엄격모드(strict mode) : 코드 가장 위쪽에 'use strict' 문자열, 자바스크립트는 오류 어느정도 무시하고 넘어가기 때문에 실수로 이어질 수 있어 엄격모드 사용하는 것이 좋음,
 블럭 가장 위쪽에 쓸 경우 해당 블록 내부에서만 엄격 모드 적용

익명함수와 선언적 함수 차이
  - 익명함수 : 순차적 코드 실행에서 코드가 해당 줄 읽을 때 생성, 
  - 선언적 함수 : 순차적 코드 실행이 일어나기 전에 생성, 같은 블록이라면 어디서 함수를 호출해도 상관없이 실행됨
  => 익명함수는 우리가 코드 읽을때와 같은 순서로 함수 선언되지만, 선언적 함수는 우리가 코드 읽는 순서와 다른 순서로 선언되어
  함수를 같은 이름으로 덮어쓰는 것은 굉장히 위험
  따라서 안전하게 사용할 수 있는 익명 함수 선호


*/

// 참고내용
/*
Array.isArray() 메소드 : 어떤 자료가 배열인지 확인할 때 사용, 일반적 typeof 연산자로 배열 확인 불가능(object 결과 나옴)

메소드 체이닝(method chaining) : 어떤 메소드가 리턴하는 값을 기반으로 해 함수를 줄줄이 사용하는 것
*/
