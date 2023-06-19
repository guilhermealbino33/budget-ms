export interface CategoryProps {
  id: string;
  name: string;
  code: string;
}

export class Category {
  private props: CategoryProps;

  constructor(props: CategoryProps) {
    this.props = props;
  }

  get getProps() {
    return { ...this.props };
  }

  get id() {
    return this.props.id || "";
  }
}
