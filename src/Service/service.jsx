import "./service.css";

export function Service({ sty, data }) {
  return (
    <div className="main_contain" id="service">
      <div className="service_header">
        <h2 className="ser_con1">{data?.store?.[2].service.ser_title}</h2>
        <h3 className="ser_con2" style={sty}>{data?.[0].store?.[2].service.ser_title1}</h3>
      </div>
      <div className="ser_small">
        {(data?.[0].store?.[2]["ser-detail"]).map((dta, index) => (
          <div className="ser_contain" key={index}>
            <img className="web_img" src={dta.img} alt="service" />
            <h2 className="ser-tit1">{dta.title}</h2>
            <p className="ser-tit2">{dta.summary}</p>
            <div>
              <img src="/img/lo.png" alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
