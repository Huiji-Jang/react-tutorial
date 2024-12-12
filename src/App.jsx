import { useState } from "react"

//props
function Content(props){

return <h3 style={{color: 'green'}}>{props.text}</h3>

}



function App(){
    const [like, setLike] = useState(0);

    

    return (
      <div>
        <img 
          src="https://randomuser.me/api/portraits/women/18.jpg" style={{borderRadius: '50%'}}
          alt="" 
          style={{display: 'block', margin: '0 auto'}} 
        />
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <Content text="이름 : 홍길동"/> 
          <Content text="성별 : 여자"/> 
          <Content text="나이 : 30"/> 
          <button style={{color: 'blue', fontSize: '16px', padding: '8px 16px', margin: '10px', cursor: 'pointer', borderRadius: '20px'}}
          onClick={()=>setLike(like+1)}>
          
         

            👍 좋아요 <span>{like}</span>
          </button>
        </div>
      </div>
    )
  }
  
  export default App