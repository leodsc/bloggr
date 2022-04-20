import { Label } from './Label';

export abstract class FormAction {
  static receiveContent($content: Label[], $model: any) {
    $content.forEach((label) => {
      const property = Object.keys(label.model)[0]; // { 'email': '' }
      $model[property] = label.model[property];
    });
  }
}
