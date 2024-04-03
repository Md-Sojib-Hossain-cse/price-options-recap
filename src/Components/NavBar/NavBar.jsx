import { useState } from "react";
import Link from "../Link/Link";
import { MdOutlineMenuOpen , MdOutlineClose} from "react-icons/md";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/contact', name: 'Contact' }
    ];
    return (
        <nav>
            <div onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdOutlineClose  className="text-2xl lg:hidden"/> : <MdOutlineMenuOpen className="text-2xl lg:hidden" />
                }
                
            </div>
            <ul className={`lg:flex lg:justify-center gap-6 ${open ? "left-0" : "-left-60"} duration-1000 absolute lg:static bg-slate-200 rounded-lg text-black shadow-lg px-3 py-2`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;