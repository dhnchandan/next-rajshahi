import type { ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, MessageSquare, Users, Heart } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-lime-400/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="size-10 bg-lime-400 flex items-center justify-center text-slate-900 rounded-lg font-bold">
                র
              </div>
              <h1 className="text-white text-2xl font-black tracking-tight">রাজশাহী ২.০</h1>
            </Link>
            <div className="text-gray-300 font-medium">যোগাযোগ করুন</div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
        <div className="space-y-8 text-center">
          <Badge className="w-fit mx-auto bg-pink-500/10 border border-pink-500/30 text-pink-400">
            আমাদের সাথে যুক্ত হন
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
            রাজশাহীর ভবিষ্যৎ
            <br />
            <span className="text-lime-400">আপনার অংশগ্রহণে</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mx-auto">
            এই রূপান্তর মানুষের শক্তিতে বিশ্বাস করে। আপনার দক্ষতা, সময় বা পরামর্শ — সবকিছুই মূল্যবান।
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-lime-400/10">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">আমাদের সাথে যোগাযোগ করুন</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContactCard
            icon={<Mail className="w-8 h-8" />}
            title="ইমেইল"
            description="যেকোনো প্রশ্ন বা পরামর্শ পাঠান"
            content="hello@rajshahi2024.bd"
            accent="text-blue-400"
            gradient="from-blue-500"
          />
          <ContactCard
            icon={<Phone className="w-8 h-8" />}
            title="ফোন"
            description="সরাসরি যোগাযোগ করুন"
            content="সংখ্যা শীঘ্রই যুক্ত হবে"
            accent="text-cyan-400"
            gradient="from-cyan-500"
          />
          <ContactCard
            icon={<MapPin className="w-8 h-8" />}
            title="অবস্থান"
            description="আমাদের অফিসে দেখুন"
            content="রাজশাহী, বাংলাদেশ"
            accent="text-green-400"
            gradient="from-green-500"
          />
          <ContactCard
            icon={<MessageSquare className="w-8 h-8" />}
            title="সোশ্যাল মিডিয়া"
            description="আপডেট ও আলোচনার জন্য"
            content="Facebook, Twitter শীঘ্রই"
            accent="text-purple-400"
            gradient="from-purple-500"
          />
          <ContactCard
            icon={<Heart className="w-8 h-8" />}
            title="স্বেচ্ছাসেবক"
            description="আমাদের দলে যোগ দিন"
            content="নিচে রেজিস্টার করুন"
            accent="text-pink-400"
            gradient="from-pink-500"
          />
          <ContactCard
            icon={<Users className="w-8 h-8" />}
            title="কমিউনিটি"
            description="স্থানীয় সভা ও ইভেন্ট"
            content="প্রতি মাসে আয়োজনের পরিকল্পনা"
            accent="text-amber-400"
            gradient="from-amber-500"
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-lime-400 to-cyan-400 py-20 rounded-2xl my-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            আগামী দশকের জন্য প্রস্তুত?
          </h2>
          <p className="text-lg text-slate-900/80 mb-8">
            রাজশাহী ২.০ একটি যৌথ স্বপ্ন। আপনার অংশগ্রহণ ছাড়া এটি অসম্ভব।
          </p>
          <Link to="/home">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-base h-14 px-8">
              হোমে ফিরুন
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-lime-400/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">দ্রুত লিংক</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/home" className="hover:text-lime-400">হোম</Link></li>
                <li><Link to="/vision" className="hover:text-lime-400">ভিশন</Link></li>
                <li><Link to="/roadmap" className="hover:text-lime-400">রোডম্যাপ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">তথ্য</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/current-status" className="hover:text-lime-400">বর্তমান অবস্থা</Link></li>
                <li><Link to="/governance" className="hover:text-lime-400">গভর্নেন্স</Link></li>
                <li><Link to="/contact" className="hover:text-lime-400">যোগাযোগ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">যোগাযোগ</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@rajshahi2024.bd</li>
                <li>রাজশাহী, বাংলাদেশ</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-lime-400/20 pt-8 text-center text-gray-400">
            <p>রাজশাহী ২.০ - স্মার্ট, সবুজ এবং ন্যায়পরায়ণ শহর</p>
            <p className="text-sm mt-2">© ২০২৬ রাজশাহী মেয়রের নির্বাচনী প্রচার</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ContactCard({
  icon,
  title,
  description,
  content,
  accent,
  gradient,
}: {
  icon: ReactNode
  title: string
  description: string
  content: string
  accent: string
  gradient: string
}) {
  return (
    <div className={`bg-gradient-to-br ${gradient}/10 border border-white/10 rounded-2xl p-8`}>
      <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} to-cyan-400 text-white mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <p className={`${accent} font-bold`}>{content}</p>
    </div>
  )
}
