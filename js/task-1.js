const categories = document.querySelectorAll(`#categorites .item`);
categories.forEach(category => {
  const categoryName = category.querySelector(`h2`).textContent;
  const categoryItems = category.querySelectorAll(`ul li`);

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItems.length}`);
});
