function solve() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let output = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;

      if (this.comments.length > 0) {
        output += `\nComments:\n${this.comments
          .map((x) => ` * ${x}`)
          .join("\n")}`;
      }

      return output;
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      return `${super.toString()}\nViews: ${this.views}`;
    }
  }

  return { Post, SocialMediaPost, BlogPost };
}

// Points 100/100

// function solve() {
//   function Post(title, content) {
//     this.title = title;
//     this.content = content;
//   }

//   Post.prototype.toString = function () {
//     return `Post: ${this.title}\nContent: ${this.content}`;
//   };

//   function SocialMediaPost(title, content, likes, dislikes) {
//     Post.call(this, title, content);
//     this.likes = likes;
//     this.dislikes = dislikes;
//     this.comments = [];
//   }

//   SocialMediaPost.prototype = Object.create(BlogPost.prototype);
//   SocialMediaPost.prototype.constructor = SocialMediaPost;

//   SocialMediaPost.prototype.addComment = function (comment) {
//     this.comments.push(comment);
//   };

//   SocialMediaPost.prototype.toString = function () {
//     let output = `${Post.prototype.toString.call(this)}\nRating: ${
//       this.likes - this.dislikes
//     }`;

//     if (this.comments.length > 0) {
//       output += `\nComments:\n${this.comments
//         .map((x) => ` * ${x}`)
//         .join("\n")}`;
//     }

//     return output;
//   };

//   function BlogPost(title, content, views) {
//     Post.call(this, title, content);
//     this.views = views;
//   }

//   BlogPost.prototype.toString = function () {
//     return `${Post.prototype.toString.call(this)}\nViews: ${this.views}`;
//   };

//   BlogPost.prototype = Object.create(Post.prototype);
//   BlogPost.prototype.constructor = BlogPost;

//   return { Post, SocialMediaPost, BlogPost };
// }

const classes = solve();
const post = new classes.Post("Post", "Content");
const scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

console.log(post.toString());

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
