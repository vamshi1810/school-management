import React, { useEffect, useState } from "react";
import withAuth from "../components/withAuth";
import { app } from "../firebase";
import {
  ref,
  set,
  push,
  getDatabase,
  onValue,
  update,
} from "firebase/database";
import { CheckIcon, PlusCircleIcon, UserIcon, XMarkIcon } from "@heroicons/react/16/solid";
import Card from "../components/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BarComponent from "../shared/BarComponent";
import ChartComponent from "../shared/ChartComponent";


const db = getDatabase(app);

const studentsCardData = [
  {
    title: "Total Students",
    count: 400,
    icon: <UserIcon className="h-6 w-6 text-white" />,
  },
  {
    title: "Students Present",
    count: 50,
    icon: <CheckIcon className="h-6 w-6 text-white" />,
  },
  {
    title: "Students Absent",
    count: 50,
    icon: <XMarkIcon className="h-6 w-6 text-white" />,
  },
  {
    title: "New Admission",
    count: 50,
    icon: <PlusCircleIcon className="h-6 w-6 text-white" />,
  },
];

const Students = () => {
  const studentPieInfo ={
    labels: [
      "Active",
      "In-Active",
     
     
    ],
    datasets: [
      {
        label: "Students Present",
        data: [320,300], // Data for each day
        backgroundColor: "rgba(0, 255, 0,0.5)", // Bar color
        borderColor: "rgba(0, 255, 0,0.2)", // Border color
        borderWidth: 1, // Border width
      },
      
    ],
  }
  const studentInfo = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
     
    ], // X-Axis Labels
    datasets: [
      {
        label: "Students Present",
        data: [320, 310, 325, 330, 340, 380], // Data for each day
        backgroundColor: "rgba(0, 255, 0,0.5)", // Bar color
        borderColor: "rgba(0, 255, 0,0.2)", // Border color
        borderWidth: 1, // Border width
      },
      {
        label: "Students Absent",
        data: [20, 50, 5, 25, 25, 25],
        backgroundColor: "rgba(255, 0, 0,0.5)", // Bar color
        borderColor: "rgba(255, 0, 0,0.2)", // Border color
        borderWidth: 1, // Border width
      },
    ],
     options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Student Attendance This Week", // Title for the chart
        },
        tooltip: {
          enabled: true, // Enable tooltips on hover
        },
      },
      scales: {
        y: {
          beginAtZero: true, // Start the y-axis at zero
        },
      },
    }
  };
  const [students, setStudents] = useState([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState(null);

  const handleClose = () => {
    setShow(false);
    setIsEdit(false);
    setStudentFormData({
      fname: "",
      lname: "",
      fatherName: "",
      motherName: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const handleShow = () => setShow(true);

  const [studentFormData, setStudentFormData] = useState({
    fname: "",
    lname: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleEdit = (student) => {
    setStudentFormData(student);
    setCurrentStudentId(student.id);
    setIsEdit(true);
    handleShow();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const studentsRef = ref(db, "students");

      if (isEdit && currentStudentId) {
        const updateStudentRef = ref(db, `students/${currentStudentId}`);
        await update(updateStudentRef, {
          ...studentFormData,
        });
        console.log("Student data successfully updated!");
      } else {
        // Add new student
        const newStudentRef = push(studentsRef);
        await set(newStudentRef, {
          ...studentFormData,
        });
        console.log("Data successfully saved to Realtime Database!");
      }

      handleClose();
    } catch (error) {
      console.error("Error writing data to the Realtime Database:", error);
    }
  };

  useEffect(() => {
    const studentsRef = ref(db, "students");

    onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const studentsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setStudents(studentsArray);
      } else {
        setStudents([]);
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-1">
        {studentsCardData.map((card, id) => (
          <Card key={id} cardData={card} />
        ))}
      </div>
   

      <div className="grid justify-end p-4">
        <Button variant="primary" onClick={handleShow}>
          Add Student
        </Button>
      </div>

      <div className="relative overflow-x-auto mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Father Name
              </th>
              <th scope="col" className="px-6 py-3">
                Mother Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr
                  key={student.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{student.fname}</td>
                  <td className="px-6 py-4">{student.lname}</td>
                  <td className="px-6 py-4">{student.fatherName}</td>
                  <td className="px-6 py-4">{student.motherName}</td>
                  <td className="px-6 py-4">{student.phone}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">
                    <a
                      onClick={() => handleEdit(student)}
                      className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-2 text-center">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 gap-4">
     
     
     <div className="mt-4">
       <BarComponent studentInfo={studentInfo}></BarComponent>
     </div>
     <div className="mt-4">
     <ChartComponent></ChartComponent>
     </div>
     </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit Student" : "Add Student"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="mb-2">
                <label
                  htmlFor="fname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your first name"
                  value={studentFormData.fname}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-2">
                <label
                  for="lname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  class="bg-gray-50 border w-full border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your last name"
                  value={studentFormData.lname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div class="mb-2">
                <label
                  for="fatherName"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Father Name
                </label>
                <input
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter father name"
                  value={studentFormData.fatherName}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-2">
                <label
                  for="motherName"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mother Name
                </label>
                <input
                  type="text"
                  name="motherName"
                  id="motherName"
                  class="bg-gray-50 border w-full border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter mother name"
                  value={studentFormData.motherName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div class="mb-2">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter mobile number"
                  value={studentFormData.phone}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border w-full border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter email"
                  value={studentFormData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div class="mb-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  class="bg-gray-50 border w-full border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter address"
                  value={studentFormData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {isEdit ? "Update" : "Save"} Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Students;
