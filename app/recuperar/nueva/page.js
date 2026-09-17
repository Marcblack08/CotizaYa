'use client'
import {useState} from 'react'
import {supabase} from '../../../lib/supabase'

export default function NuevaPassword(){
 const [password,setPassword]=useState(''),[confirm,setConfirm]=useState(''),[msg,setMsg]=useState(''),[loading,setLoading]=useState(false)
 const submit=async e=>{e.preventDefault();setMsg('');if(password.length<8)return setMsg('La contraseña debe tener al menos 8 caracteres.');if(password!==confirm)return setMsg('Las contraseñas no coinciden.');setLoading(true);const {error}=await supabase.auth.updateUser({password});setLoading(false);if(error)return setMsg(error.message);setMsg('Contraseña actualizada. Ya puedes iniciar sesión.');setTimeout(()=>location.href='/login',1200)}
 return <main className="shell"><header className="topbar"><a className="brand" href="/">Cotiza<span>Ya</span></a></header><section className="main"><form className="form" onSubmit={submit}><h1>Nueva contraseña</h1><p className="muted">Crea una contraseña segura para tu cuenta.</p>{msg&&<div className="notice">{msg}</div>}<div className="field"><label>Nueva contraseña</label><input required minLength="8" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Mínimo 8 caracteres"/></div><div className="field"><label>Confirmar contraseña</label><input required minLength="8" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="Repite la contraseña"/></div><button className="btn" disabled={loading}>{loading?'Actualizando…':'Cambiar contraseña'}</button></form></section></main>
}
