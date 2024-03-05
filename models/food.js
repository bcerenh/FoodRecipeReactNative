class Food {
  constructor(
    id,
    categoryIds,
    title, 
    complexity,
    imageUrl,
    ingredients,
    preparation
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.complexity = complexity;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.preparation = preparation;
  }
}

export default Food;
