import { Outlet } from "react-router-dom";
import HomePageLayout from "../../styles/LayoutStyles";
import Header from "../../components/header/Header";

const Homepage = () =>{
    return (
        <>
            <HomePageLayout>
               <div className="header-section">
                    <Header/>
               </div>
                <div className="page-body">
                    <Outlet/>
                </div>
            </HomePageLayout>
        </>
    )
}

export default Homepage