export default class AddCategoryRequest {
  constructor({ categories }) {
    this.categories = categories.map((category) => new Category(category));
  }
}

class Category {
  constructor({ name }) {
    this.name = name;
  }
}
