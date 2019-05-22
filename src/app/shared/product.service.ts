export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]) {
  }
}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public comment: string) {
  }
}

export class ProductService {
  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }
}

const products = [
  {
    'id': 0,
    'title': 'Medicore Gizmo',
    'price': 24.99,
    'rating': 1.2,
    'description': 'You\'re only paying $25 so you really shouldn\'t expect much.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Harry Potter and the Socks on the Floor',
    'price': 64.99,
    'rating': 4.9,
    'description': 'It doesn\'t matter what words are actually in this book, everyone will buy it.',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Decent Gizmo',
    'price': 74.99,
    'rating': 4.2,
    'description': 'At least you care about something besides finding the cheapest product.',
    'categories': ['electronics']
  },
  {
    'id': 3,
    'title': 'Box of Rocks',
    'price': 84.99,
    'rating': 3.9,
    'description': 'It\'s literally a big box of rocks. For all your rock needs.',
    'categories': ['hardware']
  },
  {
    'id': 4,
    'title': 'Superb Gizmo',
    'price': 94.99,
    'rating': 5,
    'description': 'The best of the best. A solid choice as far as gizmos go.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 5,
    'title': 'Larry Potter and the Giant Salt Pillar',
    'price': 54.99,
    'rating': 4.6,
    'description': 'Just blatant copyright infringement, but people will still buy it anyway.',
    'categories': ['books']
  }
];
