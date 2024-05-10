import axios from 'axios';
const url = "http://localhost:4500/api/v1"



export const UserSignup = async (payload: any) => {
    try {
        console.log(payload)
        const { data } = await axios.post(`${url}/User/register`, payload);
        return data

    } catch (error) {
        return error
    }
}
export const UserLoginApi = async (payload: any) => {
    try {
        console.log(payload)
        const { data } = await axios.post(`${url}/User/login`, payload);
        return data

    } catch (error) {
        return error
    }
}
export const UserProfile = async (token: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    };
    try {
        console.log("UserProfileauth", Auth)
        const { data } = await axios.get(`${url}/User/profile`, Auth);
        return data

    } catch (error) {
        return error
    }
}

export const AllusersData = async (token: string, country?: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    };
    try {

        const { data } = await axios.get(`${url}/User/Alluser?country=${country}`, Auth);
        return data

    } catch (error) {
        return error
    }
}

export const GetAllCategories = async (token: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    };
    try {
        const { data } = await axios.get(`${url}/User/getAllCategory`, Auth);
        return data
    } catch (error) {
        return error
    }
}

export const UpdateUserAvtar = async (payload: FormData, token: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    };
    console.log("updateuseravtar", Auth, payload)
    try {
        const { data } = await axios.patch(`${url}/User/update-avtar`, payload, Auth);
        return data;
    } catch (error) {
        return error;
    }
};


export const UpdateUserPassword = async (payload: {
    email: string;
    password: string;
    confirmPassword: string;
}, token: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    };
    try {
        const { data } = await axios.patch(`${url}/User/update-password`, payload, Auth);
        return data
    } catch (error) {

    }
}

export const getUserById = async (token: string, id: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    }

    try {
        const { data } = await axios.get(`${url}/User/SingleUser/${id}`, Auth);
        return data;
    } catch (error) {
        return error;
    }
};
export const RegisteredInvestOptions = async (payload: FormData, token: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    }

    try {
        const { data } = await axios.post(`${url}/Admin/register-Investment`, payload, Auth);
        return data;
    } catch (error) {
        return error;
    }
};
export const UpdateInvestOption = async (payload: FormData, id: string, token: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    }

    try {
        const { data } = await axios.patch(`${url}/Admin/Update-Investment/${id}`, payload, Auth);
        return data;
    } catch (error) {
        return error;
    }
};
export const getAllInvestOptions = async (token: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    }

    try {
        const { data } = await axios.get(`${url}/User/getAllOptions`, Auth);
        return data;
    } catch (error) {
        return error;
    }
};
export const GetAllOptionsByCategory = async (token: string, id: string) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    }

    try {
        const { data } = await axios.get(`${url}/User/getOptions/${id}`, Auth);
        return data;
    } catch (error) {
        return error;
    }
};

export const UpdatePayOptions = async (token: string, obj: {
    DateOfPayoutIssued: string,
    AmountTransfered: string
    TransactionType: string
    CurrentReturnRate: string
    CategoryId: string,
    SelectId: string
}) => {
    const Auth = {
        headers: {
            Authorization: `${token}`,
        },
    }

    try {
        const { data } = await axios.post(`${url}/User/Create-Payouts`,obj, Auth);
        return data;
    } catch (error) {
        return error;
    }
}


export const UserPayoutOption=async(token:string,id:string)=>{
    try {
        // /User/Get-PayoutOptions/:id.
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
    
        try {
            const { data } = await axios.get(`${url}/User/Get-PayoutOptions/${id}`, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}


export const Forwardmessages=async(token:string,payload:{
    CategoryId?:string,
       Country?:string,
       sendTo?:string,
       message?:string
})=>{
    try {
        // /User/Get-PayoutOptions/:id.
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
    
        try {
            const { data } = await axios.post(`${url}/Admin/SendMessage`,payload, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}

export const subscribeInvestOption=async(token:string,payload:{
    InvestOptionId?:string,
    paidMoney:string
})=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        try {
            const { data } = await axios.post(`${url}/User/Subscribe-Options`,payload, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}
// /User/Portfollio

export const UserPortfollio=async(token:string)=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        try {
            const { data } = await axios.get(`${url}/User/Portfollio`, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}

export const UserPortfollioById=async(token:string,id:string)=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        try {
            const { data } = await axios.get(`${url}/Admin/UserPortfollio/${id}`, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}

export const GetUserAllPortfollio=async(token:string)=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        try {
            const { data } = await axios.get(`${url}/User/getAllPortfollios`, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}


export const GetUserPortfollioByCategory=async(token:string,id:string,payload:{
    CategoryId:string
})=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        try {
            const { data } = await axios.post(`${url}/Admin/GetPortfollios-Category/${id}`,payload, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}
export const GetAllAdminUserPortfollioByCategory=async(token:string,payload:{
    CategoryId:string
})=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        try {
            const { data } = await axios.post(`${url}/Admin/UserGetPortfollios-Category`,payload, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}

export const GetAllAdminUserPortfollioByCountry=async(token:string,payload:{
    countryName:string
})=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        try {
            const { data } = await axios.post(`${url}/Admin/UserGetPortfollios-country`,payload, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}

export const GetuserPayoutDetails=async(id:string,token:string)=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        console.log("tokenId",id);
        try {
            const { data } = await axios.get(`${url}/User/Get-PayoutOptions/${id}`, Auth);
            return data;
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}

export const UpdateUserPayoutOptions=async(payload:{
    Username?:string,
    accountNumber?:string,
    BankName?:string,
    BankAddress?:string,
    SwiftCode?:string,
    IfscCode?:string,
    Number?:string,
    PaypalLink?:string,
    otherpayoutLinks?:string
},token:string)=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        try {
            console.log("updatedata",payload)
            const { data } = await axios.post(`${url}/User/Create-PayoutOptions`,payload, Auth);
            return data
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}

export const GetUserReturnPayouts=async(id:string,token:string)=>{
    try {
        const Auth = {
            headers: {
                Authorization: `${token}`,
            },
        }
        try {
          
            const { data } = await axios.get(`${url}/User/getUsersPayout/${id}`, Auth);
            return data
        } catch (error) {
            return error;
        }
    } catch (error) {
        
    }
}

