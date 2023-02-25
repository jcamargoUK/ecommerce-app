// import NavBar from "../Header/Header";
import Footer from "../Footer/Footer";
// import { useAuth } from "../../context/AuthContext";


export default function Layout(props) {
  // const { currentUser, logout, isUserAuthenticated } = useAuth();

  return (
    <div>
      {/* <NavBar /> */}
      {props.children}
      <Footer />
    </div>
  );
}