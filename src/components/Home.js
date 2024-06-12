import Notes from './Notes';
import Navbar from './Navbar';
import "../styles/Home.css";
export const Home = () => {

    return (
        <div className="container"> 
            <Navbar/>
            <Notes/>
        </div>
    )
}