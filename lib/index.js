let index = {
  docs: new Object(),
  store: new Array(),
  query: "",
  getLanguage: function (key) {
    const languages = {
      go: "Golang",
      js: "JavaScript",
      rs: "Rust",
      sh: "Shell",
    };
    return languages[key] ? languages[key] : key;
  },
  split:
    /**
     * Split text to words.
     * Eg. "GetDirectorySize" => [ 'Get', 'Directory', 'Size' ]
     * @param {String} query
     * @returns Array
     */
    function (query) {
      let split = [];
      let last_index = 0;
      for (let i = 0; i < query.length; i++) {
        const char = query.charAt(i);
        if (char.toUpperCase() == char && i > 0) {
          split.push(query.slice(last_index, i));
          last_index = i;
        }
      }
      if (last_index < query.length - 1) {
        split.push(query.slice(last_index, query.length));
      }
      return split;
    },
  loadIndex:
    /**
     * Update documents
     * @param {Array} data
     * @param {Object} docs
     */
    function (data, docs) {
      this.store = data;
      this.docs = docs;
    },
  tokenize:
    /**
     * Extract string to 2-gram
     * @param {Array | Array} query
     * @param {Function} callback
     */
    function (query, callback) {
      if (!Array.isArray(query)) {
        query = [query];
      }

      query.forEach((queryItem) => {
        this.split(queryItem).forEach((item) => {
          if (item.length == 2) {
            callback(item);
            return;
          }

          for (let i = 0; i < item.length - 2; i++) {
            const val = item.slice(i, i + 2);
            callback(val.toLowerCase());
          }
        });
      });
    },
  add:
    /**
     * Add document to index
     * @param {Object}
     */
    function (document) {
      let { slug, lang, id } = document;
      this.store.push(document);
      let contents = [slug, lang, this.getLanguage(lang)];
      this.tokenize(contents, (value) => {
        if (!this.docs[value]) {
          this.docs[value] = [id];
        } else {
          this.docs[value].push(id);
        }
      });
    },
  search:
    /**
     * Search document given query
     * @param {string} query
     * @returns {Array}
     */
    function (query, limit = 12) {
      this.query = query;
      let result = {};
      let total = 0;
      this.tokenize(query, function (value) {
        let doc = index.docs[value];
        if (doc) {
          doc.forEach((id) => {
            if (total == limit) {
              return;
            }

            if (!result[id]) {
              total += 1;
              result[id] = { ...index.store[id - 1], freq: 1 };
            } else {
              let new_feq = result[id].freq + 1;
              result[id] = { ...result[id], freq: new_feq };
            }
          });
        }
      });

      let data = Object.keys(result).map((key) => result[key]);
      data.sort((a, b) => b.freq - a.freq);

      return data;
    },
};

// const store = require("../../cheatsheets/store.json");
// const ivx = require("../../cheatsheets/index.json");

// index.loadIndex(store, ivx)

// console.log(store.length)
// console.log(index.search("create file to string").length)

module.exports = index;
