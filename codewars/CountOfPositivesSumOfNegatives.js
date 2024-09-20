function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let countPositives = 0;
  let sumNegatives = 0;

  for (let item of input) {
    if (item > 0) {
      countPositives++;
    } else if (item < 0) {
      sumNegatives += item;
    }
  }

  return [countPositives, sumNegatives];
}
