const wn_synset = require('../../../src/db/wn_synset')

const set_word = new Set()
const word_list = []

for (let obj of wn_synset) {
    set_word.add(obj.word)
}

for (word of set_word) {
    word_list.push(word)
}

let suggestions = word_list
