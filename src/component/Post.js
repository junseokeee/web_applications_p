import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "myPosts",
      selectedMessage: null,
    };
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab, selectedMessage: null });
  };
  handleMessageClick = (message) => {
    this.setState((prev) => ({
      selectedMessage: prev.selectedMessage === message ? null : message,
    }));
  };

  render() {
    const { activeTab, selectedMessage } = this.state;

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
              <ol>내가 작성한 글 1</ol>
              <ol>내가 작성한 글 2</ol>
              <ol>내가 작성한 글 3</ol>
            </div>
          )}

          {activeTab === "interestedPosts" && (
            <div>
              <ol onClick={() => this.handleMessageClick("관심 글 1")}>
                관심글 1
              </ol>
              <ol onClick={() => this.handleMessageClick("관심 글 2")}>
                관심글 2
              </ol>
              <ol onClick={() => this.handleMessageClick("관심 글 3")}>
                관심글 3
              </ol>
            </div>
          )}
        </div>
        {selectedMessage && (
          <div className="content">
            <p>{selectedMessage}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
