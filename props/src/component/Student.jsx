const Student = ({ students}) => {
  return (
    <div className="border p-5 rounded-xl shadow">
      <h1 className="text-xl font-bold">
        {students.name}
      </h1>

      <p>Age: {students.age}</p>
      <p>Course: {students.course}</p>
      <p>Branch: {students.branch}</p>
    </div>
  );
};
export default Student