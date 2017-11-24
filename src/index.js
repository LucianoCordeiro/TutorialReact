import React from 'react';
import ReactDOM from 'react-dom';


 class CommentBox extends React.Component {
   render() {
     const comments = this._getComments();
     const numberofcomments = this._getCommentsCount(comments.length);
     return( <div className="comment-box">
              <h3>Comments</h3>
              <h4 className="comment-count">{numberofcomments}</h4>
              <div className="comment-list">
              {comments}
                </div>
           </div>
         );
   }

   _getComments() {
     const commentList = [
       {id: 1, author: "Luciano Cesar", body:"We do not have another way to live, just that"},
       {id: 2, author: "Dodo Cesar", body:"Guess what I have said to my black cat"}

     ];

     return commentList.map((comment) => {
       return (<Comment
               author={comment.author}
               body={comment.body}
               key={comment.id} />);
       });
       }

    _getCommentsCount(commentCount) {
      if (commentCount === 0) {
        return "No comments yet";
      }
      else if (commentCount === 1) {
        return "1 comment";
      }
      else {
        return commentCount + " comments";
      }

   }
 }



 class Comment extends React.Component {
   render() {
     return(
       <div className="comment">
       <p className="comment-header">{this.props.author}</p>
       <p className="comment-body">{this.props.body}</p>
       <div className="footer">
           <a href="#" className="comment-footer-delete">Delete comment</a>

       </div>
     </div>);
   }
 }

 ReactDOM.render(
  <CommentBox />, document.getElementById('commentbox')
 );




class UserData extends React.Component {
  render() {
    return <div>
             <h1>Contacts</h1>
             <ul>
               <li>
                 <h2>Luciano Cordeiro</h2>
                 <a href="mailto:lucianocordeiro1991@hotmail.com">lucianocordeiro1991@hotmail.com</a>
               </li>
             </ul>
           </div>
  }
}

ReactDOM.render(
  <UserData />, document.getElementById('userdata')
);


class Calculation extends React.Component {
  render() {
    let pi = Math.PI;
    let exponentiation = 3**5;
    return <div>The value of pi is approximately {pi}
           <h3>{exponentiation}</h3></div>
  }
}

ReactDOM.render(
  <Calculation />, document.getElementById('calculation')
);

class Learnedlanguages extends React.Component {
  render() {
    const programminglanguages = ["Ruby", "JavaScript", "PHP", "Python", "TypeScript", "Kotlin"];
    return(
      <ul>{programminglanguages.map( (language) => <li>{language}</li>)}
      </ul>
  );
  }
}

ReactDOM.render(
  <Learnedlanguages />, document.getElementById('learnedlanguages')
);
