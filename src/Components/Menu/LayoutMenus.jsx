import { generatePath, Link } from "react-router-dom";
import { Path } from "../../Constants";

const LayoutMenus = () => {
  return (
    <div>
      <ol>
        <li>
          <Link
            to={generatePath(Path.layout, {
              article: "split-screen"
            })}
          >
            SplitScreen
          </Link>
        </li>
        <li>
          <Link
            to={generatePath(Path.layout, {
              article: "list-items"
            })}
          >
            List items
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default LayoutMenus;
