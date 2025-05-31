export async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/recruit`);
  return res.json();
}

const RecruitAPIs = {
  getPosts,
};

export default RecruitAPIs;
