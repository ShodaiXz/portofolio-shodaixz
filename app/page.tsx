"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Instagram,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeProvider } from "@/hooks/use-theme"
import { GoIcon, Postgresql, NodeJSIcon, NextJSIcon, MySQLIcon, LaravelIcon } from "@/components/icon/icon"
import { useRouter } from 'next/navigation'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Postgresql", level: 70, icon: Postgresql },
    { name: "Go-lang", level: 85, icon: GoIcon },
    { name: "NextJS", level: 50, icon: NextJSIcon },
    { name: "Node.js", level: 60, icon: NodeJSIcon },
    { name: "MySQL", level: 60, icon: MySQLIcon },
    { name: "Laravel", level: 50, icon: LaravelIcon },
  ]

  const projects = [
    {
      title: "Cek Khodam",
      description:
        "Platform cek khodam untuk mengecek khodam yang bersemayam di tubuh anda.",
      image: "/cekkodam.jpg",
      technologies: ["Javascript", "HTML", "Bootstrap"],
      github: "#",
      demo: "https://cekkhodambyshodaixz-m2gzg1qks-enggar7s-projects.vercel.app/",
    },
    {
      title: "CRUD Barang",
      description: "Aplikasi manajemen barang simpel dan berguna.",
      image: "/crud.png",
      technologies: ["Laravel", "Postgresql", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Manajemen Dosen",
      description: "Dashboard Manajemen Dosen yang Modern.",
      image: "/dosen.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#",
    },
    {
      title: "Nonton Anime",
      description: "Webiste nonton anime yang mengambil data dari API JIKAN.",
      image: "/api.png",
      technologies: ["NextJs", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
  ]

  const isComingSoon = true;

  const router = useRouter();

  const toCv = () => {
    router.push('https://drive.google.com/drive/folders/1-1xOCQN7JiF3IttZZjVV-hLUMGMftDvj')
  }

  return (

    <ThemeProvider>
      <link rel="icon" href="/images/keqing.png" sizes="any" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100 transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EnggarPorto
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {["home", "about", "skills", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors ${activeSection === item
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                  >
                    {item === "home"
                      ? "Beranda"
                      : item === "about"
                        ? "Tentang"
                        : item === "skills"
                          ? "Keahlian"
                          : item === "projects"
                            ? "Proyek"
                            : "Kontak"}
                  </button>
                ))}
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2 ">
                <ThemeToggle />
                <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
                {["home", "about", "skills", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 px-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                  >
                    {item === "home"
                      ? "Beranda"
                      : item === "about"
                        ? "Tentang"
                        : item === "skills"
                          ? "Keahlian"
                          : item === "projects"
                            ? "Proyek"
                            : "Kontak"}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-20 pb-16 px-4 sm:px-6 backgorund lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-20">
              <div className="mb-8">
                <Image
                  src="/foto.jpg"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto border-4 border-white dark:border-slate-700 shadow-xl"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 shadow-xl">
                Halo, Saya{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent shadow-xl">
                  Dimas Enggar Putra
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto shadow-xl">
                Backend Developer yang selalu ingin tahu dan terus belajar teknologi terbaru untuk menciptakan pengalaman digital yang luar biasa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Lihat Proyek Saya
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={toCv}
                  className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-slate-200"
                >
                  <Download className="mr-2 h-4 w-4"  />
                  Download CV
                </Button>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                <a
                  href="https://github.com/ShodaiXz"
                  className="text-slate-300  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-slate-300  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/dimz___k?utm_source=qr&igsh=MWRqbms0NWFyeXZ2OQ=="
                  className="text-slate-300  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="mailto:dimasenggarputra@gmail.com"
                  className="text-slate-300  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="text-center animate-bounce">
              <ChevronDown
                size={32}
                className="text-slate-400 dark:text-slate-500 cursor-pointer mx-auto"
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Tentang Saya</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Mengenal lebih dekat tentang perjalanan dan passion saya dalam dunia teknologi
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/gwjir.jpg"
                  alt="About me"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Saya adalah seorang Backend Developer dengan pengalaman membuat aplikasi dan web yang fungsional dan memberikan pengalaman
                  pengguna yang luar biasa, Passion saya terletak pada menciptakan sebuah seni yang bukan hanya indah tetapi berguna bagi orang lain.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Dengan latar belakang yang berpengalaman dalam REST API, Node.js, dan Golang, saya telah berhasil menyelesaikan berbagai
                  proyek mulai dari aplikasi absensi online, hingga voting osis. Saya selalu antusias untuk belajar teknologi
                  baru dan menghadapi tantangan yang kompleks.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Lokasi</h4>
                    <p className="text-slate-600 dark:text-slate-300 flex items-center">
                      <MapPin size={16} className="mr-2" />
                      Bogor, Indonesia
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Pengalaman</h4>
                    <p className="text-slate-600 dark:text-slate-300">SMA/SMK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Keahlian</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital terbaik
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow dark:bg-slate-700 dark:border-slate-600"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{skill.name}</h3>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{skill.level}% Proficiency</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Proyek Yang Dikerjakan</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Beberapa proyek aplikasi web yang telah saya kerjakan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow group dark:bg-slate-700 dark:border-slate-600"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-[90%] mx-auto rounded-sm h-62 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs dark:bg-slate-600 dark:text-slate-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Mari Berkolaborasi</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Punya proyek menarik? Mari diskusikan bagaimana kita bisa bekerja sama untuk mewujudkannya
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Informasi Kontak</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-4" />
                      <span className="text-slate-600 dark:text-slate-300">dimasenggarputra@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-4" />
                      <span className="text-slate-600 dark:text-slate-300">+62 838-9803-0163</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-4" />
                      <span className="text-slate-600 dark:text-slate-300">Bogor, Indonesia</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Ikuti Saya</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/ShodaiXz"
                      className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Github className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Linkedin className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                    </a>
                    <a
                      href="https://www.instagram.com/dimz___k?utm_source=qr&igsh=MWRqbms0NWFyeXZ2OQ=="
                      className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Instagram className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                    </a>
                    <a
                      href="mailto:dimasenggarputra@gmail.com"
                      className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Mail className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                    </a>
                  </div>
                </div>
              </div>

              <Card className="shadow-lg dark:bg-slate-700 dark:border-slate-600">
                <CardHeader>
                  <CardTitle className="dark:text-white">Kirim Pesan (Coming Soon)</CardTitle>
                  <CardDescription className="dark:text-slate-300">
                    Ceritakan tentang proyek Anda dan mari kita diskusikan lebih lanjut
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 block">
                          Nama
                        </label>
                        <Input
                          disabled={isComingSoon}
                          placeholder="Nama lengkap Anda"
                          className="dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 block">
                          Email
                        </label>
                        <Input
                          disabled={isComingSoon}
                          type="email"
                          placeholder="email@example.com"
                          className="dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 block">
                        Subjek
                      </label>
                      <Input disabled={isComingSoon}
                        placeholder="Subjek pesan"
                        className="dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 block">Pesan</label>
                      <Textarea disabled={isComingSoon}
                        placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                        rows={5}
                        className="dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200"
                      />
                    </div>
                    <Button disabled={isComingSoon} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              EnggarPorto
            </div>
            <p className="text-slate-400 mb-6">Dibuat dengan ❤️ menggunakan NextJs & Tailwind CSS</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/ShodaiXz" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/dimz___k?utm_source=qr&igsh=MWRqbms0NWFyeXZ2OQ==" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:dimasenggarputra@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Enggar. Semua hak dilindungi.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
