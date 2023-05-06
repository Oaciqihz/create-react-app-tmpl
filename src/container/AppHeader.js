import { Link } from "react-router-dom";
import { menu } from "./menu";
import { Button } from "antd";

export default function AppHeader() {

    return (
        <div className="content">
            <ul>
                <Link to="/">
                    <li>
                        <div className="img">
                            {/* <img src="" alt="" /> */}
                            REACT-TMPL
                        </div>
                    </li>
                </Link>
                {
                    menu.map(e => 
                        <Link to={e.href}>
                            <li>
                                {e.label}
                            </li>
                        </Link>
                    )
                }
            </ul>
            <div className="header-user">
                <div className="toggle-lang">
                    <div className="img">
                        <img src={require("@/images/toggle-lang.png")} alt="" />
                    </div>
                </div>
                <div className="user">
                    <Button>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}