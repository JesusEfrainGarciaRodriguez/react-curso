import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { Navbar } from "../ui"
import { DcPage, MarvelPage } from "../heroes"

const AppRouter = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="login" element={<LoginPage />} />

                <Route path="/*" element={<Navigate to={"/marvel"} />} />
            </Routes>
        </>
    )
}

export default AppRouter