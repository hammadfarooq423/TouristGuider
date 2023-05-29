import React, { useEffect } from "react"
import "./VerifiedEmail.css"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const VerficationEmailSucsess=()=>{
    const {token}=useParams()

    async function EmailVerified() {
        await axios.get(`/api/v1/email/verify/${token}`)
        console.log("called");
    }
    useEffect(()=>{
        EmailVerified();
    });
    return (
        <>
            <div className="email_verification">
                <h1>Email Verified Successfully</h1>
                <Link to="/login">See Profile</Link>
            </div>
                
        </>
    )
}

export default VerficationEmailSucsess;