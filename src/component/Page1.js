import React, { Component } from "react";

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h2>온라인 음악 스트리밍 앱 개발</h2>
        <p>
          ### 역할 및 책임 - 프론트엔드 개발자로써 React를 사용하여 사용자
          인터페이스를 구축했습니다.
          <br /> - RESTful API와 상호작용하여 서버에서 음악 데이터를 가져오는
          기능을 구현했습니다.
          <br /> - Redux를 사용하여 상태 관리를 수행하고, 재생 상태와 현재 재생
          중인 음악 등을 관리했습니다.
          <br /> ### 주요 성과 - 사용자 경험을 향상시키기 위해 반응형 디자인과
          모바일 친화적인 레이아웃을 구현했습니다.
          <br /> - 검색 기능과 필터링 기능을 추가하여 사용자가 원하는 음악을
          쉽게 찾을 수 있도록 했습니다.
          <br /> - 팀원들과의 협업을 통해 원활한 코드 작성 및 프로젝트 진행을
          이끌어냈습니다.
        </p>

        <form>
          <span>
            <input type="text" className="" placeholder="댓글을 입력해주세요" />
          </span>
          <input type="submit" className="" value="submit" />
        </form>
      </div>
    );
  }
}
// https://velog.io/@ash991213/React-%EB%8C%93%EA%B8%80-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
