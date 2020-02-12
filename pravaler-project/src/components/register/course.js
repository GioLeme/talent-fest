import React, { useState, useEffect} from "react";
import Input from "../input/input";
import axios from 'axios';
import {saveInLocalStorage, getInLocalStorage} from '../../utils/handleRegister'
import './register.css'


export default function Course(props) {
  const [institutionName, setInstitutionName] = useState("");
  const [course, setCourse] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [ufList, setUfList] = useState([]);
  const [uf, setUf] = useState("");
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");
  const [collegeList, setCollegeList] = useState([]);
  const [college, setCollege] = useState('');
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    fillFields()

    const fetchUf = async() => {
      const resultUf = await axios('https://laboratoria-2020-backend.herokuapp.com/estados/')

      setUfList(resultUf.data.estados)
    }

    fetchUf()
    
  },[])

  useEffect(() => {
    const fetchCity = async() => {
      const resultCity = await axios(`https://laboratoria-2020-backend.herokuapp.com/estados/${uf}/cidades`)
  
      setCityList(resultCity.data.cidades)
    }

    fetchCity()
  }, [uf])

  useEffect(() => {
    const fetchCollege = async() => {
      const resultCollege = await axios(`https://laboratoria-2020-backend.herokuapp.com/estados/${uf}/cidades/${city}/ies`)
    
    setCollegeList(resultCollege.data.ies)
    }

    fetchCollege()
  }, [city])

  useEffect(() => {
    const fetchCourses = async() => {
      const resultCourses = await axios(`https://laboratoria-2020-backend.herokuapp.com/ies/${college}/cursos`)
      console.log(resultCourses.data.cursos)

      setCourseList(resultCourses.data.cursos)
    }

    fetchCourses()
  }, [college])

  const selectUf = (value) => {
    if (value)
      setUf(value)
  }

  const selectCity = (value) => {
    if(value) {
      setCity(value)
    }
  }

  const selectCollege = (value) => {
    setCollege(value)
  }

  const selectCourse = (value) => {
    setCourse(value);
  }

  if(institutionName && course && monthlyPayment){
    props.setCourseReady(true)
  }

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
    <div className="container">
      <form class="form">
        <p class="title">Sobre o Curso</p>
        <label htmlFor="uf">Em qual estado fica a instituição de ensino?</label>
        <select id="uf" name="uf" className="input" onChange={e => selectUf(e.currentTarget.value)}>
          {
            ufList.map(item => <option value={item.code}>{item.descricao}</option>)
          }
        </select>
        <label htmlFor="city">Em qual cidade fica a instituição de ensino?</label>
        <select id="city" name="city" className="input" onChange={e => selectCity(e.currentTarget.value)}>
          {
            cityList.map(item => <option value={item.code}>{item.nome}</option>)
          }
        </select>
        <label htmlFor="college">Instituição de ensino</label>
        <select id="college" name="college" className="input" onChange={e => selectCollege(e.currentTarget.value)}>
          {
            collegeList.map(item => <option value={item.code}>{item.nome}</option>)
          }
        </select>
        <label htmlFor="course">Curso</label>
        <select id="course" name="course" className="input" onChange={e => selectCourse(e.currentTarget.value)}>
          {
            courseList.map(item => <option value={item}>{item}</option>)
          }
        </select>
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
