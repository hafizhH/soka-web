const contentful = require('contentful')

const client = contentful.createClient({ space: process.env.SPACE_ID, environment: 'master', accessToken: process.env.ACCESS_TOKEN })

export const getAllPostIds = async () => {
  const res = await client.getEntries({ content_type: 'post' })
  const postIds = res.items.map(item => {
    return {
      params: { postId: item.sys.id }
    }
  })
  return postIds
}

export const getAllPosts = async () => {
  return Promise.all([client.getEntries({ content_type: 'post' }), client.getEntry(process.env.HIGHLIGHT_LIST_ID, { include: 3 })]).then((res) => {
    const highlight = res[1].fields.items.map(item => { delete item.fields.content; return item })
    const posts = res[0].items.sort((a, b) => b.sys.createdAt - a.sys.createdAt).map(item => { delete item.fields.content; return item })
    // console.log('DEBUG', highlight, posts)
    return { posts, highlight }
  })
}

export const getEntryById = async (id) => {
  const post = await client.getEntry(id, { include: 4 })
  return post
}

export const getPageData = async () => {
  const pageData = await client.getEntry()
}