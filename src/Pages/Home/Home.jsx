import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
          this is home  
          <Outlet></Outlet>
        </div>
    );
};

export default Home;