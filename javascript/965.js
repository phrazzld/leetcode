// 965

const check = (node, val) => {
    if (node === null) return true
    if (node.val !== null && node.val !== val) return false
    return check(node.left, val) && check(node.right, val)
}

const isUnivalTree = root => {
    return check(root.left, root.val) && check(root.right, root.val)
}
