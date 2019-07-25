package main

// 938. Range Sum of BST
// Given the root node of a binary search tree, return the sum of values of all
// nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

import (
	"fmt"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func rangeSumBST(root *TreeNode, L int, R int) int {
	if root == nil {
		return 0
	}

	if root.Val >= L && root.Val <= R {
		return root.Val + rangeSumBST(root.Left, L, R) + rangeSumBST(root.Right, L, R)
	} else {
		return rangeSumBST(root.Left, L, R) + rangeSumBST(root.Right, L, R)
	}
}
