import React,{useState} from 'react'
const host="http://localhost:5000";
const Form = () => {

    const [shortUrl, setshortUrl] = useState("");
    async function handleClick(e){
        e.preventDefault();
        const data={
            "longUrl":document.getElementById("longUrl").value
        }
        const response = await fetch(`${host}/shorten`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify(data)
          });
          const json= await response.json(); 
          setshortUrl(json.shortUrl);
    }
    return (
        <div className="container my-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="longUrl" className="form-label"><h2>Enter Url</h2></label><br/>
                    <textarea name="longUrl" id="longUrl" cols="150" rows="2"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Shorten</button>
            </form>
            <div className="my-3">
            <h3>Shortened Url:</h3>{shortUrl}
            </div>
        </div>
    )
}

export default Form
