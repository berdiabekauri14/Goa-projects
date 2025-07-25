import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router";
import About from "./About"
import Registrer from "./Registrer"
import Login from "./Login";
import AuthContext from "../context/Auth.js"

export default React.memo(function Profile() {
    const {user} = useContext(AuthContext)
    const [like, setLike] = useState(0)

    if (user) {
        return (
            <div>
                <h1 className=" text-3xl">You are not registrered or logged</h1>
                <h2 className=" text-2xl">Please Registrer or Login to access this page</h2>
            </div>
        )
    }

    const createPost = e => {
        e.preventDefault();

        const formData = {
            description: e.target.form.description.value,
            imgOrVid: e.target.form.upload.value
        }

        if (formData.description === "") {
            alert("Please enter an description to create a post");
            return;
        }

        console.log(formData)
        localStorage.setItem("description", formData.description)
        localStorage.setItem("image", formData.imgOrVid)
    }

    const likePost = () => {
        setLike(like + 1);
    }
    
    const dislikePost = () => {
        setLike(like - 1);
    }

    return (
        <div>
            <header>
                <h1 className=" text-2xl">Your Profile</h1>
            </header>
            <br />
            <Routes>
                <Route path="/day153/homework/src/pages/About.jsx/*" element={<About />} />
                <Route path="/day153/homework/src/pages/Registrer.jsx/*" element={<Registrer />} />
                <Route path="/day153/homework/src/pages/Login.jsx/*" element={<Login />} />
                <Route path="/day153/homework/src/pages/Profile.jsx/*" element={<Profile />} />
            </Routes>
            <br />
            <section>
                <h2 className=" text-3xl m-1">Berdia</h2>
                <h3>This account was created in: <span className=" text-2xl">{Date()}</span></h3>
            </section>
            <section>
                <h1>Your Posts</h1>
                <form name="form">
                    <textarea name="description" placeholder="Enter your post description" className=" outline-0 border-2 p-2 m-2"></textarea>
                    <br />
                    <input type="text" name="upload" className=" border-2 p-2 m-2 outline-0" placeholder="Upload an image" />
                    <br />
                    <button className=" border-2 border-blue-700 cursor-pointer p-2" onClick={createPost}>Create post</button>
                </form>
                <br />
                <div>
                    <p>{localStorage.getItem("description")}</p>
                    <br />
                    <div className=" flex justify-center items-center">
                        <img src={localStorage.getItem("image")} width={300} alt="uploaded photo" />
                    </div>
                    <br />
                    <p>Likes: {like}</p>
                    <br />
                    <button className=" border-2 border-blue-700 cursor-pointer p-2 m-0.5" onClick={likePost}>👍</button>
                    <button className=" border-2 border-blue-700 cursor-pointer p-2 m-0.5" onClick={dislikePost}>👎</button>
                </div>
            </section>
        </div>
    )
})