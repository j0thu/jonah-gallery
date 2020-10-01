import React, {useState} from 'react';

const UploadForm = ()=>{
    
    const [file, setFile] = useState(null);

    const allowedTypes = ['image/png', 'image/jpeg'];
    const [error, setError] = useState(null);

    const changeHandler = (e)=>{
        let selected = e.target.files[0]; //get the file the user has (selected contains the file details)
        if(selected && allowedTypes.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError('Please use a valid image type (PNG or JPEG)');
        }
    }

    return(
        <form>
            <label>
                <input type="file" onChange = {changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>} {/*If error, display error*/}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadForm;
