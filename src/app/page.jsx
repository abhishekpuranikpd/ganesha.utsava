import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Phone, Star, Heart, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/intricate-mandala.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-white to-orange-100 rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                <span className="text-orange-600 font-bold text-2xl animate-pulse">ॐ</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  Sri Siddha Shiva VaraGanapati Utsava - 2025
                </h1>
                <p className="text-orange-100 text-sm flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Chalakapur
                </p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Events", "Register", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-orange-200 transition-all duration-300 hover:scale-110 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-200 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-red-600/10 to-yellow-600/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-6 h-6 mr-2 animate-spin" />
              <span className="text-2xl mr-2">🕉</span>
              <span className="font-semibold">Divine Celebration</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-800 to-orange-600 bg-clip-text text-transparent">
                Sri Siddha Shiva
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
                VaraGanapati Utsava
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent text-6xl md:text-8xl">
                2025
              </span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-lg text-gray-700 mb-10">
           <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Calendar className="w-6 h-6 text-orange-600" />
                <span className="font-bold text-orange-800">From Aug 27 to Sep 2</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Calendar className="w-6 h-6 text-orange-600" />
                <span className="font-bold text-orange-800">September 1, 2025</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <MapPin className="w-6 h-6 text-red-600" />
                <span className="font-semibold">Shri Siddharoodh Math, Chalakapur</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
              Join us for the divine celebration of Lord Ganesha with the sacred{" "}
              <span className="font-semibold text-orange-700">Dhoopa Deeparati ceremony</span>. Experience the spiritual
              grandeur as <span className="font-bold text-red-700">1001 women</span> come together in devotion and
              unity.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 hover:from-orange-700 hover:via-red-700 hover:to-orange-800 text-white px-10 py-5 text-xl font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-orange-500/25 group"
                >
                  <span className="mr-3">Register for Dhoopa Deeparati</span>
                  <span className="text-2xl group-hover:animate-bounce">🪔</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2 text-green-700 bg-green-50 px-6 py-3 rounded-full border-2 border-green-200">
                <Heart className="w-5 h-5 text-green-600" />
                <span className="font-semibold">FREE Registration</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/012.jpg"
                alt="Dhoopa Deeparati Ceremony"
                width={1000}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Dhoopa Deeparati</h3>
                <p className="text-lg opacity-90">1001 Women in Divine Unity</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-80 animate-bounce delay-500"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/subtle-lotus-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-800 to-red-700 bg-clip-text text-transparent mb-4">
              Event Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">1001 Women</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Sacred Dhoopa Deeparati performed by 1001 devoted women in perfect unity and devotion
                </p>
                <div className="mt-4 flex justify-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-red-50 to-red-100 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏛</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">Kailash Mantapa</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Beautiful Hubli-style decoration creating a divine atmosphere for spiritual connection
                </p>
                <div className="mt-4 flex justify-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🆓</span>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Free Registration</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  No registration fee - open to all devoted women seeking divine blessings
                </p>
                <div className="mt-4 flex justify-center">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ganesha Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/om-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full mb-6">
                <span className="text-xl mr-2">🐘</span>
                <span className="font-semibold">Divine Blessings</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-800 to-red-700 bg-clip-text text-transparent mb-8">
                Lord Ganesha Blessings
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Seek the divine blessings of Lord Ganesha, the remover of obstacles and the lord of new beginnings. This
                sacred Utsava brings together devotees from all walks of life to celebrate the divine presence of
                <span className="font-bold text-orange-700"> Vighnaharta Ganesha</span>.
              </p>

              <div className="space-y-6">
                {[
                  { text: "Removal of obstacles in life", icon: "🚫", color: "orange" },
                  { text: "Blessings for new beginnings", icon: "🌟", color: "red" },
                  { text: "Spiritual growth and wisdom", icon: "🧘‍♀️", color: "yellow" },
                  { text: "Peace and prosperity", icon: "☮️", color: "green" },
                ].map((blessing, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${blessing.color}-400 to-${blessing.color}-600 rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-xl">{blessing.icon}</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800">{blessing.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <Image
                  src="/ganesh.jpg"
                  alt="Lord Ganesha"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-80 animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Join the Divine Celebration</h2>
            <p className="text-xl md:text-2xl mb-10 text-orange-100 leading-relaxed">
              Be part of this sacred gathering and receive your personalized{" "}
              <span className="font-bold text-white">WhatsApp status video</span> as a blessed memory
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/25 transform hover:scale-110 transition-all duration-300 group"
                >
                  <span className="mr-3">Register Now</span>
                  <span className="text-2xl group-hover:animate-spin">✨</span>
                </Button>
              </Link>

              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-12 py-6 text-xl font-bold rounded-full bg-transparent shadow-2xl hover:shadow-white/25 transform hover:scale-110 transition-all duration-300"
                >
                  View Events
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "1001", label: "Women Participants" },
                { number: "1", label: "Sacred Day" },
                { number: "∞", label: "Divine Blessings" },
                { number: "FREE", label: "Registration" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-orange-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center">
                <span className="text-3xl mr-3">🙏</span>
                Presided By
              </h3>
              <div className="space-y-6">
             
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <p className="text-xl font-semibold text-white">Shri Siddharoodh Math</p>
                  <p className="text-orange-300 mt-2">( Chalakapur)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                Contact
              </h3>
              <div className="space-y-4">
                {["9731194053", "9019188438"].map((phone, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 text-orange-400" />
                    <span className="text-lg font-medium">{phone}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Location
              </h3>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <p className="text-lg font-semibold text-white mb-2">Shri Siddharoodh Math</p>
                <p className="text-gray-300 mb-1">Chalakapur</p>
                <p className="text-gray-300">Karnataka, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 Sri Siddharoodh Math, Chalakapur. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <span className="text-orange-400">Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span className="text-orange-400">for devotees</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
