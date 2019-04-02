// 461

const zeroed = (num, len) => {
    let str = num.toString()
    let diff = len - str.length
    for (let i = 0; i < diff; i++) {
        str = `0${str}`
    }
    return str
}

const hammingDistance = (x, y) => {
    let xb = x.toString(2)
    let yb = y.toString(2)
    let len = xb.length > yb.length ? xb.length : yb.length
    xb = zeroed(xb, len)
    yb = zeroed(yb, len)
    let dist = 0
    for (let i = 0; i < len; i++) {
        if (xb[i] !== yb[i]) dist++
    }
    return dist
}
