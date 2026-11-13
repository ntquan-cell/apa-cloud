        .al-hero p{color:#dbeafe;line-height:1.75;margin:0;max-width:850px}
        .al-warning{margin-top:17px;padding:12px 15px;border:1px solid #ffffff40;background:#ffffff12;border-radius:12px;color:#eff6ff;font-size:13px;line-height:1.65}
        .al-toolbar{display:flex;gap:12px;align-items:center;margin:22px 0 14px}
        .al-search{flex:1;min-width:0;padding:13px 15px;border:1px solid #d5e0ed;border-radius:11px;font:inherit;color:#183153}
        .al-chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px}
        .al-chip{border:1px solid #d5e0ed;background:white;color:#315174;padding:8px 13px;border-radius:99px;cursor:pointer}
        .al-chip.active{background:#205fe8;border-color:#205fe8;color:white}
        .al-layout{display:grid;grid-template-columns:1fr .95fr;gap:20px;align-items:start}
        .al-list{display:grid;gap:11px}
        .al-card{width:100%;text-align:left;background:white;border:1px solid #e0e8f2;border-radius:15px;padding:17px;cursor:pointer;color:#183153}
        .al-card.active{border:2px solid #3478e5;padding:16px;background:#f8fbff}
        .al-card h3{font-size:17px;margin:10px 0 6px}
        .al-card p{font-size:13px;color:#657b95;line-height:1.55;margin:0}
        .al-meta{display:flex;justify-content:space-between;gap:8px;align-items:center}
        .al-code{font-size:11px;background:#edf4fc;color:#45617f;padding:5px 8px;border-radius:6px;font-weight:800}
        .al-kind{font-size:11px;color:#8a5b0a;background:#fff3d6;padding:5px 8px;border-radius:6px}
        .al-detail,.al-form{background:white;border:1px solid #e0e8f2;border-radius:17px;padding:22px;box-shadow:0 8px 25px #0f2a500c}
        .al-detail{position:sticky;top:16px}
        .al-detail h2{font-size:21px;color:#153968;margin:12px 0}
        .al-detail p{font-size:14px;color:#61758e;line-height:1.7}
        .al-source{background:#f1f6fc;padding:12px;border-radius:10px;font-size:13px;line-height:1.6}
        .al-source a{color:#155bd7;font-weight:700}
        .al-note{background:#fff8e8;border:1px solid #f1dfb6;padding:12px;border-radius:10px;color:#785416!important;font-size:12px!important}
        .al-docs{padding-left:20px;color:#405a78;font-size:13px;line-height:1.8}
        .al-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:16px}
        .al-btn{border:0;background:#205fe8;color:white;border-radius:9px;padding:11px 15px;font-weight:700;cursor:pointer;text-decoration:none;font:inherit;font-size:13px;display:inline-block}
        .al-btn.secondary{background:#edf4fc;color:#24476e}
        .al-form{margin-top:24px}
        .al-form h2{margin:0;color:#153968;font-size:22px}
        .al-sub{font-size:13px;color:#71839a;margin:6px 0 18px}
        .al-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}
        .al-field label{display:block;font-size:13px;font-weight:750;margin-bottom:6px;color:#294767}
        .al-field input,.al-field select,.al-field textarea{width:100%;box-sizing:border-box;padding:11px;border:1px solid #d5e0ed;border-radius:9px;font:inherit;font-size:14px;color:#183153;background:white}
        .al-field textarea{min-height:85px}
        .al-field small{display:block;color:#8090a5;font-size:11px;margin-top:5px}
        .al-paper{display:none}
        @media(max-width:820px){.al-layout{grid-template-columns:1fr}.al-detail{position:static}}
        @media(max-width:560px){.apa-library{padding:22px 13px 45px}.al-hero{padding:25px 20px}.al-fields{grid-template-columns:1fr}.al-toolbar{display:block}.al-search{width:100%;box-sizing:border-box}}
        @media print{body *{visibility:hidden!important}.al-paper,.al-paper *{visibility:visible!important}.al-paper{display:block!important;position:absolute;left:0;top:0;width:100%;padding:18mm;color:#111;font:13pt "Times New Roman",serif}.al-paper h2,.al-paper h3{text-align:center}.al-paper p{line-height:1.7}.al-sign{text-align:right;margin-top:40px}}
      `}</style>

      <header className="al-hero">
        <div style={{fontSize:12,letterSpacing:1.5,fontWeight:800,color:"#bfdbfe"}}>APA · TRỢ LÝ HỒ SƠ SỐ</div>
        <h1>Thư viện biểu mẫu & hồ sơ</h1>
        <p>Chọn lĩnh vực, tìm mẫu phù hợp, chuẩn bị thông tin và kiểm tra giấy tờ cần có trước khi thực hiện thủ tục.</p>
        <div className="al-warning">Lưu ý: Các phiếu có nhãn APA là công cụ chuẩn bị thông tin, không thay thế biểu mẫu chính thức. Với thủ tục bắt buộc dùng mẫu riêng, hãy tải đúng mẫu từ cơ quan có thẩm quyền.</div>
      </header>

      <div className="al-toolbar">
        <input className="al-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm tên biểu mẫu hoặc lĩnh vực..." aria-label="Tìm biểu mẫu" />
        <span style={{fontSize:13,color:"#71839b"}}>{filtered.length} mẫu</span>
      </div>
      <div className="al-chips">
        {categories.map((c) => <button type="button" key={c} className={`al-chip ${category===c?"active":""}`} onClick={() => setCategory(c)}>{c}</button>)}
      </div>

      <div className="al-layout">
        <section className="al-list">
          {filtered.length===0 ? <div>Không tìm thấy mẫu phù hợp.</div> : filtered.map((t) => (
            <button type="button" key={t.id} className={`al-card ${selectedId===t.id?"active":""}`} onClick={() => {setSelectedId(t.id);setShowForm(false);}}>
              <div className="al-meta"><span className="al-code">{t.code}</span><span className="al-kind">Phiếu hỗ trợ APA</span></div>
              <h3>{t.title}</h3><p>{t.category} · {t.description}</p>
            </button>
          ))}
        </section>

        <aside className="al-detail">
          <span className="al-code">{selected.code} · {selected.category}</span>
          <h2>{selected.title}</h2>
          <p>{selected.description}</p>
          <div className="al-source"><strong>{selected.source}</strong><br/><a href={selected.sourceUrl} target="_blank" rel="noreferrer">Mở cổng thông tin chính thức ↗</a></div>
          <p className="al-note">{selected.note}</p>
          <strong style={{fontSize:14}}>Giấy tờ cần chuẩn bị/đối chiếu</strong>
          <ul className="al-docs">{selected.documents.map((d)=><li key={d}>{d}</li>)}</ul>
          <div className="al-actions"><button className="al-btn" type="button" onClick={()=>setShowForm(!showForm)}>{showForm?"Đóng phần điền":"Chọn mẫu và điền"}</button><a className="al-btn secondary" href={selected.sourceUrl} target="_blank" rel="noreferrer">Mở nguồn tham khảo</a></div>
        </aside>
      </div>

      {showForm && <section className="al-form">
        <h2>Điền thông tin – {selected.title}</h2>
        <p className="al-sub">Trường có dấu * là trường cần nhập. Bản nháp được lưu trên trình duyệt của thiết bị này.</p>
        <div className="al-fields">
          {selected.fields.map((f)=><div className="al-field" key={f.key} style={f.type==="textarea"?{gridColumn:"1 / -1"}:undefined}>
            <label htmlFor={`apa-${f.key}`}>{f.label}{f.required&&<span style={{color:"#d33"}}> *</span>}</label>
            {f.type==="textarea"?<textarea id={`apa-${f.key}`} value={values[f.key]??""} onChange={(e)=>update(f.key,e.target.value)}/>:
             f.type==="select"?<select id={`apa-${f.key}`} value={values[f.key]??""} onChange={(e)=>update(f.key,e.target.value)}><option value="">-- Chọn --</option>{f.options?.map(o=><option key={o}>{o}</option>)}</select>:
             <input id={`apa-${f.key}`} type={f.type??"text"} value={values[f.key]??""} onChange={(e)=>update(f.key,e.target.value)}/>}
            {f.hint&&<small>{f.hint}</small>}
          </div>)}
        </div>
        <div className="al-actions">
          <button type="button" className="al-btn" onClick={()=>window.print()}>In phiếu chuẩn bị</button>
          <button type="button" className="al-btn secondary" onClick={()=>setSaved({...saved,[selected.id]:{}})}>Xóa dữ liệu mẫu này</button>
        </div>
        <p className="al-note" style={{marginTop:15}}>Không nhập thông tin nhạy cảm trên thiết bị công cộng. Dữ liệu lưu cục bộ trong trình duyệt; có thể mất khi xóa dữ liệu trình duyệt hoặc đổi thiết bị.</p>
        <div className="al-paper">
          <h2>PHIẾU CHUẨN BỊ THÔNG TIN – APA</h2><h3>{selected.title}</h3>
          {selected.fields.map((f)=><p key={f.key}><strong>{f.label}:</strong> {values[f.key]||"...................................................."}</p>)}
          <p className="al-sign">………, ngày …… tháng …… năm ……<br/><br/>Người kê khai<br/><br/><br/>....................................</p>
          <p style={{fontSize:10}}>Phiếu do APA tạo để chuẩn bị thông tin, không phải biểu mẫu hành chính chính thức.</p>
        </div>
      </section>}
      <div style={{fontSize:12,color:"#8090a5",marginTop:22}}>Lưu ý: Thành phần hồ sơ thực tế cần được đối chiếu với thủ tục cụ thể và hướng dẫn của cơ quan tiếp nhận tại thời điểm nộp.</div>
    </main>
  );
}
