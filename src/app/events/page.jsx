import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 hover:text-orange-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xl">🎉</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Event Highlights</h1>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Sri Siddha Shiva VaraGanapati Utsava - 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the divine celebration with sacred rituals, spiritual programs, and community gatherings
          </p>
        </div>

        {/* Main Event - Dhoopa Deeparati */}
        <Card className="mb-12 border-orange-300 shadow-2xl bg-gradient-to-r from-orange-50 to-red-50">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Star className="w-6 h-6" />
              <span>Main Event: Dhoopa Deeparati</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <span className="text-lg font-semibold">September 1, 2025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span className="text-lg">6:00 PM onwards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="text-lg">Shri Siddharoodh Math, Chalakapur</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-red-600" />
                    <span className="text-lg font-semibold">1001 Women Participants</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-orange-800 mb-3">Event Highlights:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span>Sacred Dhoopa Deeparati ceremony performed by 1001 devoted women</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                    <span>Beautiful Kailash Mantapa decoration in traditional Hubli style</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span>Collective Aarti creating divine atmosphere with oil lamps</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                    <span>Spiritual chanting and devotional songs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span>Prasadam distribution to all devotees</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">✅ No Registration Fee</p>
                  <p className="text-green-700 text-sm mt-1">Free participation for all devoted women</p>
                </div>
              </div>

              <div className="text-center">
                <Image
                  src="/012.jpg"
                  alt="Dhoopa Deeparati Ceremony"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-xl w-full object-cover"
                />
                <p className="text-sm text-gray-600 mt-2 italic">1001 women performing sacred Dhoopa Deeparati</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Programs */}
   
        {/* Registration CTA */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Celebration?</h2>
          <p className="text-xl mb-6 text-orange-100">
            Register now to be part of this divine Dhoopa Deeparati ceremony
          </p>
          <Link href="/register">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Register for Dhoopa Deeparati
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}