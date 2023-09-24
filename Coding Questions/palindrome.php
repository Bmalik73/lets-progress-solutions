<?php

function isPalindrome($str) {
    // Remove non-alphanumeric characters from the string
    $str = preg_replace("/[^A-Za-z0-9]/", '', $str);
    
    // Convert the string to lowercase to ensure the check is case-insensitive
    $str = strtolower($str);
    
    // Check if the string is equal to its reversed version
    return $str == strrev($str);
}
