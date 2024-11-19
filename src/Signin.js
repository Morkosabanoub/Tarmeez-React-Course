import "./css/logsingin.css";
export default function Signin() {
  return (
    <div>
      <form className="logsignin">
        <div className="Signin">
          <h2>Signin</h2>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="Email" name="" id="" placeholder="Email@Exampel.com" />
          <input type="Email" name="" id="" placeholder="Repeat Email" />
          <input type="tel" name="" id="" placeholder="Phone Number" />
          <input type="Password" name="" id="" placeholder="Password" />
          <input type="Password" name="" id="" placeholder="Repeat Password" />
        </div>
        <div className="PaymentMethod">
          <select>
            <option className="paypal">paypal</option>
            <option className="">paypal</option>
            <option className="">paypal</option>
          </select>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <label for="">Remember me</label>
        </div>

        <div className="logsingin-button">
          <button type="submit">Signin</button>
        </div>
      </form>
    </div>
  );
    
}