import React, {useState} from "react";
import Student from '../../components/register/student'
import Course from '../../components/register/course'
import Guarantor from "../../components/register/guarantor";
import Button from "../../components/button/button"
import fire from '../../config/config'
import {saveInLocalStorage, getInLocalStorage} from '../../utils/handleRegister'
import SweetAlert from "sweetalert2-react";

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
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
      
    // props.history.push("/register/course");
  }
   
  return (
    <div>
      <Student step={currentStep}/>
      <Course  step={currentStep}/>
      <Guarantor step={currentStep}/>
      <div >
        <Button 
        handleClick={() => setCurrentStep(currentStep - 1)}
        title={'< anterior'}
        disabled={currentStep === 1}
        />
        {currentStep !== 3 
        ?<Button 
          handleClick={() => setCurrentStep(currentStep + 1)}
          title={'próximo >'}
          />
        :<Button 
        handleClick={saveDataInFirebase}
        title={'Finalizar Cadastro'}
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