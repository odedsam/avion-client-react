export function buildProductFilterQuery(filters: Record<string, string[]>) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, values]) => {
    const normalizedKey = key === 'price' ? 'priceRanges' : key;

    values.filter(Boolean).forEach((value) => {
      params.append(normalizedKey, value);
    });
  });

  return params.toString();
}
