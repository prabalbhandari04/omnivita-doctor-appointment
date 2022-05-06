import MedicineForm from "../components/MedicineForm";
import RightNav from "../components/RightNav";

const Prescription = () => {
  return(  
    <main style={{width: "100%", display: "flex"}}>
      <RightNav />
      <MedicineForm />
    </main>
  ) 
};

export default Prescription;
