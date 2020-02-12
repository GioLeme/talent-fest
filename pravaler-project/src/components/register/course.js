import React, { useState, useEffect} from "react";
import Input from "../input/input";
import axios from 'axios';
import {saveInLocalStorage, getInLocalStorage} from '../../utils/handleRegister'


export default function Course(props) {
  const [institutionName, setInstitutionName] = useState("");
  const [course, setCourse] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [uf, setUf] = useState([])
  useEffect(() => {
    fillFields()

    const fetchData = async () => {
      const result = await axios('https://laboratoria-2020-backend.herokuapp.com/estados/')

    setUf(result.data.estados)
    console.log(result.data.estados)
    }

    fetchData()
  },[])

 function saveInstitutionName(e){
  const collegeName=(e.currentTarget.value)
  setInstitutionName(collegeName)
 }

 function saveCourse(e){
  const courseName=(e.currentTarget.value)
  setCourse(courseName)
 }

 function saveMonthlyPayment(e){
  const payment=(e.currentTarget.value)
  setMonthlyPayment(payment)
 }

 function saveCourseData(){
  const courseData = {
    InstitutionName: institutionName,
    CourseName: course,
    MonthlyPayment: monthlyPayment,
  }
  saveInLocalStorage(courseData)
  // props.history.push("/register/course");
}

function fillFields(){
  const getSavedData = getInLocalStorage()
  if(!getSavedData) return
  
  setInstitutionName(getSavedData.InstitutionName)
  setCourse(getSavedData.CourseName)
  setMonthlyPayment(getSavedData.MonthlyPayment)
  // console.log(getSavedData)
}

if (props.step !== 2 ) return null
  return (
    <div className="course-container">
      <form>
        <label htmlFor="cpf">Dados da Instituição de ensino:</label>

        <label htmlfor="uf">Em qual estado fica a instituição de ensino?</label>
        <select id="uf" name="uf">
          <option value="volvo"></option>
        </select>
        <label htmlFor="college">Instituição</label>
        <Input
          type={"text"}
          value={institutionName}
          placeholder={"Nome da instituição de ensino"}
          onChange={(e) => saveInstitutionName(e)}
          focusOut={saveCourseData}
        />
        <label htmlFor="course">Curso</label>
        <Input 
          type={"text"} 
          value={course} 
          placeholder={"Nome do curso"} 
          onChange={(e) => saveCourse(e)}
          focusOut={saveCourseData}
        />
        <label htmlFor="money">Mensalidade</label>
        <Input
          type={"number"}
          value={monthlyPayment}
          placeholder={"Valor da mensalidade do curso"}
          onChange={(e) => saveMonthlyPayment(e)}
          focusOut={saveCourseData}
        />
      </form>
    </div>
  );
}
