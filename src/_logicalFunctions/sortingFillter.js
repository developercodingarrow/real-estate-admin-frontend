export const sortByDate = (data, sortOrder) => {
  const sortedData = data.slice().sort((a, b) => {
    if (sortOrder === true) {
      return new Date(a.updatedAt) - new Date(b.updatedAt);
    } else {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    }
  });

  return sortedData;
};

export const sortByNumber = (data, sortFor, sortOrder) => {
  // Sorting logic by price
  const sortedData = [...data].sort((a, b) => {
    const priceA = parseFloat(a[sortFor]);
    const priceB = parseFloat(b[sortFor]);

    if (sortOrder === true) {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  return sortedData;
};
