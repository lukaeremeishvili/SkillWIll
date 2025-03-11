import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { toggleNavbar } from "../store/actions/navbarSlice";
import { fetchData } from "../store/data/fetchData";
import { Post } from "../interfaces/Post.interface";

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.navbar.isOpen);
  const data = useSelector((state: RootState) => state.data.data);
  const status = useSelector((state: RootState) => state.data.status);

  useEffect(() => {
    dispatch(fetchData("https://jsonplaceholder.typicode.com/posts"));
  }, [dispatch]);


  return (
    <div>
      <button onClick={() => dispatch(toggleNavbar())}>
        {isOpen ? "Close Navbar" : "Open Navbar"}
      </button>

      {isOpen && (
        <div>
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error loading data</p>}
          {status === "succeeded" && data && (
            <ul>
              {data.slice(0, 5).map((post: Post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
