/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/directions-reduction
 */
function dirReduc(arr) {

    // If the array has length 1 or less return
    if (arr.length <= 1) {
        return arr;
    }

    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        
        var current = arr[i];
        var next = arr[i + 1];

        // Check if North and South are next to each other
        if (current === "NORTH" && next === "SOUTH") {
            
            // If they are remove them from array
            arr.splice(i, 2);
            
            // Adjust counter and move to next loop
            i -= 2;
            continue;
        }
        // Check if South and North are next to each other
        if (current === "SOUTH" && next === "NORTH") {
            
            // If they are remove them from array
            arr.splice(i, 2);
            
            // Adjust counter and move to next loop
            i -= 2;
            continue;
        }
        // Check if West and East are next to each other
        if (current === "WEST" && next === "EAST") {
            
            // If they are remove them from array
            arr.splice(i, 2);
            
            // Adjust counter and move to next loop
            i -= 2;
            continue;
        }
        // Check if East and West are next to each other
        if (current === "EAST" && next === "WEST") {
            
            // If they are remove them from array
            arr.splice(i, 2);
            
            // Adjust counter and move to next loop
            i -= 2;
            continue;
        }
    }

    return arr;
}