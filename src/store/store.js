import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      books: {
        oldTestament: [
          { title: "genesis", chapters: 50 },
          { title: "exodus", chapters: 40 },
          { title: "leviticus", chapters: 27 },
          { title: "numbers", chapters: 36 },
          { title: "deuteronomy", chapters: 34 },
          { title: "joshua", chapters: 24 },
          { title: "judges", chapters: 21 },
          { title: "ruth", chapters: 4 },
          { title: "1 samuel", chapters: 31 },
          { title: "2 samuel", chapters: 24 },
          { title: "1 kings", chapters: 22 },
          { title: "2 kings", chapters: 25 },
          { title: "1 chronicles", chapters: 29 },
          { title: "2 chronicles", chapters: 36 },
          { title: "ezra", chapters: 10 },
          { title: "nehemiah", chapters: 13 },
          { title: "esther", chapters: 10 },
          { title: "job", chapters: 42 },
          { title: "psalm", chapters: 150 },
          { title: "proverbs", chapters: 31 },
          { title: "ecclesiastes", chapters: 12 },
          { title: "songs of solomon", chapters: 8 },
          { title: "isiah", chapters: 66 },
          { title: "jeremiah", chapters: 52 },
          { title: "lamentations", chapters: 5 },
          { title: "ezekiel", chapters: 48 },
          { title: "daniel", chapters: 12 },
          { title: "hosea", chapters: 14 },
          { title: "joel", chapters: 3 },
          { title: "amos", chapters: 9 },
          { title: "obadiah", chapters: 1 },
          { title: "jonah", chapters: 4 },
          { title: "micah", chapters: 7 },
          { title: "nahum", chapters: 3 },
          { title: "habakkuk", chapters: 3 },
          { title: "zepheniah", chapters: 3 },
          { title: "haggai", chapters: 2 },
          { title: "zachariah", chapters: 14 },
          { title: "malachi", chapters: 4 },
        ],
        newTestament: [
          { title: "mathew", chapters: 28 },
          { title: "mark", chapters: 16 },
          { title: "luke", chapters: 24 },
          { title: "john", chapters: 21 },
          { title: "acts of the apostles", chapters: 28 },
          { title: "romans", chapters: 16 },
          { title: "1 corinthians", chapters: 16 },
          { title: "2 corinthians", chapters: 13 },
          { title: "galatians", chapters: 6 },
          { title: "ephisians", chapters: 6 },
          { title: "philippians", chapters: 4 },
          { title: "colossians", chapters: 4 },
          { title: "1 thessalonians", chapters: 5 },
          { title: "2 thessalonians", chapters: 3 },
          { title: "1 timothy", chapters: 6 },
          { title: "2 timothy", chapters: 4 },
          { title: "titus", chapters: 3 },
          { title: "philemon", chapters: 1 },
          { title: "hebrew", chapters: 13 },
          { title: "james", chapters: 5 },
          { title: "1 peter", chapters: 5 },
          { title: "2 peter", chapters: 5 },
          { title: "1 john", chapters: 5 },
          { title: "2 john", chapters: 1 },
          { title: "3 john", chapters: 1 },
          { title: "jude", chapters: 1 },
          { title: "revelations", chapters: 22 },
        ],
      },
      passage: null,
    };
  },
  mutations: {
    setPassage(state, passage) {
      state.passage = passage;
    },
  },
  getters: {
    getChapters: (state) => (title) => {
      let inOld = state.books.oldTestament.find((book) => book.title == title);
      let inNew = state.books.newTestament.find((book) => book.title == title);
      if (inOld) {
        return inOld;
      } else {
        return inNew;
      }
    },
  },
  actions: {
    fetchPassage({ commit }, payloads) {
      fetch(`https://bible-api.com/${payloads.book}:${payloads.chapter}`)
        .then((res) => res.json())
        .then((data) => commit("setPassage", data))
        .catch((err) => console.log(err.message));
    },
  },
});

export default store;
