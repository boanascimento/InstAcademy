import { ModuleContent } from './ModuleContent';

export class Module {
  id: number;
  name: string;
  briefDescription: string;
  content: ModuleContent;

  constructor(json?: any) {
    this.id = json.id;
    this.name = json.name;
    this.briefDescription = json.briefDescription;
    this.content = json.content;
  }

  static toArray(jsons: any[]): Module[] {
    let itens: Module[] = [];
    if (jsons != null) {
      for (let json of jsons) {
        itens.push(new Module(json));
      }
    }
    return itens;
  }
}
