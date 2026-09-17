'use client'
import {useEffect,useState} from 'react'
import {supabase} from '../../../lib/supabase'

export default function AuthCallback(){
 const [msg,setMsg]=useState('Verificando tu cuenta…')
 useEffect(()=>{(async()=>{const code=new URLSearchParams(location.search).get('code');if(code){const {error}=await supabase.auth.exchangeCodeForSession(code);if(error){setMsg('No se pudo confirmar la cuenta.');setTimeout(()=>location.href='/login',1800);return}}const {data}=await supabase.auth.getSession();if(data.session)location.href='/dashboard';else{setMsg('No se pudo iniciar la sesión.');setTimeout(()=>location.href='/login',1800)}})()},[])
 return <main className="shell"><section className="main"><div className="card"><h1>{msg}</h1><p className="muted">Espera un momento.</p></div></section></main>
}
