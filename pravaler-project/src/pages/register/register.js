import React, {useState} from "react";
import Student from '../../components/register/student'
import Course from '../../components/register/course'
import Guarantor from "../../components/register/guarantor";
import Button from "../../components/button/button"
import fire from '../../config/config'
import {getInLocalStorage} from '../../utils/handleRegister'
import SweetAlert from "sweetalert2-react";
import '../../components/button/button.css'

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [studentReady, setStudentReady] = useState(false);
  const [courseReady, setCourseReady] = useState(false);
  const [guarantorReady, setGuarantorReady] = useState(false);
  const [message, setMessage] = useState({
    show: false,
    title:'',
    type:''
  });

  function saveDataInFirebase(){
    const allData = getInLocalStorage()
    fire
      .firestore()
      .collection("userData")
      .doc(allData.UserCpf)
      .set(allData)
      .then(() => {
      setMessage({
        show : true,
        title:'Cadastro realizado, aguarde nosso contato! :)',
        type:'success'
      })
      setTimeout(() => {
        setMessage({})
      }, 3000);
      })
      .catch(() =>  {setMessage({
        show : true,
        title:'Erro ao realizar o cadastro',
        type:'success'
      })
      setTimeout(() => {
        setMessage({})
      }, 3000);
      });
      {window.location='/'}
  }
   
  return (
    <div>
      <Student step={currentStep} studentReady={studentReady} setStudentReady={setStudentReady}/>
      <Course  step={currentStep} courseReady={courseReady} setCourseReady={setCourseReady}/>
      <Guarantor step={currentStep} guarantorReady={guarantorReady} setGuarantorReady={setGuarantorReady}/>
      <div  className="buttons" >
        <Button 
        handleClick={() => setCurrentStep(currentStep - 1)}
        className= {'current-step'}
        title={'< anterior'}
        disabled={currentStep === 1}
        />
        {currentStep !== 3 
        ?<Button 
          className= {'current-step'}
          handleClick={() => setCurrentStep(currentStep + 1)}
          title={'próximo >'}
          />
          :<Button 
          className= {'current-step'}
          handleClick={saveDataInFirebase}
          title={'Finalizar Cadastro'}
          disabled={!studentReady, !courseReady, !guarantorReady}
          type={'submit'}
        />
      }
        <SweetAlert
        show={message.show}
        type={message.type}
        title={message.title}
        showConfirmButton={false}
      />

       
         
      </div>
    </div>
  )
}

export default RegisterPage