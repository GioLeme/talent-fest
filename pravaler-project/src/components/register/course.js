import React, { useState, useEffect} from 'react'
import Input from '../input/input'

export default function Course(e) {
    const [uf, setUf] = useState([]);

    fetch('https://laboratoria-2020-backend.herokuapp.com/estados/')
        .then(results => {
            return results.json()
        })
        .then(data => console.log(data))

    return (
        <div class="course-container">
            <form>
                <label for="college">Instituição</label>
                <Input
                    type={'text'}
                    value={e.currentTarget}
                    placeholder={'Nome da instituição de ensino'}
                />
                <label for="course">Curso</label>
                <Input
                    type={'text'}
                    value={e.currentTarget}
                    placeholder={'Nome do curso'}
                />
                <label for="money">Mensalidade</label>
                <Input
                    type={'number'}
                    value={e.currentTarget}
                    placeholder={'Valor da mensalidade do curso'}
                />
            </form>
        </div>
    )
}