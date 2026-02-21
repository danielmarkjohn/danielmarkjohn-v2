
import React from "react";
import { Mail, Phone, Github, Linkedin, FileText, Calendar } from "lucide-react";

export default function Contact(){
  return (
    <section id="contact" className="bg-gradient-to-br from-indigo-50 to-blue-50 -mx-4 px-4 py-12 rounded-2xl" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-3xl font-bold mb-6">Let's Connect</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="mailto:danielmarkj@hotmail.com" className="group p-6 bg-white rounded-xl shadow-lg border border-slate-200 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-sm text-muted">danielmarkj@hotmail.com</p>
            </div>
          </div>
        </a>

        <a href="tel:+919845985821" className="group p-6 bg-white rounded-xl shadow-lg border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
              <Phone className="text-emerald-500" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-sm text-muted">+91 9845985821</p>
            </div>
          </div>
        </a>

        <a href="https://github.com/danielmarkjohn" target="_blank" rel="noopener" className="group p-6 bg-white rounded-xl shadow-lg border border-slate-200 hover:border-slate-900 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors">
              <Github className="text-slate-900" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">GitHub</h3>
              <p className="text-sm text-muted">@danielmarkjohn</p>
            </div>
          </div>
        </a>

        <a href="https://linkedin.com/in/danielmarkjohn" target="_blank" rel="noopener" className="group p-6 bg-white rounded-xl shadow-lg border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors">
              <Linkedin className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">LinkedIn</h3>
              <p className="text-sm text-muted">@danielmarkjohn</p>
            </div>
          </div>
        </a>

        <a href="https://topmate.io/danielmarkjohn/754878?utm_source=public_profile&utm_campaign=danielmarkjohn" target="_blank" rel="noopener" className="group p-6 bg-white rounded-xl shadow-lg border border-slate-200 hover:border-purple-600 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-purple-600/10 group-hover:bg-purple-600/20 transition-colors">
              <Calendar className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Schedule a Call</h3>
              <p className="text-sm text-muted">Book via Topmate</p>
            </div>
          </div>
        </a>

        <a href="https://medium.com/@danielmarkj" target="_blank" rel="noopener" className="group p-6 bg-white rounded-xl shadow-lg border border-slate-200 hover:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-slate-800/10 group-hover:bg-slate-800/20 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-slate-800">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Medium</h3>
              <p className="text-sm text-muted">@danielmarkj</p>
            </div>
          </div>
        </a>

        <a href="/resume.pdf" target="_blank" rel="noopener" className="group p-6 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg border border-primary hover:shadow-2xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Resume</h3>
              <p className="text-sm text-white/80">Download PDF</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}





