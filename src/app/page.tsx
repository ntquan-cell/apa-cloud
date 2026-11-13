
import Link from "next/link";
import { groups, procedures } from "@/lib/data";
import Faq from "@/components/Faq";

const why = [
  ["🛡️", "Minh bạch, có căn cứ", "Thông tin về cơ quan, thời hạn, lệ phí và căn cứ pháp lý để người dùng chủ động đối chiếu."],
  ["⏱️", "Tiết kiệm thời gian", "Biết trước cần chuẩn bị gì, hạn chế thiếu giấy tờ và phải đi lại nhiều lần."],
  ["🔒", "Tôn trọng quyền riêng tư", "Thông tin cá nhân được quản lý theo cơ chế lưu trữ hiện có của APA."],
  ["👵", "Dễ dùng với mọi lứa tuổi", "Ngôn ngữ gần gũi, hướng dẫn từng bước, giao diện dễ đọc."],
];

const steps = [
  ["01", "Tìm đúng thủ tục", "Tìm kiếm hoặc hỏi APA bằng ngôn ngữ tự nhiên."],
  ["02", "Chuẩn bị hồ sơ", "Xem danh sách giấy tờ và kiểm tra từng mục cần thiết."],
  ["03", "Điền biểu mẫu", "Sử dụng thông tin đã lưu để hỗ trợ điền mẫu và in hồ sơ."],
  ["04", "Nộp và theo dõi", "Tìm nơi thực hiện, theo dõi tiến độ và các mốc thời hạn."],
];

const metrics = [
  ["24/7", "Hỗ trợ tra cứu"],
  ["0đ", "Tra cứu cơ bản"],
  ["1 lần", "Lưu thông tin"],
  [String(procedures.length), "Thủ tục hiện có"],
];

