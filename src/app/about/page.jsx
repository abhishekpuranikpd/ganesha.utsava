import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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
                <span className="text-orange-600 font-bold text-xl">ॐ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">About Our Saints</h1>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Our Revered Saints</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about the great spiritual masters who guide and bless our sacred celebrations
          </p>
        </div>

        {/* Sri Siddharoodh Swamiji */}
        <Card className="mb-12 border-orange-200 shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <Image
                  src="/ajja.jpg"
                  alt="Sri Siddharoodh Swamiji"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-xl mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Sri Siddharoodh Swamiji</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Sri Siddharoodh Swamiji (1836-1929) was a great saint and spiritual master who established the
                  Siddharoodh Math in Hubli. Known for his miraculous powers and deep spiritual wisdom, he dedicated his
                  life to serving humanity and spreading the message of universal love and compassion.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span className="text-gray-700">Established multiple spiritual centers across Karnataka</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span className="text-gray-700">Known for his healing powers and spiritual guidance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span className="text-gray-700">Promoted unity among all religions and communities</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HH Dr. Shivakumar Swamiji */}
        <Card className="mb-12 border-red-200 shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-red-800 mb-4">HH Dr. Shivakumar Swamiji</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Sadguru Sri Dr. Shivakumar Swamiji is the revered head of Chidambarashram in Bidar. A learned scholar and
                  spiritual guide, he continues the tradition of his predecessors in spreading spiritual knowledge and
                  serving devotees with compassion and wisdom.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                    <span className="text-gray-700">Head of Chidambarashram, Bidar</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                    <span className="text-gray-700">Renowned spiritual teacher and guide</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                    <span className="text-gray-700">Actively involved in social and spiritual activities</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Image
                  src="/appaji.jpg"
                  alt="HH Dr. Shivakumar Swamiji"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-xl mx-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sri Shankarananda Swamiji */}
        <Card className="mb-12 border-orange-200 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-orange-800 mb-4">Sri Shankarananda Swamiji</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                Sri Shankarananda Swamiji is Following in the
                footsteps of Sri Siddharoodh Swamiji and Sri Shivakumar Swamiji, he continues to guide devotees on their spiritual journey and
                organizes various religious and cultural programs.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🙏</span>
                  </div>
                  <h3 className="font-semibold text-orange-800">Spiritual Guidance</h3>
                  <p className="text-sm text-gray-600 mt-2">Provides spiritual counseling and guidance to devotees</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <h3 className="font-semibold text-orange-800">Cultural Programs</h3>
                  <p className="text-sm text-gray-600 mt-2">Organizes festivals and cultural celebrations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-semibold text-orange-800">Community Service</h3>
                  <p className="text-sm text-gray-600 mt-2">Actively involved in community welfare activities</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Temple Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-6">
              <Image
                src="/math.jpg"
                alt="Temple Deity"
                width={400}
                height={300}
                className="rounded-xl w-full object-cover"
              />
              <h3 className="text-xl font-bold text-orange-800 mt-4 text-center"> Temple</h3>
              <p className="text-gray-600 text-center mt-2">Divine presence in our  temple</p>
            </CardContent>
          </Card>
          <Card className="border-red-200 shadow-lg">
            <CardContent className="p-6">
              <Image
                src="/math1.jpg"
                alt="Temple "
                width={400}
                height={300}
                className="rounded-xl h-auto w-full object-cover"
              />
              <p className="text-gray-600 text-center mt-2">Beautiful floral offerings to the divine</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/register">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Join Our Sacred Celebration
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}