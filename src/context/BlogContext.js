import createDataContex from './createDataContex';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callBack) => {
    dispatch({
      type: 'add_blogpost',
      payload: { title, content },
    });
    callBack();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogPost', payload: id });
  };
};

export const { Context, Provider } = createDataContex(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
