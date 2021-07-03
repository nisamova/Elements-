import React from "react"
import Link from "next/link"

export default function Blog({ posts }) {
  return (
    <div>
      <h1> This is Blog Page </h1>
      {posts.nodes.map(post => {
        return (
          <ul key={post.slug}>
            <li>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          </ul>
        )
      })}
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch("http://elements.local/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: ` 
        query AllPostsQuery {
          posts{
            nodes {
              slug
              title
              content
              
            }
          }
        }
        `
    })
  })
  const json = await res.json()

  return {
    props: {
      posts: json.data.posts
    }
  }
}
