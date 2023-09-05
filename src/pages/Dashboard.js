import React from 'react'
import { Outlet, Link, useNavigation, Navigate, useLoaderData, redirect } from 'react-router-dom'
export const loader = () => {
    const isLoggedIn = false
    // if (!isLoggedIn) return <Navigate to={"/home?message=please login to continue"}
    //     replace={true}
    // />
    // if (!isLoggedIn) return redirect("/home?message=please login to continue",
    //     { replace: true }
    // )
    return "user data here"
}

const Dashboard = () => {
    const navigation = useNavigation()
    const u = useLoaderData()
    if (navigation.state == "loading") {
        return "loading please wait..."
    }
    return (
        <div>
            {/* {navigation.state == "loading" ? "please wait loading data ..." : ""} */}
            <div className='flex items-center gap-x-4'
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                }}
            >
                <Link to="/dashboard">
                    brand
                </Link>
                <Link to="users/2">
                    user
                </Link>
                <Link to="user">
                    some user with id
                </Link>
            </div>
            {u}

            <Outlet />
        </div>

    )
}

export default Dashboard