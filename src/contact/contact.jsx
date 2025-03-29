import { Message } from "../message/Message";
import  "./contact.css";


export function Contact({data}){
    return(
<div className="con_contain">
<div className="con-div">
         <div className="big-con">
            <div className="small-con">
            <h2 className="con_tit1">{data?.[0].store?.[5].contact.co_title}</h2>
            <p className="con_tit2">{data?.[0].store?.[5].contact.co_title1}</p>
            <p className="con_tit3">{data?.[0].store?.[5].contact.co_message}</p>
            </div>
          <div className="email_con">
            <input className="con_input" placeholder="Email address " />
            <button className="con_btn">{data?.[0].store?.[5].contact.co_btn}</button>
          </div>        
        </div>
       </div>
</div>
    );
}

