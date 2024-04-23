'use client'
import { ChangeEvent, FormEvent, FormEventHandler, Fragment, HTMLInputTypeAttribute } from "react";
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { City, Country, IState, State as StateData, ICity } from "country-state-city";
import { useEffect, useState } from "react";
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-toastify/dist/ReactToastify.css';
import {
  Select as ShadSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Select, { ActionMeta, MultiValue, StylesConfig } from 'react-select';
import { error } from "console";
import { RotateCcw } from "lucide-react";
import dynamic from "next/dynamic";
import { UserSignup } from "@/lib/Reducers/api";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: 'Signing', label: 'Singing' },
  { value: 'Swimming', label: 'Swimming' },
  { value: 'Movie', label: 'Movie' },
];

type intrest = string;
interface formvaluetype {
  FirstName: string,
  MiddleName?: string,
  LastName: string,
  email: string,
  contact: string,
  password: string,
  status: string,
  interests: string[],
  gender: string,
  referal?: string,
  buisness?: string,
  id: File | null,
  country: string,
  state: string,
  city: string,
  locality: string,
  zip: string,
  confirmPassword: string
}
export interface FormDataPayload {
  Country: string;
  State: string;
  City: string;
  zip: string;
  email: string;
  ReferalId: string;
  Contact: string;
  password: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Interests: string[];
  // Add more properties as needed
}


