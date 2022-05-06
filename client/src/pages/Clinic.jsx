import ClinicAdd from "../components/ClinicAdd";
import RightNav from "../components/RightNav";

const Clinic = () => {
  return(  
    <main style={{width: "100%", display: "flex"}}>
      <RightNav />
      <ClinicAdd />
    </main>
  ) 
};

export default Clinic;
