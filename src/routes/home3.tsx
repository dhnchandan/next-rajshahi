import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Leaf, Users, Target, BarChart3 } from 'lucide-react'

export const Route = createFileRoute('/home3')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-lime-400/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-lime-400 flex items-center justify-center text-slate-900 rounded-lg font-bold">
                ৰ
              </div>
              <h1 className="text-white text-2xl font-black tracking-tight">রাজশাহী ২.০</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <Link to="/vision" className="text-gray-300 hover:text-lime-400 font-medium text-sm transition-colors">ভিশন</Link>
              <Link to="/current-status" className="text-gray-300 hover:text-lime-400 font-medium text-sm transition-colors">বর্তমান অবস্থা</Link>
              <Link to="/roadmap" className="text-gray-300 hover:text-lime-400 font-medium text-sm transition-colors">রোডম্যাপ</Link>
              <Link to="/governance" className="text-gray-300 hover:text-lime-400 font-medium text-sm transition-colors">গভর্নেন্স</Link>
              <Link to="/contact" className="text-gray-300 hover:text-lime-400 font-medium text-sm transition-colors">যোগাযোগ</Link>
            </nav>
            <Button className="hidden sm:flex bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold">
              স্বেচ্ছাসেবক হোন
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-400/10 border border-lime-400/30 rounded-full">
              <span className="size-2 rounded-full bg-lime-400 animate-pulse"></span>
              <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">নির্বাচনী ইশতেহার ২০২৬</span>
            </div>

            <h2 className="text-6xl lg:text-7xl font-black text-white leading-tight">
              রাজশাহী ২.০
              <br />
              <span className="text-lime-400">ঐতিহ্য</span> থেকে
              <br />
              <span className="text-cyan-400">উদ্ভাবনের</span> পথে
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              পদ্মা পাড়ের রেশম নগরী থেকে আমরা গড়বো স্মার্ট, সবুজ এবং ন্যায়পরায়ণ একটি অগ্রগামী শহর। প্রযুক্তি, শিক্ষা এবং টেকসই উন্নয়নের মাধ্যমে রাজশাহীকে নিয়ে যাবো নতুন উচ্চতায়।
            </p>

            <div className="flex gap-4 pt-6">
              <Link to="/vision">
                <Button className="bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold text-base h-14 px-8">
                  ভিশন দেখুন <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" className="border-lime-400 text-lime-400 hover:bg-lime-400/10 font-bold text-base h-14 px-8">
                ইশতেহার পড়ুন
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-lime-400/20 to-cyan-400/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-800/50 border border-lime-400/20 rounded-2xl p-8 space-y-6">
              <div className="text-5xl font-black text-lime-400">৫</div>
              <h3 className="text-2xl font-bold text-white">পরিবর্তনমূলক স্তম্ভ</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Smart Governance</strong> - সম্পূর্ণ ডিজিটাল সেবা</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Green Economy</strong> - কৃষি থেকে সবুজ উৎপাদন</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Knowledge City</strong> - শিক্ষা থেকে উদ্যোক্তা</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Smart Mobility</strong> - পরিবেশবান্ধব পরিবহন</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Justice & Transparency</strong> - সম্পূর্ণ স্বচ্ছতা</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-slate-800/50 border-y border-lime-400/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="৮-৯" label="লক্ষ শহুরে জনসংখ্যা" />
            <StatCard number="১৫+" label="লক্ষ নির্ভরশীল জনগোষ্ঠী" />
            <StatCard number="৭০%" label="মেধা পাচার হার" />
            <StatCard number="৩" label="উচ্চশিক্ষা প্রতিষ্ঠান" />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black text-white mb-12">আমাদের পরিকল্পনা জানুন</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NavigationCard 
            to="/current-status"
            title="বর্তমান বাস্তবতা"
            description="রাজশাহীর ডেটা-ভিত্তিক মূল্যায়ন এবং চ্যালেঞ্জ"
            icon="📊"
          />
          <NavigationCard 
            to="/vision"
            title="রাজশাহী ২.০ ভিশন"
            description="পাঁচটি রূপান্তরমূলক স্তম্ভ এবং লক্ষ্য"
            icon="🎯"
          />
          <NavigationCard 
            to="/why-transform"
            title="পরিবর্তন কেন জরুরি"
            description="ভবিষ্যত হারানোর ঝুঁকি এবং সুযোগ"
            icon="⚠️"
          />
          <NavigationCard 
            to="/roadmap"
            title="বাস্তবায়ন রোডম্যাপ"
            description="তিন ধাপে পরিকল্পনা এবং সময়সীমা"
            icon="🗓️"
          />
          <NavigationCard 
            to="/governance"
            title="গভর্নেন্স ও জবাবদিহিতা"
            description="প্রশাসনিক কাঠামো এবং স্বচ্ছ পর্যবেক্ষণ"
            icon="⚖️"
          />
          <NavigationCard 
            to="/contact"
            title="যোগ দিন আমাদের সাথে"
            description="স্বেচ্ছাসেবী হোন এবং রাজশাহীর ভবিষ্যৎ গড়ুন"
            icon="🤝"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-lime-400 to-cyan-400 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            রাজশাহীর ভবিষ্যৎ গড়ুন আজই
          </h2>
          <p className="text-lg text-slate-900/80 mb-8 max-w-2xl mx-auto">
            আমরা খুঁজছি উদ্যমী নাগরিক যারা বিশ্বাস করে স্মার্ট, সবুজ এবং ন্যায্য রাজশাহীয়। আপনার দক্ষতা, সময় এবং ধারণা শেয়ার করুন।
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-base h-14 px-8">
              স্বেচ্ছাসেবক রেজিস্ট্রেশন
            </Button>
            <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900/10 font-bold text-base h-14 px-8">
              যোগাযোগ করুন
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-lime-400/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p className="mb-4">রাজশাহী ২.০ - স্মার্ট, সবুজ এবং ন্যায়পরায়ণ শহর</p>
          <p className="text-sm">© ২০২৬ রাজশাহী মেয়রের নির্বাচনী প্রচার | সকল অধিকার সংরক্ষিত</p>
        </div>
      </footer>
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-6 rounded-xl bg-slate-900/50 border border-lime-400/10 hover:border-lime-400/30 transition-all">
      <div className="text-4xl font-black text-lime-400 mb-2">{number}</div>
      <div className="text-sm text-gray-400 font-medium">{label}</div>
    </div>
  )
}

function NavigationCard({ to, title, description, icon }: { to: string; title: string; description: string; icon: string }) {
  return (
    <Link to={to}>
      <div className="group p-8 rounded-xl bg-slate-800/50 border border-lime-400/20 hover:border-lime-400/50 hover:bg-slate-800 transition-all cursor-pointer h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        <div className="mt-4 text-lime-400 font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          বিস্তারিত <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}
