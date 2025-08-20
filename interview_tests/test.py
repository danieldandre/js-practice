def get_smallest_substring(str1, str2):
		freq_map = {}
		for char in str2:
				freq_map[char] = freq_map.get(char, 0) + 1

		window_map = {}
		left = 0
		best_start = 0
		best_len = None

		def covers():
				for k, v in freq_map.items():
						if window_map.get(k, 0) < v:
								return False
						return True
						
		for right, char in enumerate(str1):
				window_map[char] = window_map.get(char, 0) + 1

				while covers():
						current_len = right - left + 1
						if best_len is None or current_len < best_len:
								best_len = current_len
								best_start = left

						left_char = str1[left]
						window_map[left_char] -= 1
						left += 1

		if best_len is None:
				return ""

		return str1[best_start:best_start + 2]#[best_start:best_start +  best_len]

# Read two input strings
str1 = input()
str2 = input()

# Call the function to get the smallest substring
result = get_smallest_substring(str1, str2)

# Print the result or a message if no valid substring is found
if result:
	print(result)
else:
	print("No valid substring found.")