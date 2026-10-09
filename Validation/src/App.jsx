


import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if ( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/.test(formData.password)) {
      newErrors.password =
    "Use 8+ characters with uppercase, lowercase, number and special character";
    } 
   

    setErrors(newErrors);newErrors.password =
    "Use 8+ characters with uppercase, lowercase, number and special character";
    
 

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
   setFormData({
      name: "",
      email: "",
      password: "",
      
      
    })
    setErrors({})

      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-5">
          Registration Form
        </h1>

        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded mb-1"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-3">
            {errors.name}
          </p>
        )}

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full rounded mb-1"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-3">
            {errors.email}
          </p>
        )}

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full rounded mb-1"
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-3">
            {errors.password}
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 w-full rounded mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;