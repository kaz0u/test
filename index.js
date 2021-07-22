const Abricot = "foo";
const baBa = "foo";
export const c = `foo ${baBa}`;

console.log(Abricot, baBa, c);
console.log(
  "Un message un peu trop long. Un message un peu trop long. Un message un peu trop long."
);

export function addOne(i) {
  if (!Number.isNaN(i)) {
    return i + 1;
  }
  return i;
}
