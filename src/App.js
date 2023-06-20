import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MyPage from "./Page/MyPage";
import Login from "./Join&Login/Login";
import Join from "./Join&Login/Join";
import List from "./Page/List";
import Notice from "./Page/Notice";
import Post from "./Page/Post";
import BoardListItem from "./Page/BoardListItem";
import EditListItem from "./Page/EditListItem";
import Update from "./Page/Update";
import Home from "./Home/Home";

function App() {
  const list = [];
  const [userData, setUserData] = useState(null);
  const [isLogined, setIsLogined] = useState();
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [listdata, setListdata] = useState(list);
  const [favoriteList, setFavoriteList] = useState([]);

  const userSignUp = (id, pwd, edu, maj) => {
    setUserData({
      userID: id,
      userPWD: pwd,
      userEdu: edu,
      userMaj: maj,
      userPort: data,
      userImg: image,
    });
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userData={userData}
                isLogined={isLogined}
                setIsLogined={setIsLogined}
                listdata={listdata}
              />
            }
          ></Route>
          <Route
            path="/myPage"
            element={
              <MyPage
                userData={userData}
                isLogined={isLogined}
                setIsLogined={setIsLogined}
                setUserData={setUserData}
                data={data}
                setData={setData}
                image={image}
                setImage={setImage}
              />
            }
          ></Route>
          <Route
            path="/list"
            element={
              <List
                isLogined={isLogined}
                setIsLogined={setIsLogined}
                listdata={listdata}
                favoriteList={favoriteList}
              />
            }
          ></Route>
          <Route
            path="/notice"
            element={
              <Notice isLogined={isLogined} setIsLogined={setIsLogined} />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                userSignUp={userSignUp}
                userData={userData}
                setIsLogined={setIsLogined}
              />
            }
          ></Route>
          <Route
            path="/join"
            element={<Join userSignUp={userSignUp} userData={userData} />}
          ></Route>
          <Route
            path="/post"
            element={
              <Post
                isLogined={isLogined}
                setIsLogined={setIsLogined}
                listdata={listdata}
                setListdata={setListdata}
              />
            }
          ></Route>
          <Route
            path="/listitem/:id"
            element={
              <BoardListItem
                listdata={listdata}
                isLogined={isLogined}
                setIsLogined={setIsLogined}
                favoriteList={favoriteList}
                setFavoriteList={setFavoriteList}
              />
            }
          ></Route>
          <Route
            path="/editlistitem/:id"
            element={
              <EditListItem
                listdata={listdata}
                isLogined={isLogined}
                setIsLogined={setIsLogined}
              />
            }
          ></Route>
          <Route
            path="/update/:id"
            element={
              <Update
                listdata={listdata}
                setListdata={setListdata}
                isLogined={isLogined}
                setIsLogined={setIsLogined}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
