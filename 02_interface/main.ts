/**
 * Generics
 */

type Role = "administrator" | "editor" | "author";

interface User<Role> {
  name: string;
  role: Role;
}

let user: User<Role> = {
  name: "John Doe",
  role: "administrator"
}

console.log(user);


/**
 * Extending Interface
 */

interface Post extends User<Role> {
  title: string;
  likes: number;
  createdAt: Date;
}

let post1: Post = {
  name: user.name,
  role: user.role,
  title: "Lorem Ipsum",
  likes: 0,
  createdAt: new Date()
}

console.log(post1);


/**
 * Intersection Interface
 */

interface OnlyPost {
  title: string;
  likes: number;
  createdAt: Date;
}

let post2: User<Role> & OnlyPost = {
  name: user.name,
  role: user.role,
  title: "Lorem Ipsum",
  likes: 0,
  createdAt: new Date(),
}

console.log(post2);


/**
 * Optional & Readonly Properties
 */

interface StrictPost {
  title: string;
  likes?: number;
  readonly createdAt: Date;
}

let post3: StrictPost = {
  title: "Lorem Ipsum",
  createdAt: new Date()
}

// post3.createdAt = new Date(); // <- It will cause an error.


/**
 * Interface with Parameters (Generics)
 */

type ParameterPost = {
  title: string,
  likes: number,
  createdAt: Date,
}

interface ParameteredPost<ParameterPost> {
  data: ParameterPost;
}

let parameteredPost: ParameteredPost<ParameterPost> = {
  data: {
    title: "Lorem Ipsum",
    likes: 0,
    createdAt: new Date()
  }
}

console.log(parameteredPost);