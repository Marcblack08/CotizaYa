'use client'
import {useState} from 'react'
import {supabase} from '../../lib/supabase'

export default function Recuperar(){
 const [email,setEmail]=useState(''),[msg,setMsg]=useState(''),[loading,setLoading]=useState(false)
 const submit=async e=>{e.preventDefault();setLoading(true);setMsg('');const {error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin+'/recuperar/nueva'});setLoading(false);setMsg(error?error.message:'Si el correo existe, recibirás un enlace para restablecer tu contraseña.')}
 return <main className="shell"><header className="topbar"><a className="brand" href="/">Cotiza<span>Ya</span></a></header><section className="main"><form className="form" onSubmit={submit}><h1>Recuperar contraseña</h1><p className="muted">Te enviaremos un enlace para crear una nueva contraseña.</p>{msg&&<div className="notice">{msg}</div>}<div className="field"><label>Correo electrónico</label><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="correo@ejemplo.com"/></div><button className="btn" disabled={loading}>{loading?'Enviando…':'Enviar enlace'}</button><p className="muted"><a href="/login">Volver al inicio de sesión</a></p></form></section></main>
}
