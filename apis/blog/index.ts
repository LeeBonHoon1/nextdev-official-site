export async function getArticles() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/article`
  );
  return res.json();
}

export async function getActivities() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/activity`
  );
  return res.json();
}

const BlogAPIs = {
  getArticles,
  getActivities,
};

export default BlogAPIs;
