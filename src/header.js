import webtemplatesdesign from "./webtemplatesdesign.png";
import "./css/header.css";
export default function Headerweb() {
  return (
    <div className="upper-menu">
      <a className="logo" href="https://webtemplatesdesign.com/">
        <img src={webtemplatesdesign} alt="web templates design" />
      </a>

      <nav>
        <ul className="menu">
          <li>
            <a href="a">Home</a>
          </li>
          <li>
            <a href="Templates.html">Templates</a>
            <ul className="upper-meun-dropdown">
              <li>
                <a href="WebsiteTemplates.html">WordPress Themes</a>
              </li>
              <li>
                <a href="WebsiteTemplates.html">Website Templates</a>
              </li>
              <li>
                <a href="HTMLTemplates.html">HTML Templates</a>
              </li>
            </ul>
          </li>

          <li>
            <a className="active" href="connectus.html">
              Connect Us
            </a>
          </li>
          <li>
            <a href="aboutus.html">About us</a>
          </li>
        </ul>
        <form className="example" action="action_page.php">
          <input type="search" aria-label="search" />
          {/* <button type="submit"><i class="fa-sharp fa-solid fa-magnifying-glass fa-spin"
                        style="color: #1f90c5;"></i></button> */}
        </form>

        <ul className="log-sign-in">
          <li>
            <ul class="upper-meun-lang">
              <li>
                <a href="./logsignin.js">Lang</a>
                <ul className="upper-meun-dropdown-lang">
                  <li>
                    <a href="./index.html" class="language-link" data-lang="en">
                      English
                    </a>
                  </li>
                  <li>
                    <a href="./AR/AR.html" class="language-link" data-lang="ar">
                      العربية
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li id="login">
            <a href="login.html">Log In</a>
          </li>
          <li id="SignUp">
            <a href="SignUp.html">Sign Up </a>
          </li>
          <li id="dark-mode-toggle">
            <i className="fas fa-moon"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
}
