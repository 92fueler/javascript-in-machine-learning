import * as tf from '@tensorflow/tfjs'

// for-loop
const input = [1, 2, 3, 4]
const w = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
]
const output = [0, 0, 0, 0]

for (let i = 0; i < w.length; i++) {
  for (let j = 0; j < input.length; j++) {
    output[i] += w[i][j] * input[j]
  }
}

console.log(output)

tf.tensor(w).dot(tf.tensor(input)).print()
