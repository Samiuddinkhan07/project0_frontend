import MessageStyles from './message.module.css';
import MaleEmoji from '../../assets/Memoji-male/Person=John, Skin Tone=Black, Posture=1 Happy.svg'

const Message = () =>{
        const generateRandomColor = () =>{
            const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const color = `rgb(${r}, ${g}, ${b})`;
            return color;
        }

        const getColor = generateRandomColor()
    return(
        <>
        <div className={MessageStyles['messages-container']}>
            <div className={MessageStyles['messages-container-wrapper']}>
                <div className={MessageStyles['messages-header-text']}>
                <h4>Recent Message</h4>
                <p>View all</p>
                </div>
                <div className={MessageStyles['message-view-container']}>
                    <div className={MessageStyles['message-box-container']}>
                        <div className={MessageStyles['message-user-image']} style={{backgroundColor:getColor}}>
                            <img src={MaleEmoji} alt="" width="40px" />
                        </div>
                        <div className={MessageStyles['message-user-details']}>
                            <div className={MessageStyles['message-user-header']}>
                                <h6>
                                    User name
                                </h6>
                                <div>
                                    time
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Message;