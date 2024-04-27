class User {
    constructor(id,name,email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class Post {
    constructor(id,title,content,comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment() {
        this.comment.push()
    }
}
class postList extends Post {
    constructor(posts,title) {
        super(title)
        this.posts = [];
    }
    addPost() {
        this.posts.push(Post)
    }
    sharePost() {
        console.log(`You've shared post ${this.title} to your friend.`)
    }
}
class Comment extends Post {
    constructor(id,content,createdBy,like,title) {
        super(title)
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addLike() {
        let like = this.like +1;
        return like;
    }
}

class Facebook {
    constructor(groupList,pageList) {
        this.groupList = [];
        this.pageList = [];
    }
    addGroup() {
        this.groupList.push()
    }
    addPage() {
        this.pageList.push()
    }
}
class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}

class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
}

class Notification extends Comment {
    constructor(id,createdBy,title) {
        super(createdBy,title)
        this.id = id;
    }
    send() {
        console.log(`Notification: ${createdBy} has just commented on this post-${title}`)
    }
}