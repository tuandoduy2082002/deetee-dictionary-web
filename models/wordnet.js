const wn_gloss = require('./WordNet/wn_gloss')
const wn_synset = require('./WordNet/wn_synset')

const set_word = new Set()
const word_list = []

for (let obj of wn_synset) {
    set_word.add(obj.word)
}

for (word of set_word) {
    word_list.push(word)
}


const handle = (word) => {
    if (!word_list.includes(word)) {
        return null;
    }
    const type_set = new Set()
    const type_list = []
    const list_id = []
    const id_gloss = new Map()
    const id_type = new Map()
    // set_type & list_id
    for (let obj of wn_synset) {
        if (obj.word === word) {
            type_set.add(obj.ss_type)
            list_id.push(obj.synset_id)
            id_type.set(obj.synset_id, obj.ss_type)
        }
    }

    for (let s of type_set) {
        type_list.push(s)
    }

    // id_gloss
    for (let obj of wn_gloss) {
        if (list_id.includes(obj.synset_id)) {
            id_gloss.set(obj.synset_id, obj.gloss)
        }
    }

    return { word, type_list, list_id, id_gloss, id_type }
}

// const love = handle('love')
// console.log(love.id_gloss)

module.exports = wordnet
