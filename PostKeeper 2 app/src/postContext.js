import { useState, useContext, createContext } from "react";

const postContext = createContext();

export const usePostsValue = () => {
  const value = useContext(postContext);
  return value;
};

export const PostContextProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const resetPosts = () => setSavedPosts([]);

  const savePost = (post) => {
    const isSaved = savedPosts.find((p) => p.id === post.id);
    if (isSaved) {
      return alert("Post is already saved.");
    }
    setSavedPosts((prev) => [post, ...prev]);
  };

  const unSave = (postId) => {
    setSavedPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  return (
    <postContext.Provider
      value={{ savedPosts, setSavedPosts, resetPosts, savePost,unSave}}
    >
      {children}
    </postContext.Provider>
  );
};
