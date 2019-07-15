package main

// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	address := string(os.Args[1])
	fmt.Println(defangIPaddress(address))
}

func defangIPaddress(address string) string {
	return strings.Join(strings.Split(address, "."), "[.]")
}
