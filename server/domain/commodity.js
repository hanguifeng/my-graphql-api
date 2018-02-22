export class CommodityDomain {
  static findCommoditiesByCategory(commodities, category) {
    const commoditiesByCategory = commodities.filter(value => value.category === category);
    return commoditiesByCategory;
  }
  static async getFromData(commodities, from) {
    const commoditiesByFrom = await commodities.slice(from);
    return commoditiesByFrom;
  }
}

export default 'dummy';
