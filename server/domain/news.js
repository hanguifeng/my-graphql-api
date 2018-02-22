import NewModel from '../model/new';

export class NewsDomain {
  static async create(news) {
    return await NewModel.create(news);
  }
  static async getFromData(news, from) {
    return await news.slice(from);
  }
}

export default 'dummy';
