export default function BlogPost({params}) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.id}</p>
    </main>
  );
}
