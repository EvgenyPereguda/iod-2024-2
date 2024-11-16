import { Outlet, useParams, Link } from "react-router-dom";
import { useData } from "../hooks/useData";
import { useSearchParams } from "react-router-dom";

// save as pages/PostsPage.jsx
export default function PostsPage() {

    const secretKey = import.meta.env.VITE_SECRET_API_KEY;

  return (
    <div className="Posts">       
      <h1>Posts: {secretKey}</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  const postsData = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
  );
  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };
  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul>
      <Link to="/posts?limit=10">Load 10 Posts</Link>
      
      <div>        
        <div>Select limit: </div>
        <select onChange={handleChangeLimit}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
        </select>
      </div>
    </>
  );

  //   const postsData = useData(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //   );
  //   // the ? means only call map if postsData is not null
  //   const postList = postsData?.map((post) => (
  //     <li key={post.id}>
  //       <Link to={"/posts/" + post.id}>
  //         Post #{post.id}: {post.title}
  //       </Link>
  //     </li>
  //   ));
  //   return <ul>{postList}</ul>;
}

export function Post() {
  const { id } = useParams(); // custom hook to access dynamic params
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}
