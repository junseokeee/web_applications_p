import React, { Component } from "react";
import "./Post.css";

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "mynotes",
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
        <h3>알림</h3>
        <div className="tabs">
          <button type="button" onClick={() => this.handleTabChange("mynotes")}>
            받은 쪽지
          </button>
          <button
            type="button"
            onClick={() => this.handleTabChange("yournotes")}
          >
            보낸 쪽지
          </button>
          <button type="button" onClick={() => this.handleTabChange("notice")}>
            공지사항
          </button>
        </div>

        <div className="content">
          {activeTab === "mynotes" && (
            <div>
              <ol onClick={() => this.handleMessageClick("받은 쪽지 1")}>
                받은 쪽지 1
              </ol>
              <ol onClick={() => this.handleMessageClick("받은 쪽지 2")}>
                받은 쪽지 2
              </ol>
              <ol onClick={() => this.handleMessageClick("받은 쪽지 3")}>
                받은 쪽지 3
              </ol>
            </div>
          )}

          {activeTab === "yournotes" && (
            <div>
              <ol onClick={() => this.handleMessageClick("보낸 쪽지 1")}>
                보낸 쪽지 1
              </ol>
              <ol onClick={() => this.handleMessageClick("보낸 쪽지 2")}>
                보낸 쪽지 2
              </ol>
              <ol onClick={() => this.handleMessageClick("보낸 쪽지 3")}>
                보낸 쪽지 3
              </ol>
            </div>
          )}

          {activeTab === "notice" && (
            <div>
              <ol onClick={() => this.handleMessageClick("공지사항 1")}>
                공지사항 1
              </ol>
              <ol onClick={() => this.handleMessageClick("공지사항 2")}>
                공지사항 2
              </ol>
              <ol onClick={() => this.handleMessageClick("공지사항 3")}>
                공지사항 3
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

export default Notice;
