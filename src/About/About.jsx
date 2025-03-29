import DownloadIcon from '@mui/icons-material/Download';
import './About.css';

export function About({ sty, data }) {
  const aboutData = data?.[0]?.store?.[1]?.About || {};

  return (
    <div id="about" className="Third_bar">
      <div>
        <img className="Third_bar_img" src="./img/pngegg.png" alt="About Illustration" />
      </div>
      <div className="Third_bar_con">
        <p className="titl1">{aboutData.ab_title}</p>
        <p className="titl2">{aboutData.why}</p>
        <div className="about-flex">
          <div className="about-div">
            <p className="titl3" style={sty}>{aboutData.ab_intro}</p>
            <p className="high">{aboutData.ab_intro2}</p>
          </div>
          <div>
            <p className="titl4">{aboutData.ab_intro3}</p>
          </div>
        </div>
        <div className="about-btn">
          <a 
            className="btns"
            href="./img/surya_resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="btn_name">{aboutData.about_btn}</p>
            <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
