export async function getUsers(options) {
  const res = await fetch("/api/users?pageIndex=" + (options.pageIndex || 0));
  return await res.json();
};
