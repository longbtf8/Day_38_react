import { NavLink } from "react-router";
const items = [
  { path: "/", title: "Home" },
  { path: "/counter", title: "Counter" },
  { path: "/countDown", title: "Count Down" },
  { path: "/shoppingCart", title: "Shopping Cart" },
];

const Header = () => {
  return (
    <>
      <nav className="pb-4 border-b-2">
        <ul className="flex">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-blue-500 bg-black" : ""} p-2`
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Header;
