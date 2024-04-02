import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import EditForm from "./components/EditForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneFlip,
  faGlobe,
  faHeart as solidHeart,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";


// Mock JSON data
var mockUserData = [
  {
    id: 1,
    username: "Leanne Graham",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    liked: false,
    companyUrl: "http://hildegard.org",
  },
  {
    id: 2,
    username: "Ervin Howell",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    liked: false,
    companyUrl: "http://anastasia.net",
  },
  {
    id: 3,
    username: "Clementine Bauch",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    liked: false,
    companyUrl: "http://ramiro.info",
  },
  {
    id: 4,
    username: "Patricia Lebsack",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    liked: false,
    companyUrl: "http://kale.biz",
  },
  {
    id: 5,
    username: "Chelsey Dietrich",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    liked: false,
    companyUrl: "http://demarco.info",
  },
  {
    id: 6,
    username: "Mrs. Dennis Schulist",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    liked: false,
    companyUrl: "http://ola.org",
  },
  {
    id: 7,
    username: "Kurtis Weissnat",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    liked: false,
    companyUrl: "http://elvis.io",
  },
  {
    id: 8,
    username: "Nicholas Runolfsdottir",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    liked: false,
    companyUrl: "http://jacynthe.com",
  },
  {
    id: 9,
    username: "Glenna Reichert",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    liked: false,
    companyUrl: "http://conrad.com",
  },
  {
    id: 10,
    username: "Clementina DuBuque",
    profilePhoto: "https://via.placeholder.com/100",
    email: "Rey.Padberg@karina.bi",
    phone: "024-648-3804",
    companyUrl: "http://ambrose.net",
  },
];
const localStorageKey = "userData";
var mockUserData = JSON.parse(localStorage.getItem(localStorageKey)) || [];

function App() {
  const [userData, setUserData] = useState(mockUserData);
  const [editUserId, setEditUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  useEffect(() => {
    
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
  }, [userData]);


  const handleLike = (id) => {
    const updatedUserData = userData.map((user) =>
      user.id === id ? { ...user, liked: !user.liked } : user
    );
    setUserData(updatedUserData);
    updateMockData(updatedUserData);
  };

  const handleEdit = (id) => {
    setEditUserId(id);
  };

 

  const handleSaveEdit = (editedUser) => {
    const updatedUserData = userData.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUserData(updatedUserData);
    updateMockData(updatedUserData);
    setEditUserId(null);
  };

  const handleCancelEdit = () => {
    setEditUserId(null);
  };

  const handleDelete = (id) => {
    const updatedUserData = userData.filter((user) => user.id !== id);
    setUserData(updatedUserData);
    updateMockData(updatedUserData);
  };
  const updateMockData = (updatedUserData) => {
    mockUserData = [...updatedUserData];
  };

  return (
   
    <div className="App">
      {loading ? (
       <div className="loading-indicator">
       <p className="loading-text"></p>
     </div>
      ) : (
        <ul className="user-list">
          {userData.map((user) => (
            <li key={user.id}>
              <div className="img-holder">
                <img
                  src="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy"
                  alt="dp"
                />
              </div>
              <div className="info-div">
                <p className="name"> {user.username}</p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />{" "}
                  {user.email}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faPhoneFlip}
                    className="call-icon"
                  />{" "}
                  {user.phone}
                </p>
                <p>
                  <FontAwesomeIcon icon={faGlobe} className="web-icon" />{" "}
                  {user.companyUrl}
                </p>
              </div>
              <div className="parent-btn-div">
                <div className="button-div">
                  <div onClick={() => handleLike(user.id)}>
                    {user.liked ? (
                      <FontAwesomeIcon icon={solidHeart} color="red" />
                    ) : (
                      <FontAwesomeIcon icon={faHeart} />
                    )}
                  </div>
                  <div className="height-lines"></div>
                  <FontAwesomeIcon
                    icon={faPen}
                    size="1x"
                    onClick={() => handleEdit(user.id)}
                    className="edit-icon"
                  />
                  <div className="height-lines"></div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDelete(user.id)}
                    className="delete-icon"
                  />
                </div>
              </div>
              {editUserId === user.id && (
                <EditForm
                  user={user}
                  onSave={handleSaveEdit}
                  onCancel={handleCancelEdit}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
