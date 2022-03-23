/**
 * Generics
 */
var user = {
    name: "John Doe",
    role: "administrator"
};
console.log(user);
var post1 = {
    name: user.name,
    role: user.role,
    title: "Lorem Ipsum",
    likes: 0,
    createdAt: new Date()
};
console.log(post1);
var post2 = {
    name: user.name,
    role: user.role,
    title: "Lorem Ipsum",
    likes: 0,
    createdAt: new Date()
};
console.log(post2);
var post3 = {
    title: "Lorem Ipsum",
    createdAt: new Date()
};
var parameteredPost = {
    data: {
        title: "Lorem Ipsum",
        likes: 0,
        createdAt: new Date()
    }
};
console.log(parameteredPost);
