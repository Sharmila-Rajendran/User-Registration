import React,{useState,useRef} from 'react';
import './UserReg.css';

function UserReg(){
    const [profilePhoto,setProfilePhoto]=useState(null);
    const [formData,setFormData]=useState({
        country:'',
        streetAddress:'',
        suite:'',
        city:'',
        state:'',
        zipCode:'',
        phone:'',
    });

    const fileInputRef = useRef(null);

    const handleProfileChange=(e)=>{
        const profile=e.target.profiles[0];
        if (profile){
            setProfilePhoto.apply(URL.createObjectURL(profile));
        }
    };

    const handleImageUploadClick = () => {
        fileInputRef.current.click();
      };
    

    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    return(
        <div className='User-Container'>
            <h1>A few last details, then you can check and publish your profile.</h1>
            <p>A professional photo helps you build trust with your clients .To keep things safe and simple, they'll pay you through us- which is why we need your personal information.</p>
            <div className='Profile'>
                <div className='Set-Profile'>
                    <img src={profilePhoto ||'data:image/png;base64,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'} alt='Profile'/>
                    <button className="upload-button" onClick={handleImageUploadClick}> + Upload Photo</button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            accept=".jpg, .jpeg, .png"
                            style={{ display: 'none' }}
                            onChange={handleProfileChange}
                        />
                </div>
                <div className="input-Box">
                    <label htmlFor='country'>Country</label>
                <select
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                >
                    <option value="Select a Country">Country</option>
                    <option value="Country 1">Country 1</option>
                    <option value="Country 2">Country 2</option>
                </select>
                <label htmlFor='streetadd'>Street Address</label>
                <div className='input-street'>
                <input
                    type="text"
                    name="streetAddress"
                    placeholder="Street Address"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="suite"
                    placeholder="Apt/Suite (optional)"
                    value={formData.suite}
                    onChange={handleInputChange}
                />
                </div>
                <div className='input-city'>
                <label htmlFor='cty'>City</label>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                />
                <label htmlFor='state'>State/Province</label>
                <input
                    type="text"
                    name="stateProvince"
                    placeholder="State/Province"
                    value={formData.state}
                    onChange={handleInputChange}
                />
                <label htmlFor='zip'>Zip Code</label>
                <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                />
                </div>
                <label htmlFor='Phn'>Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                </div>
                </div>
            </div>
    )
}

export default UserReg;