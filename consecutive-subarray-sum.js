// Function untuk mencari jumlah maksimum dari sublarik berurutan
function maxSubarraySum(nums) {
    if (nums.length === 0) return 0;

    let maxSum = nums[0]; // Menginisialisasi jumlah maksimum dengan elemen pertama
    let currentSum = nums[0]; // Menginisialisasi jumlah saat ini dengan elemen pertama

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]); // Memilih antara elemen ke-i atau menambahkan ke jumlah saat ini
        maxSum = Math.max(maxSum, currentSum); // Membandingkan jumlah saat ini dengan jumlah maksimum yang ditemukan
    }

    return maxSum; // Mengembalikan jumlah maksimum sublarik berurutan
}

// Input
const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Masukkan larik/array di sini

// Mencetak hasil
console.log(`Output: Maximum Sum: ${maxSubarraySum(input)}`);
