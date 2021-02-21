class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    };

    get likes() {
        if (this._likes.length == 0){
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1){
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }

    like (username){
        let liked = this._likes.find(u => u.username === username);

        if(liked){
            throw new Error(`You can't like the same story twice!`)
        }

        if (username === this.creator){
            throw new Error(`You can't like your own story!`)
        }

        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike (username){
        if (!this._likes.some(u => u == username)){
            throw new Error(`You can't dislike this story!`)
        }

        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`
    }

    comment (username, content, id){
        if (!this._comments.some(c => c.id == id) || id === undefined){
            let comment = {id: this._comments.length + 1, username, content, replies : []}
            this._comments.push(comment)
            return `${username} commented on ${this.title}`
        } else {
            const [comment] = this._comments.filter(c => c.id == id);
            comment.replies.push({ id: comment.id + (comment.replies.length + 1) * .1, username, content });
            return `You replied successfully`
        }
    }

    toString(arg){
        let result = `Title: ${this.title}\n`
        result += `Creator: ${this.creator}\n`
        result += `Likes: ${this._likes.length}\n`
        result += `Comments:\n`
        
        if (arg === 'asc'){
            let sorted = this._comments.sort((a, b) => a.id - b.id)
            sorted.forEach(c=> {
                result += `-- ${c.id}. ${c.username}: ${c.content}\n`;
                c.replies.sort((a,b) => a.id - b.id).forEach(r => {
                    result+= `--- ${r.id}. ${r.username}: ${r.content}`
                });
            })
        }
        if (arg === 'desc'){
            let sorted = this._comments.sort((a, b) => b.id - a.id);
            sorted.forEach(c=> {
                result += `-- ${c.id}. ${c.username}: ${c.content}\n`;
                c.replies.sort((a,b) => b.id - a.id).forEach(r => {
                    result+= `--- ${r.id}. ${r.username}: ${r.content}\n`
                });
            })
        }
        if (arg === 'username'){
            let sorted = this._comments.sort((a, b) => a.username.localeCompare(b.username));
            sorted.forEach(c=> {
                result += `-- ${c.id}. ${c.username}: ${c.content}\n`;
                c.replies.sort((a,b) => a.username.localeCompare(b.username)).forEach(r => {
                    result+= `--- ${r.id}. ${r.username}: ${r.content}\n`
                });
            })
        }

        
        return result.trim()
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));