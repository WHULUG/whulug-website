import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  // 只包含 frontmatter 和 URL
  include: ['frontmatter', 'url'],
  // 对文章按日期进行降序排序
  sort: 'date',
  order: 'desc',
  // 转换数据，确保 date 是 Date 对象
  transform(rawData) {
    return rawData.map(page => {
      page.frontmatter.date = new Date(page.frontmatter.date);
      return page;
    });
  }
})