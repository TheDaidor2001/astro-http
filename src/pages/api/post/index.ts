import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export const preRender = false;

export const GET: APIRoute = async ({ params, request }) => {

    
    const url = new URL(request.url)

    const slug = url.searchParams.get('slug')
    
    if(slug) {
        const post = await getEntry('blog', slug);

        if(post) {
            return new Response(
                JSON.stringify(post),
                {
                    status: 200,
                    headers: {
                        "Content-Type" : "application/json"
                    }
                }
            ) 
        }

        return new Response(
            JSON.stringify({msg: `Post: ${slug} not Found`}),
            {
                status: 404,
                headers: {
                    "Content-Type" : "application/json"
                }
            }
        )
    }


    const blogPost = await getCollection('blog');
    return new Response(
        JSON.stringify(blogPost),
        {
            status: 200,
            headers: {
                "Content-Type" : "application/json"
            }
        }
    )
}