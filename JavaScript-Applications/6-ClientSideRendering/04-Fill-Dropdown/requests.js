export async function get() {
  const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
  const data = await res.json();
  return Object.values(data);
}

export async function post(data) {
  
  const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: data })
  });
}