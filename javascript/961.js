// 961. N-Repeated Element in Size 2N Array

const repeatedNTimes = A => {
    let N = A.length / 2
    let count
    for (let i = 0; i < A.length; i++) {
        count = 1
        for (let j = i+1; j < A.length; j++) {
            if (A[j] === A[i]) count++
            if (count === N) return A[i]
        }
    }
    return false
}
