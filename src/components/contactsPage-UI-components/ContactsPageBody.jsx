import React, { useState } from 'react'

export const ContactsPageList = function(){
    const [listOfContacts,set_ListOfContacts] = useState([
        {Fullname:"Simthembile Kleinbooi",ContactNum:"+123456789"},
        {Fullname:"Luyolo Phondo",ContactNum:"+123456789"},
        {Fullname:"Sibusiso Khubalo",ContactNum:"+123456789"},
        {Fullname:"Samuel Matte",ContactNum:"+123456789"},
        {Fullname:"James Sander",ContactNum:"+123456789"},
        {Fullname:"Harry Perez",ContactNum:"+123456789"},
        {Fullname:"Adam David",ContactNum:"+123456789"},
        {Fullname:"Taha Hawkings",ContactNum:"+123456789"},
        {Fullname:"Tilly Chandler",ContactNum:"+123456789"},
        {Fullname:"Kesley Walker",ContactNum:"+123456789"},
    ]);
    return (
      <div>
        <input type="search" placeholder="🔍Search"/>
        <ol>
            {listOfContacts.map((item,index,arr)=><li key={index} style={{height:"58px",width:"308px",display:"flex",gap:"2rem"}}>
                <div style={{width:"2rem",height:"1.8rem",backgroundColor:"#FE4747",color:"white",borderRadius:"50%"}}>{(()=>{let splitItem = item.Fullname.split(" ");let contents = splitItem[0].charAt(0).toUpperCase() + splitItem[1].charAt(0).toUpperCase(); return(contents)})()}</div>
                <div style={{display:"flex",flexDirection:"column",translate:"0px -5px"}}>
                    <span>{item.Fullname}</span>
                    <span>{item.ContactNum}</span>
                </div>
            </li>)}
        </ol>
      </div>
    )
}
export const ContactsPageSMS = function(){
    return (
      <div>SMS feature</div>
    )
}
export const ContactsPageFocusedContactInfo = function(){
    return (
      <div>Display current highlighted Contacts info</div>
    )
}
export const ContactsPageBody = function(){
  return (
    <div style={{ position: "absolute", top: "102px", left: "130px",width:"fit-content",height:"fit-content"}}>
        <ContactsPageList/>
        <ContactsPageSMS/>
        <ContactsPageFocusedContactInfo/>
    </div>
  )
}
