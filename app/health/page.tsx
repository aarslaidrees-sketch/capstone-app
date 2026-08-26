export default function Health() {
  return (
    <main>
      <h1>Health Check</h1>
      <p>Status: ok</p>
      <p>Service: AI Lead Qualification</p>
      <p>Checked at: {new Date().toISOString()}</p>
    </main>
  );
}
