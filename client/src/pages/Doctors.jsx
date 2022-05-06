import DoctorsAdd from "../components/DoctorsAdd";
import RightNav from "../components/RightNav";

const Doctors = () => {
  return(  
    <main style={{width: "100%", display: "flex"}}>
      <RightNav />
      <DoctorsAdd />
    </main>
  ) 
};

export default Doctors;
