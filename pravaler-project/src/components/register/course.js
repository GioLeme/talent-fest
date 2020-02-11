import React from 'react'
import Input from '../input/input'

export default function Course(e) {

    return (
        <div class="course-container">
            <form>
                <label htmlFor="college">Instituição</label>
                <Input
                    type={'text'}
                    value={e.currentTarget}
                    placeholder={'Nome da instituição de ensino'}
                />
                <label htmlFor="course">Curso</label>
                <Input
                    type={'text'}
                    value={e.currentTarget}
                    placeholder={'Nome do curso'}
                />
                <label htmlFor="money">Mensalidade</label>
                <Input
                    type={'number'}
                    value={e.currentTarget}
                    placeholder={'Valor da mensalidade do curso'}
                />
            </form>
        </div>
    )
}