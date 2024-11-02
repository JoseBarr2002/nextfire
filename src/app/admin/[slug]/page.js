// src/app/admin/[slug]/page.js
export default function AdminPostEdit({ params }) {
    const { slug } = params; // Access the dynamic slug value

    return (
        <main>
            <h1>Admin Page for: {slug}</h1>
            <p>This page is dynamically generated for the slug: {slug}</p>
        </main>
    );
}
