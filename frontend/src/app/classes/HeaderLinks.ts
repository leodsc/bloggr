export class HeaderLink {
  public icon: string;
  public text: string;
  public path: string;
  public params?: string;

  constructor(icon: string, text: string, path: string, params?: string) {
    this.icon = icon;
    this.text = text;
    this.path = path;
    this.params = params;
  }
}
