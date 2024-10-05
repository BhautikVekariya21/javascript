// Mapping through num array to add 11:

const seven = num.map((increment) => { return increment + 11 });
console.log(seven);  // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 32]

// Chaining multiple transformations:

const chaining = num.map((increment) => increment + 11)
                    .map((subst) => subst - 4)
                    .map((multuli) => multuli * 11)
                    .map((increment) => increment + 11)
                    .filter((us) => us > 111);
console.log(chaining);  // [1485, 1596, 1707, 1818, 1929, 2040]


// Here's the process broken down step-by-step:

// First, you add 11 to each number.
// Then, you subtract 4.
// After that, you multiply each result by 11.
// You add 11 again.
// Finally, you filter out values greater than 111.
// Metaphor for Chaining:

// Imagine you're cooking a dish like dal makhani. Each transformation in your map functions is like adding an ingredient or step to the recipe:
// The first map (adding 11) is like sautéing onions and garlic as a base.
// The next map (subtracting 4) could be adding spices.
// Multiplying by 11 is like simmering the dal to bring out the flavors.
// Adding 11 again is like adding a final garnish (cilantro or a drizzle of cream).
// Finally, the filter is ensuring only the best-tasting portions of the dish make it to the plate, just like keeping only the values greater than 111.
