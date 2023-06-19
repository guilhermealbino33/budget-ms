import { Category, CategoryProps } from './Category';

export interface ProductProps {
  id?: string;
  name: string;
  code: string;
  categoryId: string;
  category?: Category;
}

export class Product {
  private props: ProductProps;

  constructor(props: ProductProps) {
    this.props = props;
  }

  get getProps() {
    return { ...this.props };
  }

  get id() {
    return this.props.id || '';
  }
}
