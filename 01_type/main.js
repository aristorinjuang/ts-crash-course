/**
 * Object Literal Type
 */
var user = {
    name: "John Doe",
    role: "administrator"
};
console.log(user);
var post = ["Lorem Ipsum", 0, new Date()];
console.log(post);
var posts = [
    post,
    ["The Magic Spell", 9, new Date()],
    ["The Magic Number", 12, new Date(2022, 3, 24)]
];
var author = {
    name: "Harry Potter",
    role: "author",
    posts: posts
};
console.log(author);
var featuredPosts = [
    ["TypeScript is awesome!", 100, new Date()],
    ["", 0, new Date()],
];
console.log(featuredPosts);
/**
 * Type from Value
 */
var setSlug = function (slug) {
    return slug.toLowerCase().replace(" ", "-");
};
var createPost = function (post, slug) {
    return { post: post, slug: slug };
};
console.log(createPost(post, setSlug(post[0])));
var printName = function (value) {
    console.log(value);
};
var printRole = function (value) {
    console.log(value);
};
var printUser = {
    name: printName,
    role: printRole
};
printUser.name("John Cena");
printUser.role("editor");
var adminModerator = {
    name: "Admin Moderator",
    role: "administrator"
};
console.log(adminModerator);
