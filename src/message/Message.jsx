import './message.css';

export function Message({sty,data}) {

  return (
<div id="contact" className='mess_con'>
<div>
      <h2 className="mess_con1">{data?.[0].store?.[6].message.me_title}</h2>
      <h2 className='mess_con2' style={sty}>{data?.[0].store?.[6].message.me_title1}</h2>
      </div>
          <div className='con'>
          <div className='details'>
                <div className='left-side'><img src="img/contact.png" /> <div><h3 style={sty}>{data?.[0].store?.[6].message.contact}</h3><p style={sty}>{data?.[0].store?.[6].message.con_detail}</p></div></div>
                <div className='left-side'><img src="img/gmail.png" /> <div><h3 style={sty}>{data?.[0].store?.[6].message.email}</h3><p style={sty}>{data?.[0].store?.[6].message.email_detail}</p></div></div>
                <div className='left-side'><img src="img/Maps.png" /> <div><h3 style={sty}>{data?.[0].store?.[6].message.location}</h3><p style={sty}>{data?.[0].store?.[6].message.location_detail}</p></div></div>
          </div>

          <div className='form'>
            <div className='form_line'>
              <input className='line1'  placeholder='Enter Name'/>
              <input className='line1' placeholder='Email Address' />
            <input className='line2' placeholder='Your subject'></input>
            <textarea className='line3' placeholder='Message'></textarea>
          <div><button className='form_btn'>{data?.[0].store?.[6].message.me_btn}</button></div>
            </div>
          </div>

              </div>
</div>
  );
}
