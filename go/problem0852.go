// 852. Peak Index in a Mountain Array

package main

func peakIndexInMountainArray(A []int) int {
	peakIndex := 0
	for i := range A {
		if A[i] > A[peakIndex] {
			peakIndex = i
		} else {
			return peakIndex
		}
	}
}
