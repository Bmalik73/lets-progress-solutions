<?php

function primeNumbers($n) {
    // Initialize an empty array to store prime numbers
    $primes = [];

    // Start from 2 (the smallest prime number) and iterate up to n
    for ($i = 2; $i <= $n; $i++) {
        // Assume the current number is prime
        $isPrime = true;

        // Check for factors of the current number up to its square root
        // (Any factor larger than the square root would have a corresponding factor smaller than the square root)
        for ($j = 2; $j * $j <= $i; $j++) {
            // If the current number is divisible by any number other than 1 and itself, it's not prime
            if ($i % $j == 0) {
                $isPrime = false;
                break;  // Exit the inner loop as we've determined the number is not prime
            }
        }

        // If the number is prime, add it to the primes array
        if ($isPrime) {
            $primes[] = $i;
        }
    }

    // Return the array of prime numbers
    return $primes;
}