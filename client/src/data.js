export const statistics = [
    {
        title: "Total Appointment",
        value: 3
    },
    {
        title: "Latest Prescription",
        value: "Azithro 500"
    },
    {
        title: "Current Appointment",
        value: "N/A"
    },   
]



export const lineChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',],
    datasets: [
        {
        label: 'Appointments Booked in 2021',
        data: [3, 5, 1, 0, 1, 0, 2, 2, 1, 0, 5, 2],
        fill: true,
        borderColor: "#757575",
        pointBorderColor: "#757575",
        pointBorderWidth:1,
        pointRadius:4,
        tension: 0.4,
        showLine: true,
        backgroundColor: "#1de9b6",
        pointBackgroundColor: "#1de9b6",
        },
    ],
}
      
export const appointmentLists = [
    {
        doctorName: "Stephen Strange",
        speciality: "Neurologist",
        date: "2022/01/28",
        time: "1:00 P.M.",
        status: "Accepted",
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        doctorName: "Dr Ramita Sharma",
        speciality: "Physician",
        date: "2022/02/01",
        time: "8:00 A.M.",
        status: "Pending",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        doctorName: "Dr. Ramesh Kumar",
        speciality: "Anesthesiologists",
        date: "2022/02/12",
        time: "4:00 P.M.",
        status: "Denied",
        img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
]

export const doctorLists = [
    {
        id: 1,
        doctorName: "Sakmad Eck",
        img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        speciality: "Anesthesiologists"
    },
    {
        id: 2,
        doctorName: "Stephen Strange",
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        speciality: "Neurologist"
    },
    {
        id: 3,
        doctorName: "Liek Mahpu Si",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        speciality: "Physician"
    },
    {
        id: 4,
        doctorName: "Chuchi Chori",
        img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        speciality: "Dentist"
    },
]

export const clinicList = [
    {
        id: 1,
        clinicName: "Ram Medicines",
        location: "Anamnagar"
    },
    {
        id: 2,
        clinicName: "Plague Doctor",
        location: "New Road"
    },
    {
        id: 3,
        clinicName: "Health Ours",
        location: "Chakrapath"
    },
    {
        id: 4,
        clinicName: "Jadibudi",
        location: "Thimi"
    },
]
