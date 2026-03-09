import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, TrendingDown, TrendingUp, Users, Briefcase, Leaf, Zap, Database } from 'lucide-react'

export const Route = createFileRoute('/current-status')({
  component: CurrentStatusPage,
})

function CurrentStatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-lime-400/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="size-10 bg-lime-400 flex items-center justify-center text-slate-900 rounded-lg font-bold">
                ৰ
              </div>
              <h1 className="text-white text-2xl font-black tracking-tight">রাজশাহী ২.০</h1>
            </Link>
            <div className="text-gray-300 font-medium">বর্তমান বাস্তবতা</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
        <div className="space-y-8">
          <Badge className="w-fit bg-orange-500/10 border border-orange-500/30 text-orange-400">
            ডেটা-ভিত্তিক বিশ্লেষণ
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
            রাজশাহী আজ যেখানে দাঁড়িয়ে
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            গর্ব এবং সম্ভাবনার শহর হলেও, আমরা এখনও আমাদের পূর্ণ সামর্থ্যের অর্ধেক পথে আছি। ডেটা এবং বাস্তবতা দেখায় কোথায় আমাদের শক্তি, এবং কোথায় আমাদের পরিবর্তন জরুরি।
          </p>
        </div>
      </section>

      {/* Population & Urban Structure */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-lime-400/10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">জনসংখ্যা ও শহর কাঠামো</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              রাজশাহী শুধু আর একটি ছোট শহর নয়। আমাদের শহর বৃদ্ধি পাচ্ছে, পরিবর্তন হচ্ছে, কিন্তু পরিকল্পনা সেই গতির সাথে তাল মিলাতে পারছে না।
            </p>
            <div className="space-y-4">
              <StatItem label="শহর এলাকায় জনসংখ্যা" value="৮-৯ লক্ষ" icon="👥" />
              <StatItem label="আশেপাশের নির্ভরশীল এলাকা" value="১৫+ লক্ষ" icon="🏘️" />
              <StatItem label="অনানুষ্ঠানিক বসতি বৃদ্ধি" value="দ্রুত গতিশীল" icon="📈" />
            </div>
          </div>
          <div className="bg-slate-800/50 border border-lime-400/20 rounded-2xl p-8 space-y-6">
            <div className="text-center">
              <div className="text-6xl font-black text-lime-400 mb-2">১৫+</div>
              <p className="text-gray-300">লক্ষ মানুষ রাজশাহীর উপর নির্ভরশীল</p>
            </div>
            <hr className="border-lime-400/20" />
            <div className="text-sm text-gray-400 space-y-3">
              <p>✓ পরিকল্পিত আবাসন বাড়ছে</p>
              <p>✓ কিন্তু অপরিকল্পিত বসতিও বাড়ছে</p>
              <p>✓ নগর পরিকল্পনা সিস্টেম পুরনো বোঝা নিয়ে চলছে</p>
            </div>
          </div>
        </div>
      </section>

      {/* Economy - The Core Challenge */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">অর্থনীতি ও কর্মসংস্থান</h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          রাজশাহীর অর্থনীতি তিনটি স্তম্ভের উপর দাঁড়িয়ে — কৃষি, প্রাণিজ এবং সরকারি চাকরি। আধুনিক শিল্প বা সেবা খাৎ এখনো উন্নত হয়নি।
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <EconomyCard 
            title="কৃষি"
            items={['আম', 'ধান', 'আলু']}
            status="বৃদ্ধির সীমায়"
            color="from-green-500"
          />
          <EconomyCard 
            title="প্রাণিজ শিল্প"
            items={['গবাদি', 'মাছ']}
            status="উদীয়মান"
            color="from-blue-500"
          />
          <EconomyCard 
            title="সেবা খাত"
            items={['সরকারি চাকরি', 'শিক্ষা']}
            status="সীমিত বৃদ্ধি"
            color="from-purple-500"
          />
        </div>
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-8">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-bold mb-3">প্রধান চ্যালেঞ্জ</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>মেধা পাচার:</strong> প্রশিক্ষিত গ্রাজুয়েটদের ৭০%+ ঢাকায় বা বিদেশে চলে যায়</li>
                <li>• <strong>শিক্ষিত বেকারত্ব:</strong> শহরে চাকরির সুযোগ নেই</li>
                <li>• <strong>সিল্ক শিল্প সংকট:</strong> ঐতিহ্যবাহী শিল্প এখন লুপ্তপ্রায়</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Brain Drain */}
      <section className="bg-slate-800/50 border-y border-lime-400/20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">শিক্ষা ও মেধা পাচার</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="text-5xl font-black text-red-400 mb-2">৭০%</div>
                <p className="text-gray-300">গ্রাজুয়েট শহর ছেড়ে চলে যায়</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-6 border border-lime-400/10">
                <h3 className="text-white font-bold mb-4">আমাদের প্রতিষ্ঠান</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-lime-400">✓</span>
                    <span><strong>রাজশাহী বিশ্ববিদ্যালয়</strong> - বাংলাদেশের শীর্ষ বিশ্ববিদ্যালয়</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lime-400">✓</span>
                    <span><strong>RUET</strong> - প্রকৌশল বিশ্ববিদ্যালয়</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lime-400">✓</span>
                    <span><strong>RMC</strong> - মেডিকেল কলেজ</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-900/50 rounded-lg p-8 border border-red-500/30">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-red-400" />
                  লোকসান
                </h3>
                <p className="text-gray-300 mb-6">
                  প্রতি বছর হাজার হাজার প্রতিভাবান গ্রাজুয়েট তৈরি হয়, কিন্তু রাজশাহীতে তাদের ক্যারিয়ারের সুযোগ নেই।
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>১. চাকরির বাজার সীমিত</p>
                  <p>২. উদ্যোক্তা হওয়ার পরিবেশ নেই</p>
                  <p>৩. স্টার্টআপ সংস্কৃতি অনুপস্থিত</p>
                  <p>৪. পুঁজি বিনিয়োগের সুযোগ নেই</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12">অবকাঠামো ও নাগরিক সেবা</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <StructureCard 
            icon="✓"
            title="মোটামুটি ভালো"
            items={['পানি সরবরাহ', 'বিদ্যুৎ', 'সড়ক নেটওয়ার্ক']}
            status="সন্তোষজনক"
            color="text-green-400"
          />
          <StructureCard 
            icon="✗"
            title="পিছিয়ে পড়া"
            items={['ড্রেনেজ ব্যবস্থা', 'ডিজিটাল সেবা', 'বর্জ্য ব্যবস্থাপনা']}
            status="পুরনো কাঠামো বজায়"
            color="text-red-400"
          />
        </div>
        <div className="mt-12 bg-slate-800/50 border border-lime-400/20 rounded-xl p-8">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-lime-400" />
            ডিজিটাল সেবার সমস্যা
          </h3>
          <p className="text-gray-300 mb-6">
            নাগরিকদের এখনও সিটি কর্পোরেশনের সেবা পেতে সরাসরি অফিসে যেতে হয়। কোনো অনলাইন সিস্টেম, অনুগ্রহ ট্র্যাকিং বা প্রতিশ্রুত সময়ের নিশ্চয়তা নেই।
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <li className="flex gap-2">
              <span className="text-orange-400">⚠</span> নো অনলাইন পারমিট সিস্টেম
            </li>
            <li className="flex gap-2">
              <span className="text-orange-400">⚠</span> নো কমপ্লেইন্ট ট্র্যাকিং
            </li>
            <li className="flex gap-2">
              <span className="text-orange-400">⚠</span> নো পাবলিক ড্যাশবোর্ড
            </li>
            <li className="flex gap-2">
              <span className="text-orange-400">⚠</span> নো রিয়েল-টাইম আপডেট
            </li>
          </ul>
        </div>
      </section>

      {/* Environment */}
      <section className="bg-slate-800/50 border-y border-lime-400/20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">পরিবেশ ও জলবায়ু</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <EnvironmentCard 
              label="বায়ুদূষণ"
              status="বাড়ছে"
              reason="ইট ভাটা, ব্যাটারি, যানবাহন"
              color="text-orange-400"
            />
            <EnvironmentCard 
              label="পানি সংকট"
              status="গুরুতর"
              reason="পদ্মার প্রবাহ কমছে"
              color="text-red-400"
            />
            <EnvironmentCard 
              label="জলবায়ু ঝুঁকি"
              status="বাড়ছে"
              reason="তাপমাত্রা বৃদ্ধি"
              color="text-red-500"
            />
          </div>
          <div className="mt-12 bg-orange-500/10 border border-orange-500/30 rounded-xl p-8">
            <h3 className="text-white font-bold mb-3">ভবিষ্যত হুমকি</h3>
            <p className="text-gray-300">
              যদি এখনই পদক্ষেপ না নেওয়া হয়, আমাদের পরিচ্ছন্নতার খ্যাতি হারিয়ে যাবে, এবং কৃষি ও জনস্বাস্থ্য গুরুতরভাবে ক্ষতিগ্রস্ত হবে।
            </p>
          </div>
        </div>
      </section>

      {/* Governance Gap */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12">প্রশাসন ও জবাবদিহিতা</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-lime-400/20 p-8">
            <h3 className="text-white font-bold mb-4 text-lg">বর্তমান অবস্থা</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>কোনো স্বচ্ছতা নেই সিটি কর্পোরেশন বাজেটে</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>নাগরিক জানে না কোথায় টাকা খরচ হচ্ছে</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>প্রকল্প সময়মতো শেষ হচ্ছে না</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                <span>অভিযোগের উত্তর পাওয়া যায় না</span>
              </li>
            </ul>
          </Card>
          <Card className="bg-slate-800/50 border-lime-400/20 p-8">
            <h3 className="text-white font-bold mb-4 text-lg">সমাধান অনুপস্থিত</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex gap-3">
                <span className="text-orange-400">📊</span>
                <span>কোনো পাবলিক পারফরম্যান্স ড্যাশবোর্ড নেই</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">🔔</span>
                <span>Citizen Accountability Framework অনুপস্থিত</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">📋</span>
                <span>কোনো সেবা মান নিশ্চয়তা (SLA) নেই</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">🎯</span>
                <span>নাগরিক অংশগ্রহণের ব্যবস্থা নেই</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Why Change Now */}
      <section className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl my-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">পরিবর্তন এখনই কেন জরুরি?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ChallengeCard 
              title="মেধা পাচার বাড়বে"
              description="তরুণরা এই শহরে কোনো ভবিষ্যৎ না দেখে চলে যাবে। শহর ধীরে ধীরে বয়স্ক ও স্থবির হয়ে পড়বে।"
              icon="🚪"
            />
            <ChallengeCard 
              title="অর্থনীতি থেমে যাবে"
              description="কৃষি থেকে আয় কমতে থাকবে। জলবায়ু পরিবর্তনের মুখে বর্তমান পদ্ধতিতে কোনো লাভ থাকবে না।"
              icon="📉"
            />
            <ChallengeCard 
              title="পরিবেশ খারাপ হবে"
              description="Air Quality খারাপ হলে স্বাস্থ্য বোঝা বাড়বে এবং আমাদের পরিচ্ছন্নতার খ্যাতি হারিয়ে যাবে।"
              icon="🌫️"
            />
          </div>
          <div className="mt-12 p-8 bg-slate-900/50 border border-red-500/30 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-400" />
              নিম্নমান ফাঁদ (Low-Service Trap)
            </h3>
            <p className="text-gray-300">
              যদি আমরা এখনই রাজস্ব তৈরি এবং সেবা উন্নত করতে না পারি, তাহলে একটি দুষ্টচক্র তৈরি হবে: কম সেবা → কম নাগরিক সন্তুষ্টি → কম বিনিয়োগ → আরও কম সেবা।
            </p>
          </div>
        </div>
      </section>

      {/* Opportunity Window */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-lime-600/20 to-cyan-600/20 border border-lime-400/40 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">আমাদের সুযোগ এখনই</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            বিশ্বের অনেক মাঝারি শহর এক লাফে এগিয়েছে। রাজশাহীর কাছে আছে শিক্ষিত জনশক্তি, আছে প্রতিষ্ঠান, আছে ঐতিহ্য। আমাদের দরকার সঠিক দিকনির্দেশনা এবং সাহস।
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">💡</div>
              <div>
                <h3 className="text-white font-bold mb-2">প্রযুক্তি আছে</h3>
                <p className="text-gray-400 text-sm">ডিজিটাল সমাধান এখন সাশ্রয়ী এবং প্রমাণিত</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">👨‍🎓</div>
              <div>
                <h3 className="text-white font-bold mb-2">মানুষ আছে</h3>
                <p className="text-gray-400 text-sm">আমাদের তিনটি উচ্চশিক্ষা প্রতিষ্ঠান থেকে প্রতি বছর দক্ষ গ্রাজুয়েট</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🌱</div>
              <div>
                <h3 className="text-white font-bold mb-2">সম্ভাবনা আছে</h3>
                <p className="text-gray-400 text-sm">কৃষি ও প্রক্রিয়াকরণে বিশাল সুযোগ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-lime-400 to-cyan-400 py-20 rounded-2xl my-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            বাস্তবতা বুঝেছি, এখন সমাধান দেখুন
          </h2>
          <p className="text-lg text-slate-900/80 mb-8">
            রাজশাহী ২.০ এর পাঁচ স্তম্ভ এবং তিন ধাপের বাস্তবায়ন পরিকল্পনা
          </p>
          <Link to="/vision">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-base h-14 px-8">
              ভিশন দেখুন →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-lime-400/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">এই পৃষ্ঠায়</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>জনসংখ্যা ও কাঠামো</li>
                <li>অর্থনীতির চ্যালেঞ্জ</li>
                <li>মেধা পাচার সংকট</li>
                <li>পরিবেশ হুমকি</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">অন্যান্য পৃষ্ঠা</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/home" className="hover:text-lime-400">হোম</Link></li>
                <li><Link to="/vision" className="hover:text-lime-400">ভিশন</Link></li>
                <li><Link to="/roadmap" className="hover:text-lime-400">রোডম্যাপ</Link></li>
                <li><Link to="/governance" className="hover:text-lime-400">গভর্নেন্স</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">যোগাযোগ করুন</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>রাজশাহী, বাংলাদেশ</li>
                <li className="text-gray-500">আরও যোগাযোগ তথ্য শীঘ্রই</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-lime-400/20 pt-8 text-center text-gray-400">
            <p>রাজশাহী ২.০ - স্মার্ট, সবুজ এবং ন্যায়পরায়ণ শহর</p>
            <p className="text-sm mt-2">© ২০২৬ রাজশাহী মেয়রের নির্বাচনী প্রচার</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StatItem({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-lime-400/10">
      <span className="text-3xl">{icon}</span>
      <div>
        <div className="text-sm text-gray-400">{label}</div>
        <div className="text-xl font-bold text-lime-400">{value}</div>
      </div>
    </div>
  )
}

function EconomyCard({ title, items, status, color }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-8 hover:border-lime-400/50 transition-all">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className={`h-1 w-16 bg-gradient-to-r ${color} to-cyan-400 rounded-full mb-6`}></div>
      <ul className="space-y-2 mb-6">
        {items.map((item: string, i: number) => (
          <li key={i} className="text-gray-300 flex items-center gap-2">
            <span className="text-lime-400">•</span> {item}
          </li>
        ))}
      </ul>
      <Badge className="bg-slate-900/50 border border-gray-600 text-gray-300">
        {status}
      </Badge>
    </Card>
  )
}

function StructureCard({ icon, title, items, status, color }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-8">
      <div className={`text-3xl font-bold ${color} mb-4`}>{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2 mb-6">
        {items.map((item: string, i: number) => (
          <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-gray-500">→</span> {item}
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500">{status}</p>
    </Card>
  )
}

function EnvironmentCard({ label, status, reason, color }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-6 text-center hover:border-orange-400/30 transition-all">
      <h3 className="text-white font-bold mb-2">{label}</h3>
      <div className={`text-2xl font-bold ${color} mb-2`}>{status}</div>
      <p className="text-xs text-gray-400">{reason}</p>
    </Card>
  )
}

function ChallengeCard({ title, description, icon }: any) {
  return (
    <Card className="bg-slate-800/50 border-red-500/30 p-8">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-white font-bold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </Card>
  )
}
