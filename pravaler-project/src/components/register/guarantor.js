import React from 'react'
import Input from '../input/input'

export default function Guarantor(e) {
    return (
        <div class="guarantor-container">
            <form>
                <label for="cpf">CPF</label>
                <Input
                    type={'text'}
                    value={e.currentTarget}
                    placeholder={'XXX.XXX.XXX-XX'}
                />
                <label for="name">Name</label>
                <Input
                    type={'text'}
                    value={e.currentTarget}
                    placeholder={'Nome'}
                />
                <label for="money">Renda Mensal</label>
                <Input
                    type={'number'}
                    value={e.currentTarget}
                    placeholder={'Renda Mensal'}
                />
            </form>
        </div>
    )
}