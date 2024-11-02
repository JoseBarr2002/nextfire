export default function PostPage({ params }) {
    const { slug } = params;

    return (
        <main>
            <h1>Post Page for : {slug}</h1>
            <p>This page is dynamically located for the slug: {slug}</p>
        </main>
    );
}