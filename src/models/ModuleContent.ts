import { Chapter } from './ModuleContentChapter';

export class ModuleContent {
  title: string;
  chapter: Array<Chapter>;

  constructor(json?: any) {
    this.title = json.title;
    this.chapter = json.chapter;
  }

  static toArray(jsons: any[]): ModuleContent[] {
    let itens: ModuleContent[] = [];
    if (jsons != null) {
      for (let json of jsons) {
        itens.push(new ModuleContent(json));
      }
    }
    return itens;
  }
}
