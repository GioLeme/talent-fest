import React from "react";
import Student from '../../components/register/student'
import Course from '../../components/register/course'
import Guarantor from "../../components/register/guarantor";

function RegisterPage() {

  return (
    <div>
      <Student />
      <Course />
      <Guarantor/>
    </div>
  )
}

export default RegisterPage