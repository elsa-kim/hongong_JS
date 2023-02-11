// 리액트 라이브러리 맛보기

/*
리액트 : 사용자 인터페이스(UI)를 쉽게 구성할 수 있게 도와주는 라이브러리
  - 컴포넌트 : 화면에 출력되는 요소, 컴포넌트 만들 때 HTML 요소 만드는 것과 동일한 문법 사용
  - 루트 컴포넌트 : 가장 최상위에 배치하는 컴포넌트
  - 컴포넌트 생성 : <컴포넌트 이름></컴포넌트 이름>
  - 컴포넌트 출력 : ReactDOM.render(컴포넌트, 컨테이너)  // 컨테이너 : 컴포넌트 출력할 상자

JSX 기본 문법 : 자바스크립트 확장 문법, 단순하게 태그 만드는 기능 외에도 태그 내부에 표현식 삽입해 출력하는 기능도 제공
  - 표현식 출력 : 따옴표 사용 안됨, {}기호 사용 ; <태그>{표현식}</태그> , <태그 속성={표현식}/>
  - 이벤트 연결 : 캐멀 케이스 사용(대소문자 확실하게 지켜야 됨)

클래스 컴포넌트 : 클래스로 만드는 컴포넌트(HTML 표준에 포함된 태그로 컴포넌트 만들 수 있지만 사용자가 직접 클래스나 함수를 이용해 만들 수도 있음)
  - 클래스 컴포넌트 만들기 : React.Component 클래스의 상속을 받아야 컴포넌트로 동작할 수 있게 하는 속성과 메소드 받을 수 있음
    class 컴포넌트 이름 extends React.Component {
        render () {
            return <h1>출력할 것</h1>
        }
    }

컴포넌트 기본 속성과 메소드
  - state 속성 : 출력할 값 저장
    > 상태 선언(생성자 위치) ; this.state = { 속성: 값 }
    > 상태 변경(생성자 이외의 위치) ; this.setState({ 변경할 속성: 값 })

스타일 지정 : style 속성에 객체 지정, 단위 입력 안해도 됨

컴포넌트 배열 : 컴포넌트를 요소로 갖는 배열을 사용해 한 번에 여러 개의 컴포넌트 출력 가능

props : 부모 컴포넌트에서 자식으로 어떤 데이터 전달할 때 속성(this.props) 사용, 부모 컴포넌트에서 자식으로 어떤 데이터 전달한 뒤 화면 내용 변경할 때도 속성(this.props) 사용



*/
