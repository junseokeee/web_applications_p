import { List } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const FavoriteItem = ({ favoriteList }) => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={favoriteList}
        renderItem={(item, index) => (
          <List.Item style={{ margin: "0 10px 0 10px" }}>
            <List.Item.Meta
              title={
                <Link
                  to={`/listitem/${index}`}
                  style={{ fontSize: "1.3rem", marginBottom: "10px" }}
                >
                  {item.title}
                </Link>
              }
              description={
                <>
                  <div
                    style={{
                      fontSize: "1rem",
                      height: "50px",
                      overflowY: "hidden",
                    }}
                  >
                    {item.contents}
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default FavoriteItem;
