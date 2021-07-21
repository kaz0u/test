const a = "foo";
const b = "foo";
const c = `foo ${b}`;

console.log(a, b, c);
console.log("Un message un peu trop long. Un message un peu trop long. Un message un peu trop long.");

function addOne(i) {
  if (i != NaN) {
    return i++;
  }
}
