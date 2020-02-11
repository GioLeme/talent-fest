import React from 'react'
import Input from '../input/input'

export default function Course(e) {

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