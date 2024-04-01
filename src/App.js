import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import EditForm from './components/EditForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneFlip, faGlobe, faHeart as solidHeart,  faTrash, faPen,  } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


// Mock JSON data
const mockUserData = [{
  id: 1,
  username: 'Leanne Graham',
  profilePhoto: 'https://via.placeholder.com/100',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031 x56442',
  companyUrl: 'http://hildegard.org',
  },
  {id: 2,
    username: 'Ervin Howell',
    profilePhoto: 'https://via.placeholder.com/100',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    companyUrl: 'http://anastasia.net',
    },
    {
      id: 3,
      username: 'Clementine Bauch',
      profilePhoto: 'https://via.placeholder.com/100',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
      companyUrl: 'http://ramiro.info',
      },
      {
        id: 4,
        username: 'Patricia Lebsack',
        profilePhoto: 'https://via.placeholder.com/100',
        email: 'Julianne.OConner@kory.org',
        phone: '493-170-9623 x156',
        companyUrl: 'http://kale.biz',
        },
        {
          id: 5,
          username: 'Chelsey Dietrich',
          profilePhoto: 'https://via.placeholder.com/100',
          email: 'Lucio_Hettinger@annie.ca',
          phone: '(254)954-1289',
          companyUrl: 'http://demarco.info',
          },
          {
            id: 6,
            username: 'Mrs. Dennis Schulist',
            profilePhoto: 'https://via.placeholder.com/100',
            email: 'Karley_Dach@jasper.info',
            phone: '1-477-935-8478 x6430',
            companyUrl: 'http://ola.org',
            },
            {
              id: 7,
              username: 'Kurtis Weissnat',
              profilePhoto: 'https://via.placeholder.com/100',
              email: 'Telly.Hoeger@billy.biz',
              phone: '210.067.6132',
              companyUrl: 'http://elvis.io',
              },
              {
                id: 8,
                username: 'Nicholas Runolfsdottir V',
                profilePhoto: 'https://via.placeholder.com/100',
                email: 'Sherwood@rosamond.me',
                phone: '586.493.6943 x140',
                companyUrl: 'http://jacynthe.com',
                },
                {
                  id: 9,
                  username: 'Glenna Reichert',
                  profilePhoto: 'https://via.placeholder.com/100',
                  email: 'Chaim_McDermott@dana.io',
                  phone: '(775)976-6794 x41206',
                  companyUrl: 'http://conrad.com',
                  },
                  {
                    id: 10,
                    username: 'Clementina DuBuque',
                    profilePhoto: 'https://via.placeholder.com/100',
                    email: 'Rey.Padberg@karina.bi',
                    phone: '024-648-3804',
                    companyUrl: 'http://ambrose.net',
                    }]
                  
;



// function App() {
//   const [userData, setUserData] = useState(mockUserData);
//   const [editUserId, setEditUserId] = useState(null);

//   const handleLike = (id) => {
//     setUserData(userData.map(user => {
//       if (user.id === id) {
//         return { ...user, liked: !user.liked };
//       }
//       return user;
//     }));
//   };

//   const handleEdit = (id) => {
//     setEditUserId(id);
//   };

//   const handleSaveEdit = (editedUser) => {
//     setUserData(userData.map(user => {
//       if (user.id === editedUser.id) {
//         return editedUser;
//       }
//       return user;
//     }));
//     setEditUserId(null);
//   };

//   const handleCancelEdit = () => {
//     setEditUserId(null);
//   };

//   const handleDelete = (id) => {
//     setUserData(userData.filter(user => user.id !== id));
//   };

//   return (
//     <div className="App">
//       <h1>User Data</h1>
//       <ul>
//         {userData.map((user) => (
//           <li key={user.id}>
//             <img src={user.profilePhoto} alt={user.username} />
//             <p> {user.username}</p>
//             <p><FontAwesomeIcon icon={faEnvelope} /> {user.email}</p>
//             <p><FontAwesomeIcon icon={faPhone} /> {user.phone}</p>
//             <p>
              
//               <a href={user.companyUrl} target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faGlobe} /> {user.companyUrl}
//               </a>
//             </p>
//             <div className='buttons'>
//             <button onClick={() => handleLike(user.id)}>
//   {user.liked ? <FontAwesomeIcon icon={solidHeart} /> : <FontAwesomeIcon icon={faHeart} />}
// </button>
//             <button onClick={() => handleEdit(user.id)}><FontAwesomeIcon icon={faPen} /></button>
//   <button onClick={() => handleDelete(user.id)}><FontAwesomeIcon icon={faTrash} /></button>
//             </div>
            
//             {editUserId === user.id && (
//               <EditForm
//                 user={user}
//                 onSave={handleSaveEdit}
//                 onCancel={handleCancelEdit}
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function App() {
  const [userData, setUserData] = useState(mockUserData);
  const [editUserId, setEditUserId] = useState(null);

  const handleLike = (id) => {
    setUserData(userData.map(user => {
      if (user.id === id) {
        return { ...user, liked: !user.liked };
      }
      return user;
    }));
  };

  const handleEdit = (id) => {
    setEditUserId(id);
  };

  const handleSaveEdit = (editedUser) => {
    setUserData(userData.map(user => {
      if (user.id === editedUser.id) {
        return editedUser;
      }
      return user;
    }));
    setEditUserId(null);
  };

  const handleCancelEdit = () => {
    setEditUserId(null);
  };

  const handleDelete = (id) => {
    setUserData(userData.filter(user => user.id !== id));
  };

  return (
    <div className="App">
      <h1>User Data</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <img src={user.profilePhoto} alt={user.username} />
            <h3> {user.username}</h3>
            <p><FontAwesomeIcon icon={faEnvelope} /> {user.email}</p>
            <p><FontAwesomeIcon icon={faPhoneFlip} /> {user.phone}</p>
            <p>
              <a href={user.companyUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} /> {user.companyUrl}
              </a>
            </p>
            <div className='buttons'>
              <div onClick={() => handleLike(user.id)}>
                {user.liked ? <FontAwesomeIcon icon={solidHeart} size="2x" /> : <FontAwesomeIcon icon={faHeart} size="2x" />} 
              </div>
              <FontAwesomeIcon icon={faPen} size="2x"  onClick={() => handleEdit(user.id)}    />
              <FontAwesomeIcon icon={faTrash} size="2x" onClick={() => handleDelete(user.id)}  />
            </div>
            
            {editUserId === user.id && (
              <EditForm
                user={user}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
                visible={editUserId === user.id}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
