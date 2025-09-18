export default function generateUserId(username: string, password: string): number {
  const str = username + password;
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; 
  }

  return Math.abs(hash);
}
