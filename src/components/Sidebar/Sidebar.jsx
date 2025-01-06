import "./sidebar.css";
import { assets } from "../../assets/assets.js";
import { useContext, useState } from "react";
import { Context } from "../../context/Context.jsx";

const Sidebar = () => {

    const [extended , setExtended] = useState(false);
	const {onSent , prevPrompts , setRecentPrompts , newChat} = useContext(Context);

	const loadPrompt = async (prompt) => {
	    setRecentPrompt(prompt)
		await onSent(prompt)
	}
	return (
		<div className="sidebar">
			<div className="top">
				<img
                onClick={() => setExtended(prev => !prev )}
					src={assets.menu_icon}
					className="menu"
					alt="menu-icon"
				/>
				<div onClick={()=>newChat()} className="new-chat">
					<img src={assets.plus_icon} alt="" />
					    {extended ? <p>New Chat</p> : null}  
                </div>
                {extended ? 
					<div className="recent">
						<p className="recent-title">Recent</p>
						{prevPrompts.map((item, index) =>{
							return(
								<div onClick={() => loadPrompt(item)} className="recent-entry">
									<img src={assets.message_icon} alt="" />
									<p>{item.slice(0,15)}....</p>
								</div>
							)
						})}
								
					</div>
                 : null}
			</div>
			<div className="bottom">
				<div className="bottom-item recent-entry">
					<img src={assets.question_icon} alt="" />
					{ extended ? <p>Help desk</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.history_icon} alt="" />
					    { extended ? <p>story</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.setting_icon} alt="" />
					 { extended ? <p>Settings</p> : null} 
				</div>
			</div>
		</div>
	);
};

export default Sidebar;