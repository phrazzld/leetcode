// 933. Number of Recent Calls

package main

type RecentCounter struct {
	pings []int
}

func Constructor() RecentCounter {
	return RecentCounter{}
}

// Return number of pings made from 3000 ms ago until now
func (this *RecentCounter) Ping(t int) int {
	count := 0
	this.pings = append(this.pings, t)
	for _, v := range this.pings {
		if v <= t && v >= t-3000 {
			count++
		}
	}
	return count
}
