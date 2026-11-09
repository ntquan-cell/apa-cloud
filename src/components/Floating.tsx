import { SITE } from "@/lib/site";
export default function Floating() {
  return (
    <div className="float">
      <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} aria-label="Gọi điện">☎</a>
      <a href={SITE.zalo} target="_blank" rel="noreferrer" aria-label="Zalo">Z</a>
      <a href={SITE.messenger} target="_blank" rel="noreferrer" aria-label="Messenger">M</a>
    </div>
  );
}