const Signup = () => {
  const [formErrors, setFormErrors] = useState<Partial<formvaluetype> & { iderr?: string, captchaerr?: string, intresterr?: string }>({});
  const [selectedOption, setSelectedOption] = useState<MultiValue<OptionType>>([]);
  const [formvalues, setformvalues] = useState<formvaluetype[]>([]);
  const randomstring = Math.random().toString(36).slice(8);
  const [captcha, setcaptcha] = useState(randomstring);
  const [status, setStatus] = useState<string>("");
  const [Gender, setGender] = useState<string>("");
  const [Interests, setInterests] = useState<string[]>([]);
  const [id, setid] = useState<File | null>(null);
  const [country, setcountry] = useState<string>("");
  const [state, setstate] = useState<string>("");
  const [FirstName, setFirstName] = useState<string>("");
  const [MiddleName, setMiddleName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [contact, setcontact] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [referal, setreferal] = useState<string>("");
  const [buisness, setbuisness] = useState<string>("");
  const [locality, setlocality] = useState<string>("");
  const [zip, setzip] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [city, setcity] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<Boolean>(false);
  const [enteredcaptcha, setenteredcaptcha] = useState<string>("");
 const [error,seterror]=useState(false);
  const handlefile: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
    setid(event.target ? event.target.files![0] : null)
  }

  const refreshstring = () => {
    console.log("object")
    setcaptcha(Math.random().toString(36).slice(8))
  }

  const handleSelectChange = (
    newValue: MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSelectedOption(newValue);
  };

  const customStyles: StylesConfig<OptionType, true> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#e5e7eb', // Background color
      border: state.isFocused ? '1px solid #1D687F' : 'none', // Border color on focus
      '&:hover': {
        border: '1px solid #1D687F', // Border color on hover
      },
      borderRadius: "5px", // Border color

    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#1E1E1EB2', // Placeholder color
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#FCB305' : 'white', // Option background color
      color: state.isSelected ? 'white' : 'black', // Option text color
    }),

    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#FCB305', // Multi-value background color
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#1E1E1EB2', // Multi-value label color
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#1E1E1EB2', // Multi-value remove button color
      ':hover': {

      },
    }),
  };

  const validate = (values: formvaluetype) => {
    const errors: Partial<formvaluetype> & { iderr?: string, captchaerr?: string, interestserr?: string } = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    console.log("captcha", captcha, typeof captcha, "enteredcaptch", enteredcaptcha, typeof enteredcaptcha);
    if (!values.FirstName) {
      errors.FirstName = "FirstName is required!";
    }
    if (!values.LastName) {
      errors.LastName = "LastName is required!";
    }
    if (values?.interests.length == 0) {
      errors.interestserr = 'choose atleast one'
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!/^\d{10}$/.test(values.contact)) {
      errors.contact = "Please enter a valid 10-digit contact number";
    }
    if (!values.status) {
      errors.status = "Choose your status"
    }
    if (!values.gender) {
      errors.gender = "select a gender"
    }
    if (!values.id) {
      errors.iderr = "upload you id"
    }
    if (!values.country) {
      errors.country = "please select country"
    }
    if (!values.state) {
      errors.state = "please select state"
    }
    if (!values.city) {
      errors.city = "please select city"
    }
    if (!values.zip) {
      errors.zip = "please enter zip"
    }
    if (captcha != enteredcaptcha) {
      errors.captchaerr = "enter a valid captcha or refresh it"
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (values.password !== values.confirmPassword) {
      errors.password = "Passwords do not match"
    }else{
      seterror(true)
    }

    console.log("errors", errors)
    return errors;
  };
  const router=useRouter()

  const RegisterSubmit: (event: FormEvent<HTMLFormElement>) => void = async (event) => {
    event.preventDefault();
    console.log(event.target);
    const target = event.target as typeof event.target & Partial<formvaluetype>;
    console.log(target);
    const interests = selectedOption.map((item) => {
      const value = item.value;
      // Assuming 'setInterests' is a state update function
      setInterests((prevInterests: string[]) => {
        // Return a new array by concatenating the previous interests with the new value
        return [...prevInterests, value];
      });
      return value;
    });
 
    let userdata = { FirstName, LastName, MiddleName, email, contact, password, ReferalId:referal, buisness, locality, zip, confirmPassword, status, gender:Gender, id, country, state, city,interests }
    console.log(userdata);
    setFormErrors(validate(userdata));
    // Region,
    // Country,
    // State,
    // City,
    // zip,
    // Intrests,
    // Category,
    // FirstName,
    // MiddleName,
    // LastName,
    // email,
    // password: hash,
    // Contact,
    // RefralId,
    // role,
    // IdCard,
   
    setIsSubmit(true)
  };
  const CreateUser=async()=>{
  
    try{
      const formData: FormData=new FormData()
      formData.append('Country',country);
      formData.append('State',state);
      formData.append('City',city);
      formData.append('zip',zip);
      formData.append('email',email);
      formData.append('Locality',locality);
      formData.append('ReferalId',referal);
      formData.append('Contact',contact);
      formData.append('password',password);
      formData.append('IdCard', id ? id : '');
      formData.append('Status', status);
      formData.append('FirstName',FirstName);
      formData.append('MiddleName',MiddleName);
      formData.append('LastName',LastName);
      formData.append('Interests', Interests);
        const Signup = await UserSignup(formData);
        console.log(Signup)
        const ErrorToast = () => {
          toast.success(Signup.msg, {
            position:"top-center",
            autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
            hideProgressBar: false, // Show the progress bar
            className: "custom-toast", // Custom class for styling
          });
        };
        ErrorToast();
        if(Signup.success==true){
        
          router.push("/Login")
        }else{
          const ErrorToast = () => {
            toast.error(Signup.response.data.msg, {
              position:"top-center",
              autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
              hideProgressBar: false, // Show the progress bar
              className: "custom-toast", // Custom class for styling
            });
          };
          ErrorToast();
        }
    }catch(error){
      console.log("errorin signup",error)
    }
   
  
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
     CreateUser()
    }
  }, [formErrors]);



  const [statecountry, setstatecountry] = useState<string>("");
  const [statecode, setstatecode] = useState<string>("");
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState<IState[]>([]);
  const [cityData, setCityData] = useState<ICity[]>([]);
  const [existcountry, setexistCountry] = useState(countryData);


  useEffect(() => {
    // const regiondata=Country.getAllCountries('Asia')
    console.log(statecountry)
    console.log(StateData?.getStatesOfCountry(statecountry))
    setStateData(StateData?.getStatesOfCountry(statecountry) || []);
    console.log(stateData)
  }, [existcountry, statecountry]);

  useEffect(() => {
    setCityData(City?.getCitiesOfState(statecountry, statecode) || []);
    console.log(cityData)
  }, [state, statecode]);

  useEffect(() => {
    // stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    // cityData && setCity(cityData[0]);
  }, [cityData]);






  return (
    <div className=" w-[100%] py-[40px]">
      <div className="w-[50%] flex flex-col  items-start justify-start mx-auto space-y-8">
        <div className="flex items-center justify-center w-[100%]">
          <p className="font-heading  flex items-center text-4xl xs:text-6xl font-bold text-gray-900">Registration</p>
        </div>
        <form className="flex flex-col items-start justify-start w-[100%] space-y-6" onSubmit={RegisterSubmit}>
          <div className="flex flex-col items-start space-y-4 justify-start w-[100%] ">
            <div className="flex items-center justify-between  h-[120px] w-[100%]">
              <div className="grid w-[27%] h-[120px] my-auto max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">First Name</Label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="FirstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.FirstName}</p>
              </div>
              <div className="grid w-[27%] h-[120px] my-auto max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Middle Name</Label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="MiddleName" placeholder="Middle Name" onChange={(e) => setMiddleName(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.MiddleName}</p>
              </div>
              <div className="grid w-[27%] h-[120px] my-auto max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Last Name</Label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="LastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.LastName}</p>
              </div>
            </div>
            <div className="flex items-center justify-between w-[100%]">
              <div className="grid w-[40%] max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="email">Enter Email</Label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="email" name="email" placeholder="dev@gmail.com" onChange={(e) => setemail(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.email}</p>
              </div>
              <div className="grid w-[40%] max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="number">Contact</Label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="contact" placeholder="9999999999" onChange={(e) => setcontact(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.contact}</p>
              </div>
            </div>
            <div className="flex items-center justify-between w-[100%]  ">
              <div className="grid w-[40%] max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="password">Enter password</Label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="password" placeholder="******************" onChange={(e) => setpassword(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.password}</p>
              </div>
              <div className="grid w-[40%] max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="password">Confirm Password</Label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="password" name="confirmPassword" placeholder="******************" onChange={(e) => setconfirmPassword(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.password}</p>
              </div>
            </div>
            <div className="flex items-center justify-between w-[100%] pt-[20px]  ">
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">
                <ShadSelect onValueChange={(value) => setStatus(value)}>
                  <SelectTrigger className="w-[100%] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F] ">
                    <SelectValue placeholder="Select your Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-[white] rounded-sm" >
                    <SelectGroup className="cursor-pointer"  >
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Investor">Investor</SelectItem>
                      <SelectItem value="Organization">Organization</SelectItem>

                    </SelectGroup>
                  </SelectContent>
                </ShadSelect>
                <p className="text-[#FF0000]">{formErrors?.status}</p>
              </div>
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">

                <Select
                  defaultValue={selectedOption}
                  isMulti={true}
                  onChange={handleSelectChange}
                  options={options}
                  styles={customStyles}
                  placeholder="select your intrests"
                />
                <p className="text-[#FF0000]">{formErrors?.intresterr}</p>
              </div>
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">

                <ShadSelect onValueChange={(value) => setGender(value)}>
                  <SelectTrigger className="w-[100%] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F] ">
                    <SelectValue placeholder="Select Your Gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-[white]">
                    <SelectGroup className="cursor-pointer">
                      <SelectItem value="Beginner">Male</SelectItem>
                      <SelectItem value="Investor">Female</SelectItem>
                      <SelectItem value="Organization">Prefer Not To Say</SelectItem>

                    </SelectGroup>
                  </SelectContent>
                </ShadSelect>
                <p className="text-[#FF0000]">{formErrors?.gender}</p>
              </div>
            </div>
            <div className="flex items-center justify-between w-[100%]">
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Enter Referal (if any)</Label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="referal" placeholder="Referal Id" onChange={(e) => setreferal(e.target.value)} />
              </div>
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Enter Business (if any)</Label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="buisness" placeholder="Enter Your Buisnesses" onChange={(e) => setbuisness(e.target.value)} />

              </div>
            </div>
            <div className="flex items-center justify-between w-[100%]">
              <div className="grid w-[30%] m-auto max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="picture">upload Your Passport Or Id</Label>
                <Input type="file" id="picture" className="cursor-pointer  bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" onChange={handlefile} />
                <p className="text-[#FF0000]">{formErrors?.iderr}</p>
              </div>
            </div>

          </div>
          <div className="flex flex-col items-start space-y-4 justify-start w-[100%] ">
            <div className="flex items-center justify-between w-[100%]">
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">

                <ShadSelect onValueChange={(value: String) => {
                  console.log(value)
                  const [name, isoCode] = value.split(":");
                  setcountry(name);
                  setstatecountry(isoCode)
                }}>
                  <SelectTrigger className="w-[100%] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F] ">
                    <SelectValue placeholder="Select Your Country" />
                  </SelectTrigger>
                  <SelectContent className="bg-[white]">
                    <SelectGroup className="cursor-pointer">
                      {
                        existcountry && existcountry?.map((item: {
                          name: string,
                          latitude: string,
                          longitude: string,
                          isoCode: string
                        }) => (
                          <SelectItem value={`${item.name}:${item.isoCode}`} key={item?.longitude + item?.latitude} className="mb-1 cursor-pointer hover:bg-[#1E1E1E]">{item?.name}</SelectItem>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </ShadSelect>
                <p className="text-[#FF0000]">{formErrors?.country}</p>
              </div>
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">
                <ShadSelect onValueChange={(value: String) => {
                  console.log(value)
                  const [name, isoCode] = value.split(":");
                  setstate(name);
                  setstatecode(isoCode)
                }}>
                  <SelectTrigger className="w-[100%] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F] ">
                    <SelectValue placeholder="Select your State" />
                  </SelectTrigger>
                  <SelectContent className="bg-[white]">
                    <SelectGroup className="cursor-pointer">
                      {
                        stateData && stateData?.map((item: {
                          name: String,
                          isoCode: String,
                          countryCode: String,

                        }) => (
                          <SelectItem value={`${item.name}:${item.isoCode}`} key={`${item.name}:${item.isoCode}`} className="mb-1 cursor-pointer hover:bg-[#1E1E1E]">{item?.name}</SelectItem>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </ShadSelect>
                <p className="text-[#FF0000]">{formErrors?.state}</p>
              </div>
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">

                <ShadSelect onValueChange={(value: String) => {
                  console.log(value)
                  const [name, isoCode] = value.split(":");
                  setcity(name);
               
                }}>
                  <SelectTrigger className="w-[100%] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F] ">
                    <SelectValue placeholder="Select Your City" />
                  </SelectTrigger>
                  <SelectContent className="bg-[white]">
                    <SelectGroup className="cursor-pointer">
                      {
                        cityData && cityData?.map((item: {
                          name:String,
                          countryCode:String,
                          stateCode:String,
            
                        }) => (
                          <SelectItem value={`${item.name}:${item.stateCode}`} key={`${item.name}:${item.stateCode}`} className="mb-1 cursor-pointer hover:bg-[#1E1E1E]">{item?.name}</SelectItem>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </ShadSelect>
                <p className="text-[#FF0000]">{formErrors?.city}</p>
              </div>
            </div>

            <div className="flex items-center justify-between w-[100%]">
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Enter Locality</Label>
                <input name="locality" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" placeholder="Enter Locality" onChange={(e) => setlocality(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.locality}</p>
              </div>
              <div className="grid w-[30%] max-w-sm items-center gap-1.5">
                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Enter ZipCode</Label>
                <input name="zip" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" placeholder="99012" onChange={(e) => setzip(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.zip}</p>
              </div>
            </div>
          </div>


          <div className="flex flex-col items-start space-y-4 justify-start w-[100%] ">
            <div className="flex items-center justify-between space-y-2 w-[80%]">
              <div className="flex items-center justify-between w-[40%] h-[100px] mb-auto">
                <div className="bg-[black] h-[40px] mb-auto w-[80%] flex items-cetner justify-center rounded-lg">
                  <p className="font-bold text-[white] text-2xl  line-through pt-1 tracking-wide text-center">{captcha}</p>
                </div>
                <div className="w-[10%] h-[80px]">
                  <RotateCcw
                    className="cursor-pointer text-xl"
                    onClick={refreshstring}

                  />
                </div>

              </div>
              <div className="flex flex-col items-start space-y-2 h-[100px] ">
                <input name="captcha" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" placeholder="validate captcha" onChange={(e) => setenteredcaptcha(e.target.value)} />
                <p className="text-[#FF0000]">{formErrors?.captchaerr}</p>
              </div>

            </div>
            <div className="w-[60%] m-auto">
              <input type='submit' value='submit' style={
                { borderRadius: "10px" }
              } className="w-[100%] py-[10px]  flex justify-center text-[#FFFFFF]  items-center  bg-[#1D687F] hover:bg-[#FCB305] hover:text-[#1E1E1E] hover:border-none cursor-pointer" />
            </div>
            <div className="flex w-[40%] mx-auto">
              <span className="text-xl ">already registered go for</span><span className="cursor-pointer text-xl text-[#1D687F] underline" onClick={()=>router.push('/Login')}>Login</span>
            </div>
          </div>
        </form>
        <ReactNotifications />
      </div>
      <ToastContainer />
    </div>

  )
}

export default dynamic(() => Promise.resolve(Signup), { ssr: false })


