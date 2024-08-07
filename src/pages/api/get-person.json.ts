import type { APIRoute } from "astro";


export const GET: APIRoute =  ({ params, request }) =>  {

    const person = {
        name: 'Daniel',
        age: 23,
    }


    return new Response(
        JSON.stringify(person), {
            status: 201,
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}


