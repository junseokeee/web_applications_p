import React, { Component } from "react";
import "./Post.css";

class SendItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "mynotes",
      selectedMessage: null,
      list: ["보낸 쪽지 1", "보낸 쪽지 2", "보낸 쪽지 3"],
      content: {
        "보낸 쪽지 1": "보낸 쪽지 1의 내용입니다.",
        "보낸 쪽지 2": "보낸 쪽지 2의 내용입니다.",
        "보낸 쪽지 3": "보낸 쪽지 3의 내용입니다.",
      },
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
    const { activeTab, selectedMessage, content } = this.state;

    return (
      <div>
        <div className="content">
          {activeTab === "mynotes" && (
            <div>
              {this.state.list.map((item, index) => {
                return (
                  <ul key={index}>
                    <li onClick={() => this.handleMessageClick(item)}>
                      {item}
                    </li>
                  </ul>
                );
              })}
            </div>
          )}
          {selectedMessage && (
            <div className="message-content">
              <p>{selectedMessage}</p>
              <p>{content[selectedMessage]}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SendItem;
