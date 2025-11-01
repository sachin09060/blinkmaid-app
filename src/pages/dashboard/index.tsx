import { BarChart3, Users, DollarSign, Activity } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { id: 1, title: "Total Users", value: "1,240", icon: <Users size={22} /> },
    { id: 2, title: "Revenue", value: "$9,730", icon: <DollarSign size={22} /> },
    { id: 3, title: "Active Events", value: "34", icon: <BarChart3 size={22} /> },
    { id: 4, title: "Pending Tasks", value: "7", icon: <Activity size={22} /> },
  ];

  const tableData = [
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Organizer", status: "Inactive" },
    { id: 3, name: "Alice Brown", role: "User", status: "Active" },
    { id: 4, name: "Bob Wilson", role: "User", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add New
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h3 className="text-xl font-semibold">{item.value}</h3>
            </div>
            <div className="text-blue-600">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-700 font-medium">Name</th>
              <th className="p-3 text-left text-gray-700 font-medium">Role</th>
              <th className="p-3 text-left text-gray-700 font-medium">Status</th>
              <th className="p-3 text-center text-gray-700 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">{row.name}</td>
                <td className="p-3">{row.role}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : row.status === "Inactive"
                        ? "bg-gray-100 text-gray-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
