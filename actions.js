import uuid from uuid;

const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';

{
    type: REMOVE_COMMENT,
    id: 10 // przykładowy id komentarza do usunięcia
}

{
    type: EDIT_COMMENT,
    id: 20, // tutaj przykładowy id komentarza do edycji
    text: 'wyedytowany tekst komentarza'
}

{
    type: THUMB_UP_COMMENT,
    id: 30, 
    counter: counter++ // zwieksza ilosc polubien
}

{
    type: THUMB_DOWN_COMMENT,
    id: 40,
    counter: counter-- // zmniejsza ilosc polubien
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4(),
        counter: 0
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        counter: counter++
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        counter: counter--
    }
}