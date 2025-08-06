import numpy as np

vector1 = np.zeros(10)
##print(vector1)

#### 4. How to find the memory size of any array (★☆☆)
arrayX = np.array([1, 2, 3, 4, 5])
print(arrayX.itemsize)

#### 5. How to get the documentation of the numpy add function from the command line? (★☆☆)
###on the console: import numpy as np
###                help(np.add)

#### 6. Create a null vector of size 10 but the fifth value which is 1 (★☆☆)
vector1[4] = 1
###print(vector1)

#### 7. Create a vector with values ranging from 10 to 49 (★☆☆)
vctr2 = np.arange(10, 50)
###print(vctr2)

#### 8. Reverse a vector (first element becomes last) (★☆☆)
vctr3 = np.flip(vctr2)
###print(vctr3)

#### 10. Find indices of non-zero elements from [1,2,0,0,4,0] (★☆☆)
vctr4 = np.array([1, 2, 0, 0, 4, 0])
nonZeroIndxs = np.nonzero(vctr4)
###print(nonZeroIndxs)

#### 13. Create a 10x10 array with random values and find the minimum and maximum values (★☆☆)
arr1 = np.random.random((10, 10))
###print (arr1)

#### 14. Create a random vector of size 30 and find the mean value (★☆☆)
vctr5 = np.random.random(30)
mean = np.mean(vctr5)
print(mean)

#### 15. Create a 2d array with 1 on the border and 0 inside (★☆☆)
arr2 = np.ones((5, 5))
arr2[1: -1, 1: -1] = 0
arr2[2][2] = 7 ### it looks cooler this way
###print(arr2)

#### 21. Create a checkerboard 8x8 matrix using the tile function (★☆☆)
arr3 = np.tile([[0], [1]], (4, 8))
###print(arr3)

#### 24. Multiply a 5x3 matrix by a 3x2 matrix (real matrix product) (★☆☆)
matrix_1 = np.tile([3], (5, 3))
matrix_2 = np.tile([2], (3, 2))
result = np.dot(matrix_1, matrix_2)

print(matrix_1)
print(matrix_2)
print (result)