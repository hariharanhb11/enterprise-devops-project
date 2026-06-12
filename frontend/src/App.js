import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [health, setHealth] = useState({});
  const [pipeline, setPipeline] = useState({});

  useEffect(() => {

    fetchHealth();
    fetchPipeline();

  }, []);

  const fetchHealth = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/health"
      );

      setHealth(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchPipeline = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/pipeline"
      );

      setPipeline(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container">

      <header className="hero">

        <h1>Enterprise DevOps Dashboard - Webpage </h1>

        <p>
          GitHub Actions + Docker + Self Hosted Runner
        </p>

      </header>

      <div className="cards">

        <div className="card">

          <h2>Backend Health</h2>

          <p>
            Status:
            <span className="success">
              {health.status}
            </span>
          </p>

          <p>
            Service:
            <span>
              {health.service}
            </span>
          </p>

          <p>
            Environment:
            <span>
              {health.environment}
            </span>
          </p>

        </div>

        <div className="card">

          <h2>CI/CD Pipeline</h2>

          <p>
            Pipeline:
            <span>
              {pipeline.pipeline}
            </span>
          </p>

          <p>
            Status:
            <span className="running">
              {pipeline.status}
            </span>
          </p>

          <div className="stages">

            <div className="stage">
              Build
            </div>

            <div className="stage">
              Test
            </div>

            <div className="stage">
              Docker
            </div>

            <div className="stage">
              Deploy
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default App;

