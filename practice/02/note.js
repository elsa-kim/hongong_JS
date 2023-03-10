// 자료와 변수

/*
자료(data) : 프로그램이 처리할 수 있는 모든 것, 형태에 따라 나눈 것 = 자료형 : 숫자(number), 문자열(string), 불(boolean)
자료형 검사 : typeof 연산자 사용 = typeof(자료) / 결과 : string, number, boolean, undefined, function, object, symbol, bigint

상수 : const 키워드로 선언
상수 관련 오류 발생
  - Identifier has already declared : 중복 선언시 발생 = 특정한 이름의 상수는 한 파일에서 한번만 선언 가능  
  - Missing initializer in const declaration : 선언 시 값 지정 안할경우 발생 = 선언 시 값 함께 지정해야 됨
  - Assignment to constant variable : 값 변경 시 발생 = 한 번 선언 된 상수의 자료는 변경 불가

변수 : let 키워드로 선언, 상수와 비교했을 때 유연함, 복합 대입 연산자와 증감 연산자 사용 가능
변수 관련 오류 발생
  - Identifier has already declared : 중복 선언시 발생 = 특정한 이름의 변수는 한 파일에서 한번만 선언 가능  
복합 대입 연산자 : 대입 연산자와 다른 연산자 함께 사용하는 연산자 ex) += , -= , *= , /= , %=
증감 연산자 : 변수++(후위:해당 문장 실행 한 후 값 더하거나 뺌), ++변수(전위:해당 문장 실행 전 값을 더하거나 뺌), 변수--(후위), --변수(전위)

undefined 자료형 : 상수와 변수 사용 시 undefined 자료형 확인 가능
  - 상수와 변수로 선언하지 않은 식별자
  - 값이 없는 변수(선언만 한 경우)

prompt(메시지 문자열, 기본 입력 문자열) : 문자열 자료형 입력할 때

confirm(메시지 문자열) : 확인 = true 리턴, 취소 = false 리턴

숫자 자료형으로 변환
  - Number(자료) : 숫자로 변환 불가한 문자열의 경우 NaN(Not a Number) 출력
  - 숫자 연산자 사용(-, *, /)

문자열 자료형으로 변환
  - String(자료)
  - 문자열 연결 연산자(+) 사용해 빈 문자열 연결("")

불 자료형으로 변환
  - Boolean(자료) : 대부분의 자료는 불로 변환했을 때 true로 변환, false로 변환 되는 5가지 자료형 = 0, NaN, '...'("..." ; 빈 문자열), null, undefined
  - 논리 부정 연산자(!) 사용 : 불이 아닌 다른 자료에 논리부정 연산자 2번 사용

*/

// 참고 내용
/*
이스케이프 문자(\) 기능
  - \' : 따옴표(') 문자 자체 의미
  - \n : 줄바꿈
  - \t : 탭
  - \\ : 역슬래시(\) 자체 의미

자료 비교 연산자
  - ===, !== : 값과 자료형 같은지 비교
  - ==, != : 값이 같은지 비교
*/
