
import Student from './component/Student';

const App = () => {
 const students = [
  {
    name: "Anmol Tiwari",
    age: 20,
    course: "BTech",
    branch: "Computer Science",
    skills: ["JavaScript", "React", "Node.js"],
    isActive: true
  },
  {
    name: "Rahul Sharma",
    age: 21,
    course: "BTech",
    branch: "Information Technology",
    skills: ["HTML", "CSS", "JavaScript"],
    isActive: true
  },
  {
    name: "Priya Singh",
    age: 20,
    course: "BCA",
    branch: "Computer Applications",
    skills: ["Python", "SQL", "Java"],
    isActive: true
  },
  {
    name: "Aman Verma",
    age: 22,
    course: "BTech",
    branch: "Mechanical Engineering",
    skills: ["AutoCAD", "Python", "C++"],
    isActive: false
  },
  {
    name: "Neha Patel",
    age: 21,
    course: "BTech",
    branch: "Electronics",
    skills: ["C", "C++", "Embedded Systems"],
    isActive: true
  },
  {
    name: "Rohit Gupta",
    age: 20,
    course: "BCA",
    branch: "Computer Applications",
    skills: ["JavaScript", "React", "MongoDB"],
    isActive: true
  },
  {
    name: "Sneha Joshi",
    age: 22,
    course: "BTech",
    branch: "Information Technology",
    skills: ["Java", "Spring Boot", "MySQL"],
    isActive: false
  },
  {
    name: "Vikas Yadav",
    age: 21,
    course: "BTech",
    branch: "Civil Engineering",
    skills: ["AutoCAD", "MATLAB", "C++"],
    isActive: true
  },
  {
    name: "Kavya Sharma",
    age: 20,
    course: "BSc",
    branch: "Computer Science",
    skills: ["Python", "Django", "SQL"],
    isActive: true
  },
  {
    name: "Arjun Mehta",
    age: 23,
    course: "MCA",
    branch: "Computer Applications",
    skills: ["React", "Node.js", "MongoDB"],
    isActive: false
  }
];
  return (
    <div>
      
      {/* <State /> */}
      {/* <Student students={students} /> */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
  {students.map((student, index) => (
    <Student 
      key={index}
      students={student}
    />
  ))}
</div>
      
    </div>
  )
}

export default App
