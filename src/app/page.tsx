"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter()
  const [inputVal, setInputVal] = useState('')
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    push(`/prob/${inputVal}`)
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Coloque seu  nome</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className='text-black'
          type='text'
          placeholder='Digite aqui...'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type='submit' className='text-black bg-slate-600'>botao</button>
      </form>
    </div>
  );
}

// nao lembro oque eu ia falar