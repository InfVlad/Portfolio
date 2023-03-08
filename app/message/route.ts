// eslint-disable-next-line import/prefer-default-export
export async function POST(request: Request) {
    // do something
    // const { name, email, message } = request.body.;

    const { name, email, message } = await request.json();
    console.log("name ", name);
    console.log("email ", email);
    console.log("message ", message);
    return new Response(`${name} thank you for your message!`);
}
