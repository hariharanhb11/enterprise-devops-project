import './App.css';

function App() {

  const services = [
    {
      name: "Frontend",
      status: "Running",
      color: "bg-green-500"
    },
    {
      name: "Backend",
      status: "Healthy",
      color: "bg-blue-500"
    },
    {
      name: "Database",
      status: "Connected",
      color: "bg-purple-500"
    },
    {
      name: "CI/CD",
      status: "Success",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-black text-white p-5 shadow-lg">

        <div className="container mx-auto flex justify-between">

          <h1 className="text-3xl font-bold">
            Enterprise DevOps Dashboard page
          </h1>

          <div className="hidden md:flex gap-6">
            <span>Dev</span>
            <span>QA</span>
            <span>Staging</span>
            <span>Production</span>
          </div>

        </div>

      </nav>

      <div className="container mx-auto p-6">

        <h2 className="text-2xl font-bold mb-6">
          Infrastructure Status
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6"
            >

              <div className={`w-4 h-4 rounded-full ${service.color}`}></div>

              <h3 className="text-xl font-bold mt-4">
                {service.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {service.status}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default App;

