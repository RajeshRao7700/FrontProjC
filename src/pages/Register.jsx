import { useEffect, useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    conferenceId: "",
    registeredAt: ""
  });

  const [conferences, setConferences] = useState([]);

  const BASE_URL = "https://backendprojc.onrender.com";

  // Fetch conferences
//   useEffect(() => {
//     fetch(`${BASE_URL}/api/conferences`)
//       .then(res => res.json())
//       .then(data => setConferences(data))
//       .catch(err => console.error(err));
//   }, []);

useEffect(() => {
  fetch(`${BASE_URL}/api/conferences`)
    .then(res => {
      console.log("STATUS:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("DATA:", data);
      setConferences(data);
    })
    .catch(err => console.error("ERROR:", err));
}, []);

  // Handle change
  const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]:
      e.target.name === "conferenceId"
        ? Number(e.target.value)
        : e.target.value
  });
};

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert datetime-local → ISO format
    const payload = {
      ...form,
      registeredAt: new Date(form.registeredAt).toISOString()
    };

    try {
      const response = await fetch(`${BASE_URL}/api/registrations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log(data);

      alert("Registered successfully!");
    } catch (error) {
      console.error(error);
      alert("Error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        {/* Conference dropdown */}
        <select
  name="conferenceId"
  value={form.conferenceId}
  className="w-full mb-3 p-2 border rounded"
  onChange={handleChange}
  required
>
  <option value="">Select Conference</option>

  {conferences && conferences.length > 0 &&
    conferences.map((conf) => (
      <option key={conf.id} value={conf.id}>
        {conf.name}
      </option>
    ))
  }
</select>

        {/* Registered At */}
        <input
          type="datetime-local"
          name="registeredAt"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}