const flowers = ['Lily', 'Daisy', 'Iris', 'Lotus', 'Allium'];

const withFlowers = flowers.with(0, 'Rose ');

// no modifica al Array original
console.log(flowers);
console.log(withFlowers)