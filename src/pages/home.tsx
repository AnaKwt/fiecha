import DOMParserReact from 'dom-parser-react';
import { useState } from 'react';

export default function Home() {
    const [url, setUrl] = useState('');
    const [html, setHtlm] = useState('');

    const getHtml = async() => {
        try{
            const data = await fetch("http://localhost:4000/html", {
              method: 'POST',
              body: JSON.stringify({ url }),
              headers: { 'Content-Type': 'application/json' },
            })
            const ResultHtml = await data.text()
            setHtlm(ResultHtml)
        }catch(err){
            console.log("err", err)
        }

    }
  return(
    <div>
      <input type="text" placeholder="URLを入力してください" value={url} onChange={(e) =>  setUrl(e.currentTarget.value)}/>
      <input type="button" onClick={getHtml} value="検索する"/>
      <DOMParserReact source={html}/>
    </div>
  )
}