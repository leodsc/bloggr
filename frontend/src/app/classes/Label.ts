export class Label {
  private _placeholder: string;
  private _icon: string;
  private _description: string;
  private _name: string;
  private _type: string;
  public model: any;

  constructor(
    placeholder: string,
    icon: string,
    description: string,
    type: string,
    name: string,
    model?: any
  ) {
    this._placeholder = placeholder;
    this._icon = icon;
    this._description = description;
    this._type = type;
    this._name = name;
    this.model = model;
  }

  get placeholder() {
    return this._placeholder;
  }

  get icon() {
    return this._icon;
  }

  get description() {
    return this._description;
  }

  get type() {
    return this._type;
  }

  get name() {
    return this._name;
  }
}
