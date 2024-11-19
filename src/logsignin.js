import "./css/logsingin.css";
export default function Login() {
  return (
    <div>
      <form className="logsignin">
        <div className="login">
          <h2>Login</h2>
          <input type="email" name="" id="" placeholder="Email@Exampel.com" />
          <input type="password" name="" id="" placeholder="password" />
        </div>
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <label for="">Remember me</label>
        </div>
        <div className="logsingin-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}


