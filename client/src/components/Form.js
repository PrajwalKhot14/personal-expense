import React from "react";
import {useForm} from 'react-hook-form';
import List from "./List";
import {default as api} from '../store/apiSlice';


export default function Form(){
    
    const {register, handleSubmit, resetField} = useForm();
    const [addTransaction]= api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        if(!data) return {};
        await addTransaction(data).unwrap();
        resetField('name');
        resetField('amount');
        // resetField('date');
    }
    return (
        <div className="form max-w-sm mx-auto w-96">
            <h1 className="font-bold pb-4 text-xl">Transactions</h1>

            <form id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-group">
                        <input type="text" {...register('name')} placeholder="Transaction Name" className ="form-input"></input>
                    </div>
                    <select className="form-input" {...register('type')}>
                        <option value="Investment" defaultValue>Investment</option>
                        <option value="Food & Drinks">Food & Drinks</option>
                        <option value="Travel">Travel</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Others">Others</option>
                    </select>
                    
                    <div className="input-group">
                        <input type="text" {...register('amount')} placeholder="Amount" className ="form-input"></input>
                    </div>
                    
                    {/* <div className="input-group">
                        <input type="date" {...register('date')} id="start" className ="form-input" name="trip-start" min="2022-01-01" max="2022-12-31"></input>
                    </div> */}

                    <div className="submit-btn">
                        <button className="border-py-2 text-white bg-indigo-500 p-2">Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    )
}