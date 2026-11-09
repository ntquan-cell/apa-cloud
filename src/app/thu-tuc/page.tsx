import List from "./List";

export const metadata = { title: "Danh mục thủ tục hành chính", description: "Tra cứu hơn 30 thủ tục: cư trú, giấy tờ cá nhân, đất đai, doanh nghiệp, bảo hiểm, xe cộ." };

export default async function Page({ searchParams }: { searchParams: Promise<{ nhom?: string }> }) {
  const { nhom } = await searchParams;
  return (
    <div className="wrap" style={{ padding: "32px 20px" }}>
      <h2>Danh mục thủ tục hành chính</h2>
      <List initialGroup={nhom ?? ""} />
    </div>
  );
}
