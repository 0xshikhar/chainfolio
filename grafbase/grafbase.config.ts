import { g, auth, config } from '@grafbase/sdk'

// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.
// Integrate Auth
// https://grafbase.com/docs/auth
//
// const authProvider = auth.OpenIDConnect({
//   issuer: process.env.ISSUER_URL ?? ''
// })
//
// Define Data Models
// https://grafbase.com/docs/database

// const post = g.model('Post', {
//   title: g.string(),
//   slug: g.string().unique(),
//   content: g.string().optional(),
//   publishedAt: g.datetime().optional(),
//   comments: g.relation(() => comment).optional().list().optional(),
//   likes: g.int().default(0),
//   tags: g.string().optional().list().length({ max: 5 }),
//   author: g.relation(() => user).optional()
// }).search()

// const comment = g.model('Comment', {
//   post: g.relation(post),
//   body: g.string(),
//   likes: g.int().default(0),
//   author: g.relation(() => user).optional()
// })

// const user = g.model('User', {
//   name: g.string(),
//   email: g.email().optional(),
//   posts: g.relation(post).optional().list(),
//   comments: g.relation(comment).optional().list()

//   // Extend models with resolvers
//   // https://grafbase.com/docs/edge-gateway/resolvers
//   // gravatar: g.url().resolver('user/gravatar')
// })

// @ts-ignore
const User = g.model('User', {
  name: g.string().length({ min: 3, max: 25 }),
  email: g.string().optional(),
  address: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  twitterUrl: g.url().optional(),
  projects: g.relation(() => Project).optional().list()
}).auth((rules) => {
  rules.public().read()
})

// @ts-ignore
const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string().optional(),
  image: g.url().optional(),
  liveSiteUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  onChainUrl: g.url().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => User).optional()
}).auth((rules) => {
  rules.public().read(),
    rules.private().create().update().delete()
})

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: g.env('NEXTAUTH_SECRET')
})

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.public()
  }
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