export default function Home() {
  return (
    <main className="apa-home">
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="hero-in wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> TRỢ LÝ HÀNH CHÍNH SỐ APA</div>
            <h1>
              Thủ tục hành chính
              <span> đơn giản hơn.</span>
              <span className="gradient-text"> Bắt đầu cùng APA.</span>
            </h1>
            <p className="hero-desc">
              Một trợ lý số đồng hành cùng bạn tra cứu thủ tục, chuẩn bị giấy tờ,
              điền biểu mẫu và chủ động theo dõi những việc cần thực hiện.
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="/tro-ly">
                <span>Trải nghiệm trợ lý AI</span><span className="action-arrow">↗</span>
              </Link>
              <Link className="secondary-action" href="/thu-tuc">
                Khám phá thủ tục <span>→</span>
              </Link>
            </div>
            <div className="hero-proof">
              <span className="proof-check">✓</span>
              Tra cứu cơ bản miễn phí cho người dân
              <span className="proof-divider" />
              Hướng dẫn bằng tiếng Việt dễ hiểu
            </div>
          </div>

          <div className="hero-visual" aria-label="Minh họa hệ thống APA">
            <div className="visual-aura" />
            <div className="orbit orbit-outer"><i /><i /><i /></div>
            <div className="orbit orbit-inner"><i /><i /></div>
            <div className="visual-cross cross-a">+</div>
            <div className="visual-cross cross-b">✳</div>
            <div className="visual-core">
              <div className="core-ring">
                <div className="core-logo">APA</div>
              </div>
              <div className="core-caption">DIGITAL ASSISTANT</div>
              <div className="core-status"><span /> SYSTEM READY</div>
            </div>
            <div className="float-panel panel-top">
              <span className="panel-icon">✦</span>
              <div><b>Trợ lý thông minh</b><small>Hỗ trợ tra cứu thủ tục</small></div>
            </div>
            <div className="float-panel panel-bottom">
              <span className="panel-icon blue-icon">✓</span>
              <div><b>Chuẩn bị hồ sơ</b><small>Từng bước rõ ràng</small></div>
            </div>
            <div className="visual-label label-left">SMART</div>
            <div className="visual-label label-right">ADMINISTRATION</div>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="metrics-section">
        <div className="wrap metrics">
          {metrics.map(([value, label], index) => (
            <div className="metric" key={label}>
              <div className="metric-number">{value}<span>{index === 3 ? "+" : ""}</span></div>
              <div className="metric-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap procedures-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">EXPLORE APA</div>
            <h2>Mọi thủ tục, <span>một điểm đến.</span></h2>
            <p>Chọn lĩnh vực bạn đang cần. APA giúp bạn bắt đầu từ những thông tin quan trọng nhất.</p>
          </div>
          <Link href="/thu-tuc" className="text-link">Xem tất cả thủ tục <span>↗</span></Link>
        </div>
        <div className="procedure-grid">
          {groups.map((g, index) => (
            <Link key={g.id} href={`/thu-tuc?nhom=${g.id}`} className="procedure-card">
              <div className="procedure-top">
                <span className="procedure-icon">{g.icon}</span>
                <span className="procedure-index">0{index + 1}</span>
              </div>
              <h3>{g.name}</h3>
              <p>{g.desc}</p>
              <div className="procedure-link">Khám phá <span>↗</span></div>
              <div className="card-shine" />
            </Link>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="wrap section">
          <div className="center-heading">
            <div className="section-kicker">HOW APA WORKS</div>
            <h2>Bốn bước. <span>Chủ động hơn.</span></h2>
            <p>Từ lúc tìm hiểu đến khi chuẩn bị hồ sơ, mọi thứ được hướng dẫn theo một quy trình dễ theo dõi.</p>
          </div>
          <div className="workflow">
            {steps.map(([number, title, desc], index) => (
              <div className="workflow-item" key={number}>
                <div className="workflow-node">
                  <span>{number}</span>
                  {index !== steps.length - 1 && <i />}
                </div>
                <div className="workflow-content">
                  <div className="workflow-step">STEP {number}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap benefits-section">
        <div className="benefits-intro">
          <div className="section-kicker">WHY APA</div>
          <h2>Công nghệ tốt là công nghệ <span>giúp cuộc sống dễ dàng hơn.</span></h2>
          <p>APA hướng đến trải nghiệm hành chính số gần gũi, dễ tiếp cận và hữu ích trong những công việc hằng ngày.</p>
          <Link href="/gioi-thieu" className="text-link">Tìm hiểu về APA <span>↗</span></Link>
        </div>
        <div className="benefits-grid">
          {why.map(([icon, title, desc], index) => (
            <div className="benefit-item" key={title}>
              <div className="benefit-icon">{icon}</div>
              <div className="benefit-number">0{index + 1}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap faq-section">
        <div className="faq-heading">
          <div className="section-kicker">NEED HELP?</div>
          <h2>Bạn có câu hỏi?</h2>
          <p>Tìm câu trả lời cho những thắc mắc thường gặp khi sử dụng APA.</p>
        </div>
        <div className="faq-content"><Faq /></div>
      </section>

      <section className="wrap final-cta-section">
        <div className="final-cta">
          <div className="cta-orb cta-orb-one" />
          <div className="cta-orb cta-orb-two" />
          <div className="cta-content">
            <div className="cta-kicker"><span /> YOUR DIGITAL ADMINISTRATION PARTNER</div>
            <h2>Bắt đầu hành trình<br /><span>hành chính số</span> cùng APA.</h2>
            <p>Đừng để thủ tục phức tạp làm mất thời gian của bạn. Hãy bắt đầu bằng một câu hỏi.</p>
            <div className="hero-actions">
              <Link href="/tro-ly" className="cta-button">Hỏi APA ngay <span>↗</span></Link>
              <Link href="/lien-he" className="cta-contact">Liên hệ tư vấn →</Link>
            </div>
          </div>
          <div className="cta-watermark">APA</div>
        </div>
      </section>

      <style>{`
        .apa-home{--navy:#07172f;--blue:#1768e8;--cyan:#62d5ff;--ink:#10213d;--muted:#64748b;color:var(--ink);overflow:hidden}
        .apa-home *{box-sizing:border-box}
        .apa-home a{text-decoration:none}
        .hero{position:relative;isolation:isolate;overflow:hidden;background:radial-gradient(ellipse at 77% 48%,#123c75 0%,#0b2850 30%,#07172f 70%);color:white;min-height:620px}
        .hero-grid{position:absolute;inset:0;z-index:-1;background-image:linear-gradient(#ffffff08 1px,transparent 1px),linear-gradient(90deg,#ffffff08 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(90deg,transparent,#000 45%,#000)}
        .hero-glow{position:absolute;z-index:-1;border-radius:50%;filter:blur(2px);pointer-events:none}
        .glow-one{width:450px;height:450px;right:5%;top:0;background:radial-gradient(circle,#1678e84d,transparent 68%);animation:ambientOne 9s ease-in-out infinite alternate}
        .glow-two{width:340px;height:340px;left:20%;bottom:-240px;background:radial-gradient(circle,#00c6ff35,transparent 70%);animation:ambientTwo 11s ease-in-out infinite alternate}
        .hero-in{min-height:620px;display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:25px;padding-top:70px;padding-bottom:75px;position:relative}
        .hero-copy{max-width:650px;position:relative;z-index:2}
        .eyebrow,.section-kicker{font-size:11px;font-weight:850;letter-spacing:2.5px;color:#68cfff}
        .eyebrow{display:inline-flex;align-items:center;gap:11px;padding:10px 15px;border:1px solid #7dcfff45;border-radius:40px;background:#ffffff09;margin-bottom:24px}
        .live-dot,.cta-kicker span{width:8px;height:8px;border-radius:50%;background:#43e4b1;box-shadow:0 0 0 5px #43e4b120,0 0 18px #43e4b1;display:inline-block;animation:dotPulse 2s ease-in-out infinite}
        .hero h1{font-size:clamp(39px,5vw,66px);line-height:1.12;letter-spacing:-2.7px;font-weight:850;margin:0;max-width:680px}
        .hero h1>span{display:block}
        .hero h1 .gradient-text{background:linear-gradient(90deg,#70d8ff,#a3bfff,#ffffff,#68d8ff);background-size:240% auto;background-clip:text;-webkit-background-clip:text;color:transparent;animation:gradientFlow 7s linear infinite}
        .hero-desc{font-size:16px;line-height:1.9;color:#c4d4e9;max-width:570px;margin:24px 0 0}
        .hero-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px}
        .primary-action,.secondary-action,.cta-button{display:inline-flex;align-items:center;justify-content:center;gap:22px;border-radius:9px;padding:15px 20px;font-size:14px;font-weight:800;transition:transform .25s,box-shadow .25s,background .25s}
        .primary-action{color:#062044;background:linear-gradient(110deg,#8ce2ff,#c5f1ff);box-shadow:0 10px 35px #2baaff30}
        .primary-action:hover,.cta-button:hover{transform:translateY(-4px);box-shadow:0 15px 38px #28a9ff50}
        .action-arrow{font-size:20px}
        .secondary-action{color:white;border:1px solid #ffffff40;background:#ffffff0a}
        .secondary-action:hover{background:#ffffff19;transform:translateY(-3px)}
        .secondary-action span{font-size:18px}
        .hero-proof{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-top:27px;font-size:11px;color:#9fb4ce}
        .proof-check{width:18px;height:18px;display:grid;place-items:center;background:#43e4b122;border-radius:50%;color:#62e9bd}
        .proof-divider{height:13px;width:1px;background:#ffffff35;margin:0 5px}
        .hero-visual{height:480px;position:relative;display:grid;place-items:center;isolation:isolate}
        .visual-aura{position:absolute;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,#168bff36,transparent 69%);animation:auraPulse 5s ease-in-out infinite alternate}
        .orbit{position:absolute;border:1px solid #83cfff30;border-radius:50%;display:grid;place-items:center}
        .orbit-outer{width:390px;height:390px;transform:rotate(-23deg);animation:orbitSpin 32s linear infinite}
        .orbit-inner{width:280px;height:280px;border-style:dashed;border-color:#8adfff50;animation:orbitSpin 24s linear infinite reverse}
        .orbit i{position:absolute;width:11px;height:11px;background:#70d9ff;border:3px solid #164b7d;border-radius:50%;box-shadow:0 0 18px #55caff}
        .orbit-outer i:nth-child(1){top:8%;left:23%}.orbit-outer i:nth-child(2){right:7%;top:55%}.orbit-outer i:nth-child(3){bottom:10%;left:37%}
        .orbit-inner i:nth-child(1){top:13%;right:18%;width:7px;height:7px}.orbit-inner i:nth-child(2){bottom:17%;left:12%;width:7px;height:7px}
        .visual-core{position:relative;z-index:2;width:185px;height:185px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(circle at 35% 25%,#245d9a,#0a1d3c 68%);border:1px solid #8edfff85;box-shadow:0 0 0 12px #4ebcff0b,0 0 0 25px #4ebcff08,0 0 65px #148dff50,inset 0 0 35px #55bfff25}
        .core-ring{width:100px;height:100px;border:1px solid #78d8ff90;border-radius:50%;display:grid;place-items:center;box-shadow:inset 0 0 22px #5fcaff30,0 0 22px #5fcaff35;animation:coreGlow 4s ease-in-out infinite alternate}
        .core-logo{font-size:38px;font-weight:950;letter-spacing:4px;color:white;text-shadow:0 0 22px #62cfff}
        .core-caption{font-size:8px;letter-spacing:2px;color:#9fdfff;margin-top:12px}
        .core-status{font-size:8px;letter-spacing:1.3px;color:#7de9c2;margin-top:8px}
        .core-status span{display:inline-block;width:5px;height:5px;border-radius:50%;background:#55edb5;margin-right:5px;vertical-align:middle}
        .float-panel{position:absolute;z-index:3;display:flex;align-items:center;gap:11px;padding:13px 16px;background:#102c50d9;border:1px solid #9bdfff45;border-radius:12px;box-shadow:0 15px 40px #020b1d55;backdrop-filter:blur(14px);animation:panelFloat 5s ease-in-out infinite}
        .float-panel b,.float-panel small{display:block}
        .float-panel b{font-size:11px;color:white}
        .float-panel small{font-size:9px;color:#a8bfd8;margin-top:4px}
        .panel-icon{width:34px;height:34px;display:grid;place-items:center;border-radius:9px;background:#9c76ff25;color:#c7b0ff;font-size:18px}
        .blue-icon{background:#39c8ff22;color:#79dcff}
        .panel-top{top:55px;right:-4px}
        .panel-bottom{bottom:65px;left:-5px;animation-delay:-2.5s}
        .visual-cross{position:absolute;color:#75d9ff;font-size:23px;text-shadow:0 0 18px #5acfff;animation:crossGlow 3s ease-in-out infinite alternate}
        .cross-a{top:65px;left:15%}.cross-b{bottom:75px;right:13%;font-size:18px}
        .visual-label{position:absolute;font-size:8px;letter-spacing:3px;color:#6f9fc9;writing-mode:vertical-rl}
        .label-left{left:0;top:45%}.label-right{right:0;top:36%}
        .hero-bottom-line{height:1px;background:linear-gradient(90deg,transparent,#5dbfff75,transparent)}
        .metrics-section{background:#fff;border-bottom:1px solid #e8eef7}
        .metrics{display:grid;grid-template-columns:repeat(4,1fr);padding-top:27px;padding-bottom:27px}
        .metric{text-align:center;border-right:1px solid #e8edf5}
        .metric:last-child{border:0}
        .metric-number{font-size:31px;font-weight:900;letter-spacing:-1px;color:#102c50}
        .metric-number span{color:#2584ed}
        .metric-label{font-size:12px;color:#718096;margin-top:3px}
        .section{padding-top:90px;padding-bottom:90px}
        .section-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;margin-bottom:32px}
        .section-kicker{color:#2783d9;margin-bottom:13px}
        .section-heading h2,.center-heading h2,.benefits-intro h2,.faq-heading h2{font-size:clamp(29px,4vw,43px);line-height:1.2;letter-spacing:-1.5px;color:#10213d;margin:0;font-weight:850}
        .section-heading h2 span,.center-heading h2 span,.benefits-intro h2 span{color:#287de0}
        .section-heading p,.center-heading p,.benefits-intro>p,.faq-heading p{font-size:14px;line-height:1.8;color:#6b7a90;max-width:580px;margin:12px 0 0}
        .text-link{display:inline-flex;align-items:center;gap:12px;white-space:nowrap;color:#1768d3;font-size:13px;font-weight:800}
        .text-link span{font-size:18px;transition:transform .25s}
        .text-link:hover span{transform:translate(4px,-3px)}
        .procedure-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}
        .procedure-card{position:relative;overflow:hidden;min-height:205px;padding:23px;background:linear-gradient(145deg,#fff,#f8fbff);border:1px solid #e3ebf5;border-radius:15px;transition:transform .3s,border-color .3s,box-shadow .3s}
        .procedure-card:hover{transform:translateY(-7px);border-color:#9ac8f5;box-shadow:0 18px 40px #153e7015}
        .procedure-top{display:flex;align-items:center;justify-content:space-between}
        .procedure-icon{width:49px;height:49px;border-radius:13px;display:grid;place-items:center;background:#eaf4ff;font-size:25px}
        .procedure-index{font-size:11px;color:#a7b6c9;font-weight:800;letter-spacing:1px}
        .procedure-card h3{font-size:17px;color:#172d4c;margin:17px 0 7px}
        .procedure-card p{font-size:12px;line-height:1.7;color:#718096;margin:0;max-width:300px}
        .procedure-link{display:flex;align-items:center;gap:8px;color:#2376d5;font-size:11px;font-weight:800;margin-top:17px}
        .procedure-link span{transition:transform .2s}
        .procedure-card:hover .procedure-link span{transform:translate(4px,-3px)}
        .card-shine{position:absolute;width:100px;height:220%;top:-60%;left:-130%;transform:rotate(25deg);background:linear-gradient(90deg,transparent,#ffffffaa,transparent);transition:left .7s}
        .procedure-card:hover .card-shine{left:150%}
        .workflow-section{background:linear-gradient(180deg,#f3f8ff,#edf5ff);border-top:1px solid #e5effb;border-bottom:1px solid #e5effb}
        .center-heading{text-align:center;max-width:680px;margin:0 auto 50px}
        .center-heading p{margin-left:auto;margin-right:auto}
        .workflow{display:grid;grid-template-columns:repeat(4,1fr);gap:0}
        .workflow-item{position:relative;padding:0 19px}
        .workflow-node{height:55px;display:flex;align-items:center;position:relative}
        .workflow-node span{width:48px;height:48px;display:grid;place-items:center;border-radius:50%;background:#fff;border:1px solid #b8d7f7;color:#176bd0;font-size:13px;font-weight:900;box-shadow:0 5px 18px #1c6ec51a;z-index:1}
        .workflow-node i{height:1px;position:absolute;left:58px;right:-18px;top:27px;background:linear-gradient(90deg,#73b8f2,#c5dcf6)}
        .workflow-content{padding-top:22px}
        .workflow-step{font-size:9px;letter-spacing:2px;color:#3c91dc;font-weight:900}
        .workflow-content h3{font-size:17px;color:#142d4d;margin:10px 0}
        .workflow-content p{font-size:12px;line-height:1.8;color:#718096;margin:0;max-width:230px}
        .benefits-section{display:grid;grid-template-columns:.85fr 1.15fr;gap:65px;align-items:center}
        .benefits-intro h2{font-size:clamp(30px,3.7vw,42px)}
        .benefits-intro>p{margin-bottom:22px}
        .benefits-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:13px}
        .benefit-item{position:relative;padding:23px 20px;border:1px solid #e7edf5;border-radius:13px;background:white;transition:transform .25s,box-shadow .25s}
        .benefit-item:hover{transform:translateY(-5px);box-shadow:0 14px 30px #193c6710}
        .benefit-icon{font-size:25px}
        .benefit-number{position:absolute;right:18px;top:20px;font-size:10px;color:#a9b8cb;font-weight:900}
        .benefit-item h3{font-size:15px;color:#183253;margin:15px 0 7px}
        .benefit-item p{font-size:11px;line-height:1.75;color:#748196;margin:0}
        .faq-section{display:grid;grid-template-columns:.7fr 1.3fr;gap:50px;padding-top:45px;padding-bottom:80px;border-top:1px solid #e9eef5}
        .faq-heading h2{font-size:32px}
        .faq-content{min-width:0}
        .final-cta-section{padding-bottom:80px}
        .final-cta{position:relative;isolation:isolate;overflow:hidden;min-height:330px;padding:53px 60px;border-radius:20px;background:radial-gradient(ellipse at 85% 50%,#174c87,#0a2448 48%,#07172f);color:white}
        .cta-content{position:relative;z-index:2;max-width:620px}
        .cta-kicker{display:flex;align-items:center;gap:12px;font-size:9px;font-weight:850;letter-spacing:2px;color:#9cc8ed}
        .cta-kicker span{width:7px;height:7px}
        .final-cta h2{font-size:clamp(31px,4vw,47px);line-height:1.17;letter-spacing:-1.5px;margin:20px 0 12px}
        .final-cta h2 span{color:#73d5ff}
        .final-cta p{font-size:13px;color:#b8cce2;line-height:1.8;max-width:490px}
        .cta-button{background:linear-gradient(110deg,#8ce2ff,#c5f1ff);color:#082448;padding:13px 19px}
        .cta-contact{color:#d4e7f8;font-size:12px;font-weight:750}
        .cta-watermark{position:absolute;right:5%;top:50%;transform:translateY(-50%);font-size:clamp(120px,22vw,260px);font-weight:950;letter-spacing:-15px;color:#ffffff08;pointer-events:none}
        .cta-orb{position:absolute;border-radius:50%;border:1px solid #8ddaff20;pointer-events:none}
        .cta-orb-one{width:300px;height:300px;right:10%;top:-100px;animation:orbitSpin 40s linear infinite}
        .cta-orb-two{width:210px;height:210px;right:18%;top:-55px;border-style:dashed;animation:orbitSpin 28s linear infinite reverse}
        .faq-section .faq-content>div{max-width:100%}
        @keyframes ambientOne{from{transform:translate(0,0) scale(1)}to{transform:translate(-55px,35px) scale(1.2)}}
        @keyframes ambientTwo{from{transform:translate(0,0)}to{transform:translate(70px,-35px)}}
        @keyframes gradientFlow{to{background-position:240% center}}
        @keyframes dotPulse{0%,100%{box-shadow:0 0 0 4px #43e4b120,0 0 12px #43e4b1}50%{box-shadow:0 0 0 8px #43e4b110,0 0 22px #43e4b1}}
        @keyframes orbitSpin{to{transform:rotate(337deg)}}
        @keyframes auraPulse{from{transform:scale(.88);opacity:.65}to{transform:scale(1.13);opacity:1}}
        @keyframes coreGlow{from{box-shadow:inset 0 0 15px #5fcaff20,0 0 12px #5fcaff25}to{box-shadow:inset 0 0 28px #5fcaff45,0 0 30px #5fcaff55}}
        @keyframes panelFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes crossGlow{from{opacity:.4;transform:scale(.85) rotate(0)}to{opacity:1;transform:scale(1.15) rotate(35deg)}}
        @media(max-width:900px){
          .hero-in{grid-template-columns:1fr .8fr;gap:0}
          .hero h1{font-size:clamp(38px,5.5vw,55px)}
          .hero-visual{transform:scale(.82);margin:0 -35px}
          .benefits-section{gap:35px}
          .procedure-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
        }
        @media(max-width:650px){
          .hero{min-height:auto}
          .hero-in{display:flex;flex-direction:column;align-items:stretch;padding-top:58px;padding-bottom:30px}
          .hero h1{font-size:clamp(37px,10vw,49px);letter-spacing:-1.8px}
          .hero-desc{font-size:14px}
          .hero-proof{font-size:10px}
          .hero-visual{height:340px;transform:scale(.78);margin:-5px -35px -15px}
          .orbit-outer{width:350px;height:350px}
          .orbit-inner{width:255px;height:255px}
          .panel-top{right:-5px;top:25px}
          .panel-bottom{left:-5px;bottom:25px}
          .metrics{grid-template-columns:repeat(2,1fr);row-gap:22px;padding-top:24px;padding-bottom:24px}
          .metric:nth-child(2){border:0}
          .metric-number{font-size:27px}
          .section{padding-top:62px;padding-bottom:62px}
          .section-heading{display:block}
          .section-heading h2,.center-heading h2{font-size:32px}
          .section-heading>.text-link{margin-top:18px}
          .procedure-grid{grid-template-columns:1fr;gap:12px}
          .procedure-card{min-height:185px}
          .center-heading{margin-bottom:36px}
          .workflow{grid-template-columns:1fr;gap:25px}
          .workflow-item{display:grid;grid-template-columns:58px 1fr;gap:10px;padding:0}
          .workflow-node{height:100%;align-items:flex-start}
          .workflow-node span{width:43px;height:43px}
          .workflow-node i{left:21px;right:auto;top:48px;bottom:-27px;width:1px;height:auto}
          .workflow-content{padding-top:0}
          .workflow-content h3{margin:7px 0}
          .benefits-section{display:block}
          .benefits-grid{margin-top:30px}
          .benefit-item{padding:18px 14px}
          .benefit-item h3{font-size:13px}
          .benefit-item p{font-size:10px}
          .faq-section{display:block;padding-top:35px;padding-bottom:55px}
          .faq-content{margin-top:25px}
          .final-cta-section{padding-bottom:45px}
          .final-cta{padding:36px 24px;min-height:330px}
          .final-cta h2{font-size:34px}
          .cta-watermark{right:-15px;top:70%;font-size:140px}
          .cta-orb-one{right:-100px}
          .cta-orb-two{right:-55px}
        }
        @media(prefers-reduced-motion:reduce){
          .apa-home *, .apa-home *::before, .apa-home *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}
        }
      `}</style>
    </main>
  );
}
