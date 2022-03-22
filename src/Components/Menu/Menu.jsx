import { generatePath, Link } from "react-router-dom";
import { Path } from "../../Constants";

const Menus = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={generatePath(Path.layout)}>Layout component</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
