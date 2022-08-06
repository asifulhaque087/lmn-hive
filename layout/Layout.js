import { Navigation } from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
