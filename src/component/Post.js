import React, { Component } from "react";
import "./Post.css";
import { Link } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "myPosts",
    };
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <h3>글관리</h3>
        <div className="tabs">
          <button type="button" onClick={() => this.handleTabChange("myPosts")}>
            내가 작성한 글
          </button>
          <button
            type="button"
            onClick={() => this.handleTabChange("interestedPosts")}
          >
            관심 글
          </button>
        </div>

        <div className="content">
          {activeTab === "myPosts" && (
            <div>
              <ol>
                <Link to="/page1">온라인 음악 스트리밍 앱 개발</Link>
              </ol>
              <ol>
                <Link to="/page2">온라인 음악 스트리밍 앱 개발</Link>
              </ol>
              <ol>내가 작성한 글 3</ol>
              <ol>내가 작성한 글 4</ol>
              <ol>내가 작성한 글 5</ol>
            </div>
          )}

          {activeTab === "interestedPosts" && (
            <div>
              <ol>관심글 1</ol>
              <ol>관심글 2</ol>
              <ol>관심글 3</ol>
              <ol>관심글 4</ol>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Post;
