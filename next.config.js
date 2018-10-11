// next.config.js
const withSass = require("@zeit/next-sass");
const notesApi = require('./lib/notes/index.js');

const debug = process.env.NODE_ENV !== "production";

async function getNotesList () {
    let res = await notesApi.fetchNotes();
    return res.all;
}
let nextConfigJs = {
  exportPathMap: async function(defaultPathMap) {
    let pages = {
        "/": { page: "/" },
        "/papers": { page: "/papers" },
        "/books": { page: "/books" }
    };

    let postPages = {};
    let allPosts = await getNotesList();
    allPosts.map(post => {
      postPages[`/post/${post.key}`] = {
        page: "/post",
        query: { id: post.key }
      };
    });

    return Object.assign(pages, postPages);
  },
  // assetPrefix: !debug ? "/Next-gh-page-example/" : ""
};
module.exports = withSass(nextConfigJs)
