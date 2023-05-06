import { Link } from "react-router-dom";
import { Web3Button } from '@web3modal/react';
import { menu } from "./menu";
import { Button } from "antd";

export default function AppHeader() {

    return (
        <div className="content">
            <ul>
                <Link to="/">
                    <li>
                        <div className="img">
                            <img src="" alt="" />
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
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="user">
                    <Button>Connect Wallet</Button>
                </div>
            </div>
        </div>
    )
}