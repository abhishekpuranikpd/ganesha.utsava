import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
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
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Contact Us</h1>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about the Ganesh Utsava or need assistance with registration? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-800 flex items-center space-x-2">
                  <Phone className="w-6 h-6" />
                  <span>Helpline Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-orange-800">9731194053</p>
                      <p className="text-gray-600">Primary Contact</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-red-800">9019188438</p>
                      <p className="text-gray-600">Secondary Contact</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800 flex items-center space-x-2">
                  <MapPin className="w-6 h-6" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Shri Siddharoodh Math</h3>
                    <p className="text-gray-700">
                      Chalakapur
                      <br />
                      Karnataka, India
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.123456789!2d75.123456!3d15.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChalakapur!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>

          {/* Contact Form */}
          <div className="space-y-8">


            <Card className="border-red-200 shadow-lg">
              <CardContent className="p-6">
                <Image
                  src="/math1.jpg"
                  alt="Temple"
                  width={400}
                  height={300}
                  className="rounded-xl w-full object-cover"
                />
                <h3 className="text-xl font-bold text-red-800 mt-4 text-center">Visit Our Sacred Temple</h3>
                <p className="text-gray-600 text-center mt-2">
                  Experience the divine atmosphere at Shri Siddharoodh Math
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-orange-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-orange-800 mb-2">Is there any registration fee?</h3>
                <p className="text-gray-700">
                  No, the registration for Dhoopa Deeparati is completely free for all devoted women.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-red-800 mb-2">What will I receive after registration?</h3>
                <p className="text-gray-700">
                  You will receive a personalized WhatsApp status video with your name and divine Ganesha images.
                </p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-orange-800 mb-2">Can I bring my family?</h3>
                <p className="text-gray-700">
                  Yes, family members are welcome to attend and witness the sacred ceremony.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-red-800 mb-2">What should I bring for the ceremony?</h3>
                <p className="text-gray-700">
                  Just bring your devotion and faith along with the aarati materials . All necessary items for the ceremony will be provided.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}