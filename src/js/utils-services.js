import {imgs} from './imgs-data.js'

export const utilService = {
    makeId,
    setFilter, 
    onSetFilter,
    onNextPage
}

const PAGE_SIZE = 10;
var gImgs;
var gPageIdx = 0;
var gFilterBy = {
    fantasy: 'fantasy',
    canvas: 'canvas',
    family: 'family',
    backstage : 'backstage'
}

function onSetFilter(txt) {
    // setFilter({
    //     tags: txt
    // })
}
function setFilter(filterBy) {
    // gFilterBy.vendor = filterBy.vendor;
}

function getImgs() {
    var imgs = gImgs.filter(function (img) {
        return img.tags.includes(gFilterBy.tags)
    })

    var startIdx = gPageIdx * PAGE_SIZE;
    imgs.slice(startIdx, startIdx + PAGE_SIZE)
    return imgs;
}

function onNextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= imgs.length) {
        gPageIdx = 0;
    }
}

export function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

