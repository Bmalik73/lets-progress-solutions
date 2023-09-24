def merge_sort(arr):
    # Base case: if the array has one or zero elements, it's already sorted
    if len(arr) <= 1:
        return arr

    # Split the array into two halves
    middle = len(arr) // 2
    left_half = arr[:middle]
    right_half = arr[middle:]

    # Recursively sort both halves
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)

    # Merge the two sorted halves
    return merge(left_half, right_half)

def merge(left, right):
    result = []
    left_index, right_index = 0, 0

    # While both arrays have remaining elements
    while left_index < len(left) and right_index < len(right):
        # Compare elements and add the smaller one to the result
        if left[left_index] < right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1

    # If the left array has remaining elements, add them to the result
    while left_index < len(left):
        result.append(left[left_index])
        left_index += 1

    # If the right array has remaining elements, add them to the result
    while right_index < len(right):
        result.append(right[right_index])
        right_index += 1

    return result

# Test
arr = [38, 27, 43, 3, 9, 82, 10]
sorted_arr = merge_sort(arr)
print(sorted_arr)  # [3, 9, 10, 27, 38, 43, 82]
