import SideBar from "./components/SideBar";
import MainDashboard from "./components/UsersDashboard/MainDashboard";
import LoginForm from "./components/LoginForm/LoginForm";
function App() {
  return (
    <div className="px-1 font-Poppins flex">
      <SideBar />
      <MainDashboard />
      <LoginForm />
    </div>
  );
}

export default App;
