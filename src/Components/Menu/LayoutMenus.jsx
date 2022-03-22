import { generatePath, Link } from "react-router-dom";
import { Path } from "../../Constants";

const LayoutMenus = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            to={generatePath(Path.layout, {
              article: "split-screen"
            })}
          >
            SplitScreen
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LayoutMenus;
