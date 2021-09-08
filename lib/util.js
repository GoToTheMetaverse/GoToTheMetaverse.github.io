/* eslint-disable prettier/prettier */
function makeInfo(x, y, w, h) {
    const obj = {};
    obj.x = x;
    obj.y = y;
    obj.w = w;
    obj.h = h;
    updateInfo(obj, { x, y });
    return obj;
}

function updateInfo(obj) {
    obj.sx = obj.x - obj.w / 2;
    obj.sy = obj.y - obj.w / 2;
    obj.ex = obj.x + obj.w / 2;
    obj.ey = obj.y + obj.h / 2;
}

function clickInfo(obj, mp) {
    if (mp.x < obj.sx || mp.y < obj.sy) {
        // console.log('clickInfo a', obj, mp);
        return false;
    }
    if (mp.x > obj.ex || mp.y > obj.ey) {
        // console.log('clickInfo b', obj, mp);
        return false;
    }
    // console.log('clickInfo c', obj, mp);
    return true;
}

export default {
    makeInfo,
    updateInfo,
    clickInfo
};
