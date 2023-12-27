import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './style.css';

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container mt-5"style={{ width: '1000px', height: '800px',border: '4px solid #333',borderRadius: '10px', overflow: 'hidden'}}>
     <h2 className="title">Tabel Pendataan Buku</h2>
     <h2 className="title">Library</h2>
    <div className="custom-columns">
      <div className="custom-column">
      <Link to="add" className="button is-success mr-50">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Penulis</th>
              <th>Penerbit</th>
              <th>tahun_terbit</th>
              <th>jumlah_halaman</th>
              <th>harga</th>
              <th>kategori</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
                 <tr key={user._id}>
                 <td>{index + 1}</td>
                 <td>{user.judul}</td>
                 <td>{user.penulis}</td>
                 <td>{user.penerbit}</td>
                 <td>{user.tahun_terbit}</td>
                 <td>{user.jumlah_halaman}</td>
                 <td>{user.harga}</td>
                 <td>{user.kategori}</td>
                 <td>{user.Rating}</td>
                 <td>
                 <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                 </td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default UserList;
