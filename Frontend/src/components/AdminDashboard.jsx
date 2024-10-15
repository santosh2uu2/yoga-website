import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const response = await axios.get('http://localhost:4001/enrollments');
        setEnrollments(response.data);
      } catch (error) {
        console.error('Error fetching enrollments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/enrollments/${id}`);
      setEnrollments(enrollments.filter(enrollment => enrollment._id !== id));
    } catch (error) {
      console.error('Error deleting enrollment:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-green-600 text-white py-4 mb-6">
        <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Enrollments</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Course</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map(enrollment => (
              <tr key={enrollment._id}>
                <td className="py-2 px-4 border-b">{enrollment.name}</td>
                <td className="py-2 px-4 border-b">{enrollment.email}</td>
                <td className="py-2 px-4 border-b">{enrollment.course}</td>
                <td className="py-2 px-4 border-b">{new Date(enrollment.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDelete(enrollment._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
