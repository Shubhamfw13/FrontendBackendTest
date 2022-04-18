import { Navbar } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import { HomePage } from "../components/Homepage/Homepage"
import { Signin } from "../components/Login/Login"
import { Resident } from "./Residents/Resident"
export const AllRoutes = () => {

    return <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/resident/:id" element={<Resident />} />
            {/* <Route path="/navbar" element={<Navbar />} /> */}
        </Routes>
    </>
}