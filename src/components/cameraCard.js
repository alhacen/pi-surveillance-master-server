import React from 'react';

const CameraCard = (props) =>{
    
    return (
        <div className="flex">
            {
    props.devices.map(device=>{
        return(
            <div key={device.name} className="camContainer">
                <div className="cam_card">
                    <p className="greenLight">
                    <svg>
                        <circle cx="21" cy="25" r="5" fill={device.active?"#4BB543":"#cf142b"}/>
                    </svg>
                    </p>
                    <p className="settingIcon">
                    <svg width="18" className="iconRotateEffect" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6.51749V2.99999H11.4825L9 0.517487L6.5175 2.99999H3V6.51749L0.517502 8.99999L3 11.4825V15H6.5175L9 17.4825L11.4825 15H15V11.4825L17.4825 8.99999L15 6.51749ZM13.5 10.86V13.5H10.86L9 15.36L7.14 13.5H4.5V10.86L2.64 8.99999L4.5 7.13999V4.49999H7.14L9 2.63999L10.86 4.49999H13.5V7.13999L15.36 8.99999L13.5 10.86ZM4.875 8.99999C4.875 6.72749 6.7275 4.87499 9 4.87499C11.2725 4.87499 13.125 6.72749 13.125 8.99999C13.125 11.2725 11.2725 13.125 9 13.125C6.7275 13.125 4.875 11.2725 4.875 8.99999ZM9 11.625C7.5525 11.625 6.375 10.4475 6.375 8.99998C6.375 7.55248 7.5525 6.37498 9 6.37498C10.4475 6.37498 11.625 7.55248 11.625 8.99998C11.625 10.4475 10.4475 11.625 9 11.625ZM7.5 8.99998C7.5 8.17156 8.17157 7.49998 9 7.49998C9.82843 7.49998 10.5 8.17156 10.5 8.99998C10.5 9.82841 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82841 7.5 8.99998Z" fill="black" style={{fillOpacity:"0.54",clipRule:"evenodd",fillRule:"evenodd"}}/>
                    </svg>

                    </p>
                    <div className="camSvg" style={{textAlign:'center'}}>
                    <svg width="45" height="45" viewBox="0 0 45 45"  fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M7.5 11.25H30C31.0312 11.25 31.875 12.0938 31.875 13.125V19.6875L39.375 12.1875V32.8125L31.875 25.3125V31.875C31.875 32.9062 31.0312 33.75 30 33.75H7.5C6.46875 33.75 5.625 32.9062 5.625 31.875V13.125C5.625 12.0938 6.46875 11.25 7.5 11.25ZM28.125 30V15H9.375V30H28.125Z" fill="black" style={{fillOpacity:"0.54",clipRule:"evenodd",fillRule:"evenodd"}}/>
                        </svg>
                    </div>
                    <div className="txts">
                        <p className="cam_name">{device.name}</p>
                        <p className="cam_ip">{device.ip}</p>
                    </div>
                </div>    
            </div>
            )
    })
        }
        </div>
    )
}
export default CameraCard;