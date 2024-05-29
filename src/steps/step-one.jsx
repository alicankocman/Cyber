import React, { useState, useEffect } from 'react';
import Header from "../home/footer";
import Footer from "../home/frame7";
import Cookies from 'js-cookie'; // Import the library for handling cookies
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './step-one.css';
import Locationsvg from "../assets/Location.svg";
import ShippingSvg from "../assets/Shipping.svg";
import PaymentSvg from "../assets/Payment.svg";
import Toedit from "../assets/To edit.svg";
import AddNewLine from "../assets/Add New Line.svg";
import DeleteIcon from "../assets/DeleteIcon.svg";

function StepOne() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [currentStep, setCurrentStep] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      name: 'Address Title',
      caption: 'Address',
      street: 'Address Street',
      city: 'Phone Number'
    }
  ]);

  useEffect(() => {
    // Function to update the cookie when a checkbox is changed
    const updateCookie = () => {
      const selectedAddress = addresses.find((address, index) => index + 1 === currentStep);
      Cookies.set('selectedAddress', JSON.stringify(selectedAddress));
    };

    // Call the function when necessary dependencies change
    updateCookie();
  }, [addresses, currentStep]);

  const handleEditClick = (index) => {
    setCurrentStep(index + 1);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    if (currentStep <= addresses.length) {
      const newAddresses = [...addresses];
      newAddresses[currentStep - 1] = addresses[currentStep - 1];
      setAddresses(newAddresses);
    } else {
      setAddresses([
        ...addresses,
        {
          name: 'Address Title',
          caption: 'Address',
          street: 'Address Street',
          city: 'Phone Number'
        }
      ]);
      setCurrentStep(addresses.length + 1);
    }
  };
  
  const handleAddNewAddress = () => {
    setCurrentStep(addresses.length + 1);
    setIsEditing(true);
    setAddresses([
      ...addresses,
      {
        name: 'Address Title',
        caption: 'Address',
        street: 'Address Street',
        city: 'Phone Number'
      }
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newAddresses = [...addresses];
    newAddresses[index] = {
      ...newAddresses[index],
      [name]: value
    };
    setAddresses(newAddresses);
  };

  const handleDeleteAddress = (index) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
    if (currentStep > newAddresses.length + 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleBackButtonClick = () => {
    navigate('/shopping-cart'); // Navigate to the shopping cart page using useNavigate
  };

  const handleNextButtonClick = () => {
    navigate('/step-two'); // Navigate to the step-two page
  };

  return (
    <>
      <Header />
      <div className='steps'>
        <div className='step-one'>
          <img className='img1' src={Locationsvg} alt='Location' />
          <div className='step-one-content'>
            <p className='text-step0'> Step 1</p>
            <p className='text-step1'>Address</p>
          </div>
        </div>
        <div className='step-two'>
          <img className='img2' src={ShippingSvg} alt='Shipping' />
          <div className='step-one-content'>
            <p className='text-step2'> Step 2</p>
            <p className='text-step3'>Shipping</p>
          </div>
        </div>
        <div className='step-three'>
          <img className='img3' src={PaymentSvg} alt='Payment' />
          <div className='step-one-content'>
            <p className='text-step2'> Step 3</p>
            <p className='text-step3'>Payment</p>
          </div>
        </div>
      </div>
      <div className='content-step-one'>
        <p className='title-content'>Selected Address</p>
        <div className="address-component" style={{ maxHeight: "300px", overflowY: "auto" }}>
          {addresses.map((address, index) => (
            <div key={index}>
              {isEditing && currentStep === index + 1 ? (
                <form className="address-form">
                  <label>
                    Address Title:
                    <input
                      type="text"
                      name="name"
                      value={address.name}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </label>
                  <label>
                    Address Caption:
                    <input
                      type="text"
                      name="caption"
                      value={address.caption}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </label>
                  <label>
                    Address Street:
                    <input
                      type="text"
                      name="street"
                      value={address.street}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </label>
                  <label>
                    Phone Number:
                    <input
                      type="text"
                      name="city"
                      value={address.city}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </label>
                  <button type="button" onClick={handleSaveClick}>
                    Save
                  </button>
                </form>
              ) : (
                <div className="address-details">
                  <div>
                    <div>
                      <input className='chck1' type='checkbox' />
                    </div>
                    <div className='leftt'>
                      <div style={{display:"flex"}}>
                        <p>{address.name}</p>
                        <p className='caption-edit'>{address.caption}</p>
                      </div>
                      <p>{address.street}</p>
                      <p>{address.city}</p>
                    </div>
                  </div>
                  <div className="address-buttons">
                    <button className='bedit' type="button" onClick={() => handleEditClick(index)}>
                      <img className='img4' src={Toedit} alt='edit' />
                    </button>
                    <button className='bdelete' type="button" onClick={() => handleDeleteAddress(index)}>
                      <img className='img6' src={DeleteIcon} alt='delete' />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className='add-new-address' onClick={handleAddNewAddress}>
          <img className='img5' src={AddNewLine} alt='AddNewLine' />
        </button>
        <div className='buttons-step-one'>
          <button className='back' onClick={handleBackButtonClick}>Back</button>
          <button className='next' onClick={handleNextButtonClick}>Next</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StepOne;
