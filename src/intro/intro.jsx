import SendIcon from '@mui/icons-material/Send';
import "./intro.css";

export function Intro({ sty, data }) {
  const introData = data?.[0]?.store?.[0]?.Intro || {};

  return (
    <div id="sec_bar">
      <div className="sec_bar_con">
        <p className="tit">{introData.designation}</p>
        <p className="tit1" style={sty}>{introData.hi}</p>
        <p className="tit2">{introData.name}</p>
        <p className="tit3" style={sty}>{introData.self1}</p>
        <p className="tit3" style={sty}>{introData.self2}</p>
        <div className="intro-btn">
          <a className="button" href="mailto:murugesansuryamsp@gmail.com" target="_blank" rel="noopener noreferrer">
            <p className="btn_name">{introData.intro_btn}</p>
            <SendIcon />
          </a>
        </div>
      </div>

      <div className="intro-flex">
        <div>
          <img className="sec_bar_img" src="/img/pice.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
}
