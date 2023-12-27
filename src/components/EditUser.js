import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [tahun_terbit, setTahun] = useState("");
  const [jumlah_halaman, setJumlah] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [Rating, setRating] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);
  

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setJudul(response.data.judul);
    setPenulis(response.data.penulis);
    setPenerbit(response.data.penerbit);
    setTahun(response.data.tahun_terbit);
    setJumlah(response.data.jumlah_halaman);
    setHarga(response.data.harga);
    setKategori(response.data.kategori);
    setRating(response.data.Rating);
    
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        judul,
        penulis,
        penerbit,
        tahun_terbit,
        jumlah_halaman,
        harga,
        kategori,
        Rating
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Judul</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Penulis</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={penulis}
                onChange={(e) => setPenulis(e.target.value)}
                placeholder="penulis"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Penerbit</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={penerbit}
                onChange={(e) => setPenerbit(e.target.value)}
                placeholder="penerbit"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tahun Terbit</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tahun_terbit}
                onChange={(e) => setTahun(e.target.value)}
                placeholder="Tahun Terbit"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jumlah Halaman</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jumlah_halaman}
                onChange={(e) => setJumlah(e.target.value)}
                placeholder="Jumlah Halaman"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="Number"
                className="input"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="Harga"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Kategori</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                placeholder="Kategori"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Rating</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;