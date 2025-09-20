import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import StatefulUsers from "./components/StatefulUsers";

function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Controlled Form */}
        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start justify-content-center p-3">
          <ControlledForm />
        </div>

        {/* Uncontrolled Form */}
        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start justify-content-center p-3">
          <UncontrolledForm />
        </div>

        {/* Users List */}
        <div className="col-12 col-md-12 col-lg-4 d-flex align-items-start justify-content-center p-3 overflow-auto">
          <StatefulUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
