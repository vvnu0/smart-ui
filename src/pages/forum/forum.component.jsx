import React from 'react';
import postComment from './postcomment.png';
const Forum = () => {
  return (
    <div>
      <h2>Discussion forum on city issues</h2>
	  <h3>Adding suggestions, upvoting suggestions </h3>
      <h4>Coming Soon</h4>
	  <div>
          <img src={postComment} alt="City Issues"/>
       </div>
    </div>
  );
};

export default Forum;