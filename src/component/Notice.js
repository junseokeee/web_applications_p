import React, { Component } from "react";
import "./Post.css";

class Notice extends Component {
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
        <h3>알림</h3>
        <div className="tabs">
          <button type="button" onClick={() => this.handleTabChange("myPosts")}>
            받은 쪽지
          </button>
          <button
            type="button"
            onClick={() => this.handleTabChange("interestedPosts")}
          >
            보낸 쪽지
          </button>
          <button
            type="button"
            onClick={() => this.handleTabChange("allPosts")}
          >
            공지사항
          </button>
        </div>

        <div className="content">
          {activeTab === "myPosts" && (
            <div>
              <ol>받은 쪽지 1</ol>
              <ol>받은 쪽지 2</ol>
              <ol>받은 쪽지 3</ol>
            </div>
          )}

          {activeTab === "interestedPosts" && (
            <div>
              <ol>보낸 쪽지 1</ol>
              <ol>보낸 쪽지 2</ol>
              <ol>보낸 쪽지 3</ol>
              <ol>보낸 쪽지 4</ol>
            </div>
          )}

          {activeTab === "allPosts" && (
            <div>
              <ol>공지사항 1</ol>
              <ol>공지사항 2</ol>
              <ol>공지사항 3</ol>
              <ol>공지사항 4</ol>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Notice;
