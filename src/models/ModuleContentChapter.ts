export class Chapter {
  title: string;
  chapterContent: string;

  constructor(json?: any) {
    this.title = json.title;
    this.chapterContent = json.chapterContent;
  }

  static toArray(jsons: any[]): Chapter[] {
    let itens: Chapter[] = [];
    if (jsons != null) {
      for (let json of jsons) {
        itens.push(new Chapter(json));
      }
    }
    return itens;
  }
}
