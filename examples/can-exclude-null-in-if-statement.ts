const a: string | null = Math.random() > 0.5 ? 'a' : null;

// OK
if (a !== null) {
  const size: number = a.length;
}
