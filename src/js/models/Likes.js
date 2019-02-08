export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = {id,title, author, img };
        this.likes.push(like);

        //persisit data in local storage
        this.persisitData();
        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1 )

        //persisit data in localstorage
        this.persisitData();
    }
    
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id)  !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persisitData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));

        //restoring likes from local storage
        if (storage) this.likes = storage
    }
}