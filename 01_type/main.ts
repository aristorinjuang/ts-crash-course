/**
 * Object Literal Type
 */

type User = {
  name: string;
  role: "administrator" | "editor" | "author";
}

let user: User = {
  name: "John Doe",
  role: "administrator"
}

console.log(user);


/**
 * Tuple Type
 */

type Post = [
  title: string,
  likes: number,
  createdAt: Date,
]

let post: Post = ["Lorem Ipsum", 0, new Date()];

console.log(post);


/**
 * Intersection Types
 */

type Author = User & { posts: Post[] }

let posts: Post[] = [
  post,
  ["The Magic Spell", 9, new Date()],
  ["The Magic Number", 12, new Date(2022, 3, 24)]
]
let author: Author = {
  name: "Harry Potter",
  role: "author",
  posts: posts,
}

console.log(author);


/**
 * Type Indexing
 */
type Posts = Author["posts"]

let featuredPosts: Posts = [
  ["TypeScript is awesome!", 100, new Date()],
  ["", 0, new Date()],
]

console.log(featuredPosts);


/**
 * Type from Value
 */

const setSlug = (slug: string): string => {
  return slug.toLowerCase().replace(" ", "-")
}

type Slug = ReturnType<typeof setSlug>

const createPost = (post: Post, slug: Slug): {post: Post, slug: Slug} => {
  return {post, slug}
}

console.log(createPost(post, setSlug(post[0])));


/**
 * Mapped Types
 */

type Print<Type> = {
  [Property in keyof Type]: (value: Type[Property]) => void;
}

let printName = (value: string): void => {
  console.log(value);
}

let printRole = (value: "administrator" | "editor" | "author"): void => {
  console.log(value);
}

let printUser: Print<User> = {
  name: printName,
  role: printRole
}

printUser.name("John Cena")
printUser.role("editor")


/**
 * Conditional Types
 */

type Administrator = { name: string, role: "administrator" }
type Editor = { name: string, role: "editor" }
type Moderator = Administrator | Editor
type IsAdministrator<Moderator> = Moderator extends { role: "administrator" } ? Moderator : never
type AdminModerator = IsAdministrator<Moderator>

let adminModerator: AdminModerator = {
  name: "Admin Moderator",
  role: "administrator"
}

console.log(adminModerator)