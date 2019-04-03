// 700

const searchBST = (root, val) => {
    if (root === null) return null
    if (root.val === val) return root
    if (root.val < val) return searchBST(root.right, val)
    if (root.val > val) return searchBST(root.left, val)
}
