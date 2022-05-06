import BookAppointmnet from "../components/BookAppointmnet";
import RightNav from "../components/RightNav";

const Appointment = () => {
  return(  
    <main style={{width: "100%", display: "flex"}}>
      <RightNav />
      <BookAppointmnet />
    </main>
  ) 
};

export default Appointment;
