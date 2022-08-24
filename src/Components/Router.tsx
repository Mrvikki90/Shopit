import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Signup from "./Signup";
import AdminPanel from "./AdminPanel";
import Nav from "./Nav";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import Wishlist from "./Wishlist";

export type UserProps = {
  id: number;
  name: string;
  price: string;
  author: string;
  img: string;
};

const Router = () => {
  const [MenuData, setMenuData] = useState<UserProps[]>([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let url = "http://localhost:8080/users";
    let response = await axios.post<any>(url);
    setMenuData(response.data.products);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage MenuData={MenuData} />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </>
  );
};

export default Router;
