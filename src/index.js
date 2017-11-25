import React from 'react';
import ReactDOM from 'react-dom';


 class CommentBox extends React.Component {

   constructor() {
     super();
     this.state = {
       showComments: false,
       comments: [
         {id: 1, author: "Luciano Cesar", body:"We do not have another way to live, just that"},
         {id: 2, author: "Dodo Cesar", body:"Guess what I have said to my black cat"}
       ]
     };
   }

   render() {
     const comments = this._getComments();
     const numberofcomments = this._getCommentsCount(comments.length);
     let commentNodes;
     if (this.state.showComments) {
       commentNodes = <div className="comment-list">{comments}</div>;
     }
     let buttonText = "Show comments";
     if (this.state.showComments) {
       buttonText = "Hide comments";
     }
     return( <div className="comment-box">
              <CommentForm addComment={this._addComment.bind(this)}/>
              <h3>Comments</h3>
              <h4 className="comment-count">{numberofcomments}</h4>
              <button onClick = {this._handleClick.bind(this)}>{buttonText}</button>
              {commentNodes}
           </div>
         );
   }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({comments: this.state.comments.concat(comment)});
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    })
  }

   _getComments() {
     return this.state.comments.map((comment) => {
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

 class CommentForm extends React.Component {
   render() {
     return (
       <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
         <label>Join the discussion</label>
         <div className="comment-form-fields">
           <input placeholder="Name: " ref={(input) => this._author = input}/>
           <textarea placeholder="Comment: " ref={(textarea) => this._body = textarea}></textarea>
         </div>
         <div className="comment-form-actions">
           <button type="submit">
             Post comment
           </button>
         </div>
       </form>
     );
   }

   _handleSubmit(event) {
     event.preventDefault();

     let author = this._author;
     let body = this._body;
     this.props.addComment(author.value, body.value);
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
