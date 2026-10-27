
import { useState } from "react";

function StudentManagement() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Patel", course: "BCA", email: "aarav@gmail.com" },
    { id: 2, name: "Diya Shah", course: "BBA", email: "diya@gmail.com" },
    { id: 3, name: "Rohan Mehta", course: "BCA", email: "rohan@gmail.com" },
    { id: 4, name: "Anaya Joshi", course: "B.Com", email: "anaya@gmail.com" },
    { id: 5, name: "Krish Desai", course: "BCA", email: "krish@gmail.com" },
  ]);

  const [message, setMessage] = useState("");

  function handleDelete(id) {
    const student = students.find((item) => item.id === id);

    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id)
    );

    setMessage(`${student.name} has been deleted successfully.`);
  }

  return (
    <div className="min-h-screen bg-emerald-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-center text-white shadow-lg">
          <div className="mb-3 text-4xl">🎓</div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Student Management
          </h1>
          <p className="mt-3 text-emerald-50">
            View and manage student records easily
          </p>

          <div className="mt-5 inline-block rounded-full bg-white/20 px-5 py-2 font-semibold">
            Total Students: {students.length}
          </div>
        </div>

        {/* Message */}
        {message && (
          <div
            role="status"
            className="mb-5 rounded-xl border border-emerald-200 bg-white p-4 text-sm font-medium text-emerald-800"
          >
            {message}
          </div>
        )}

        {/* Student List */}
        <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-md">
          <h2 className="mb-6 text-xl font-bold text-emerald-950">
            📋 Student Records
          </h2>

          {students.length === 0 ? (
            <div className="rounded-2xl bg-emerald-50 px-4 py-12 text-center">
              <p className="text-4xl">🌱</p>
              <h3 className="mt-3 text-lg font-bold text-emerald-900">
                No Students Found
              </h3>
              <p className="mt-2 text-sm text-emerald-700">
                All student records have been deleted.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 transition hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    {/* Student Avatar */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white shadow-sm">
                      {student.name.charAt(0)}
                    </div>

                    {/* Student Details */}
                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-lg font-bold text-emerald-950">
                        {student.name}
                      </h3>

                      <span className="mt-2 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
                        {student.course}
                      </span>

                      <p className="mt-3 break-words text-sm text-slate-600">
                        {student.email}
                      </p>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="mt-5 w-full rounded-xl border border-red-200 bg-white px-4 py-2.5 font-semibold text-red-600 transition hover:bg-red-500 hover:text-white"
                  >
                    🗑 Delete Student
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-emerald-700">
          Made with 💚 using React & Tailwind CSS
        </p>
      </div>
    </div>
  );
}

export default StudentManagement;