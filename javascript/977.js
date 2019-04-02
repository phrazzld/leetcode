// 977

const sortedSquares = A => {
    let squares = new Array()
    for (let i = 0; i < A.length; i++) {
        squares.push(A[i]**2)
    }
    return squares.sort((a, b) => a - b)
}
