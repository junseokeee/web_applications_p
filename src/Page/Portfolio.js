import { Button, Card, Input, List, Modal, Space } from "antd";
import React, { useState } from "react";

const Portfolio = (props) => {
  const { data, setData } = props;
  const [isModalOpen_edit, setIsModalOpen_edit] = useState(false);
  const [edittitle, setEdittitle] = useState("");
  const [editurl, setEditurl] = useState("");
  const showModal = () => {
    setIsModalOpen_edit(true);
  };

  const handleCancel = () => {
    setIsModalOpen_edit(false);
  };

  return (
    <div>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={data ? data : []}
        style={{ width: "1100px" }}
        itemLayout="horizontal"
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.title}
              extra={
                <Space direction="horizontal">
                  <Button type="link" onClick={showModal}>
                    Edit
                  </Button>
                  <Modal
                    title="포토폴리오 수정"
                    open={isModalOpen_edit}
                    onOk={() => {
                      const updateData = (title) => {
                        setData(
                          data.map((item) =>
                            item.title === title
                              ? { ...item, title: edittitle, url: editurl }
                              : item
                          )
                        );
                        setIsModalOpen_edit(false);
                      };
                      updateData(item.title);
                    }}
                    onCancel={handleCancel}
                  >
                    <div style={{ marginBottom: "5px" }}>Title</div>
                    <Input
                      placeholder="Please write your portfolio title..."
                      value={edittitle}
                      onChange={(e) => {
                        setEdittitle(e.target.value);
                      }}
                    />
                    <div style={{ marginBottom: "5px" }}>URL</div>
                    <Input
                      placeholder="Please write your portfolio url..."
                      value={editurl}
                      onChange={(e) => {
                        setEditurl(e.target.value);
                      }}
                    />
                  </Modal>
                  <Button
                    type="text"
                    danger
                    onClick={() => {
                      const removeData = (title) => {
                        setData(data.filter((data) => data.title !== title));
                      };
                      removeData(item.title);
                    }}
                  >
                    Delete
                  </Button>
                </Space>
              }
            >
              {item.url}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Portfolio;
