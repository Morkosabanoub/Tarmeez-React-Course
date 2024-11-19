import "./App.css";
import main from "./css/main.css";
import Headerweb from "./header";
import Mainbox from "./mainbox";
import Footer from "./footer";
import Login from "./logsignin";
import Signin from"./Signin"
function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Headerweb />
        </header>
      </div>

      <div>
        <body className="App-body">
          <Mainbox />
        </body>
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Login />
      </div>
      <Signin/>
    </div>
  );
}

export default App;
