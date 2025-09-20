import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";

function App() {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-6 d-flex align-items-center justify-content-center">
          <ControlledForm />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <UncontrolledForm />
        </div>
      </div>
    </div>
  );
}

export default App;
