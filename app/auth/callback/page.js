'use client'
import {useEffect} from 'react'
import {supabase} from '../../../lib/supabase'
export default function AuthCallback(){useEffect(()=>{supabase.auth.getSession().then(({data})=>{window.location.href=data.session?'/dashboard':'/login'})},[]);return <main className="shell"><section className="main"><div className="card"><h1>Verificando cuenta…</h1><p className="muted">Espera un momento.</p></div></section></main>}