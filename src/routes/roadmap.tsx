import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Building2, Zap, ArrowRight, Calendar } from 'lucide-react'

export const Route = createFileRoute('/roadmap')({
  component: RoadmapPage,
})

function RoadmapPage() {
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
              <h1 className="text-white text-2xl font-black tracking-tight">রাজশাহী २.०</h1>
            </Link>
            <div className="text-gray-300 font-medium">বাস্তবায়ন রোডম্যাপ</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
        <div className="space-y-8">
          <Badge className="w-fit bg-blue-500/10 border border-blue-500/30 text-blue-400">
            পর্যায়ক্রমিক বাস্তবায়ন পরিকল্পনা
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
            কীভাবে বাস্তবে আনব
            <br />
            এই পরিবর্তন?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            রূপান্তর মেগা-প্রকল্পের মাধ্যমে একক ঘটনা নয় — এটি তিন ধাপে বিস্তৃত একটি পরিকল্পনা যার প্রতিটি ধাপ পরবর্তী ধাপের ভিত্তি তৈরি করে।
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-lime-400/10">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <OverviewCard
            phase="১"
            title="তাৎক্ষণিক সংস্কার"
            duration="১২-১৮ মাস"
            focus="সিস্টেম পরিবর্তন"
            icon="⚙️"
            color="from-orange-500"
          />
          <OverviewCard
            phase="२"
            title="কৌশলগত অবকাঠামো"
            duration="२-५ বছর"
            focus="মৌলিক সুবিধা নির্মাণ"
            icon="🏗️"
            color="from-blue-500"
          />
          <OverviewCard
            phase="३"
            title="টেকসই বৃদ্ধি"
            duration="५+ বছর"
            focus="স্ব-টেকসই ইকোসিস্টেম"
            icon="🌱"
            color="from-green-500"
          />
        </div>
      </section>

      {/* Phase 1 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Badge className="mb-6 bg-orange-500/10 border border-orange-500/30 text-orange-400">ফেজ १</Badge>
          <h2 className="text-5xl font-bold text-white mb-6">তাৎক্ষণিক সংস্কার</h2>
          <p className="text-xl text-gray-300">প্রথম ১२-१८ মাসে: কোনো বড় মেগা-প্রকল্প নয় — সিস্টেম ও প্রক্রিয়া বদলানো</p>
        </div>

        <div className="space-y-4 mb-12">
          <PhaseDetailCard
            title="One Rajshahi Digital Portal চালু করা"
            purpose="নাগরিক সেবা এক প্ল্যাটফর্মে আনা"
            result="সেবা পেতে আর অফিসে ঘুরতে হবে না"
            timeline="০-६ মাস"
            priority="সর্বোচ্চ"
          />
          <PhaseDetailCard
            title="Complaint Tracking System + Public Dashboard"
            purpose="সমস্যা অনুসরণযোগ্য করা"
            result="প্রতিটি কাজ পরিমাপযোগ্য এবং জনগণের কাছে স্বচ্ছ"
            timeline="०-६ মাস"
            priority="সর্বোচ্চ"
          />
          <PhaseDetailCard
            title="Ward Development Audit শুরু করা"
            purpose="প্রতি ওয়ার্ডের অগ্রগতি ট্র্যাক করা"
            result="ওয়ার্ডভিত্তিক প্রতিযোগিতা ও জবাবদিহিতা"
            timeline="०-३ মাস"
            priority="উচ্চ"
          />
          <PhaseDetailCard
            title="Online Permit/Trade License Automation"
            purpose="ডিজিটাল ট্র্যাকিং এবং অটোমেশন"
            result="রাজস্ব বৃদ্ধি, দুর্নীতি হ্রাস"
            timeline="३-१२ মাস"
            priority="উচ্চ"
          />
          <PhaseDetailCard
            title="Green Business Registration Incentive"
            purpose="পরিবেশবান্ধব ব্যবসায় ট্যাক্স ছাড় দেওয়া"
            result="সবুজ অর্থনীতির ভিত্তি স্থাপন"
            timeline="१२-१८ মাস"
            priority="মাঝারি"
          />
        </div>

        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-8">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-orange-400" />
            ফেজ १ এর মূল লক্ষ্য
          </h3>
          <p className="text-gray-300 mb-4">
            <strong>Trust Building</strong> — নাগরিক যেন দেখে সিস্টেম সত্যিই বদলাচ্ছে এবং সেবা উন্নত হচ্ছে।
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• নো মেগা-প্রজেক্ট নয়, মন্ত্রমুগ্ধ করা ফলাফল</li>
            <li>• জনগণ উপলব্ধি অভিজ্ঞতা সরাসরি পাবে</li>
            <li>• সরকারী ব্যবস্থা থেকে মানুষের আস্থা ফেরাবে</li>
          </ul>
        </div>
      </section>

      {/* Phase 2 */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-lime-400/10">
        <div className="mb-12">
          <Badge className="mb-6 bg-blue-500/10 border border-blue-500/30 text-blue-400">ফेজ २</Badge>
          <h2 className="text-5xl font-bold text-white mb-6">কৌশলগত অবকাঠামো নির্মাণ</h2>
          <p className="text-xl text-gray-300">२ থেকে ५ বছরে: মৌলিক কাঠামো যা অর্থনীতি এবং পরিবেশ উভয়কে সাহায্য করে</p>
        </div>

        <div className="space-y-6">
          <Phase2Project
            name="Mango & Silk Processing Cluster"
            partner="বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট + SME তহবিল"
            model="PPP (জনিক-বেসরকারি অংশীদারিত্ব)"
            timeline="२-३ বছর"
            investment="মাঝারি"
            impact={['কৃষক আয় ৫০% বৃদ্ধি', 'হাজার চাকরি সৃষ্টি', 'রপ্তানি আয়']}
          />
          <Phase2Project
            name="Cold Chain & Solar Storage Center"
            partner="Development Partners / CSR"
            model="Build-Operate Model"
            timeline="३-४ বছর"
            investment="মাঝারি-উচ্চ"
            impact={['সবজি সংরক্ষণ সক্ষমতা দ্বিগুণ', 'শক্তি স্বাধীনতা', 'খাদ্য বর্জ্য হ্রাস']}
          />
          <Phase2Project
            name="E-Transport & Smart Rickshaw Network"
            partner="Private Operators + City Partnership"
            model="Lease-to-Own Model"
            timeline="२-३ বছর"
            investment="মাঝারি"
            impact={['বায়ু দূষণ ৩০% হ্রাস', 'যাত্রীদের সুবিধা', 'নতুন চাকরি']}
          />
          <Phase2Project
            name="Waste-to-Bioenergy Plant"
            partner="বিদেশী প্রযুক্তি + স্থানীয় ঠিকাদার"
            model="রাজস্ব শেয়ারিং চুক্তি"
            timeline="३-४ বছর"
            investment="উচ্চ"
            impact={['বর্জ্য ব্যবস্থাপনা সমাধান', 'বিদ্যুৎ উৎপাদন', 'কর্মসংস্থান']}
          />
          <Phase2Project
            name="Innovation & Startup Hub (বিশ্ববিদ্যালয় সংযুক্ত)"
            partner="বিশ্ববিদ্যালয় + ICT বিভাগ"
            model="Co-Managed Facility"
            timeline="१-२ বছর"
            investment="কম"
            impact={['স্টার্টআপ তৈরি', 'নতুন চাকরি', 'মেধা ধরে রাখা']}
          />
        </div>

        <div className="mt-12 bg-blue-500/10 border border-blue-500/30 rounded-xl p-8">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-400" />
            ফেজ २ এর লক্ষ্য
          </h3>
          <p className="text-gray-300">
            <strong>রাজশাহীর নিজস্ব অর্থনৈতিক পেশি (economic muscle) তৈরি করা।</strong> শহর নিজেই আয় করতে শিখবে এবং আত্মনির্ভর হবে।
          </p>
        </div>
      </section>

      {/* Phase 3 */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-lime-400/10">
        <div className="mb-12">
          <Badge className="mb-6 bg-green-500/10 border border-green-500/30 text-green-400">ফेজ ३</Badge>
          <h2 className="text-5xl font-bold text-white mb-6">টেকসই বৃদ্ধি ইকোসিস্টেম</h2>
          <p className="text-xl text-gray-300">५+ বছরে: রাজশাহী একটি স্ব-টেকসই, উন্নয়ন-উৎপাদক শহর হয়ে ওঠে</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Phase3Component
            title="City Investment Fund"
            description="স্থানীয় ব্যবসায়ী, প্রবাসী রাজশাহীবাসী ও প্রতিষ্ঠানিক বিনিয়োগকারীদের অংশগ্রহণে একটি তহবিল গঠন"
            benefits={['স্থানীয় সম্পদ ধারণ', 'ঝুঁকি ভাগাভাগি', 'দীর্ঘমেয়াদী বৃদ্ধি']}
            icon="💰"
          />
          <Phase3Component
            title="Green Export Corridor"
            description="সোলার কম্পোনেন্ট, কৃষিভিত্তিক পণ্য রপ্তানির জন্য নিবেদিত লজিস্টিক চেইন স্থাপন"
            benefits={['আন্তর্জাতিক বাজারে প্রবেশ', 'বৈদেশিক মুদ্রা অর্জন', 'ব্র্যান্ড তৈরি']}
            icon="🚢"
          />
          <Phase3Component
            title="Education → Skill → Job → Entrepreneurship Pipeline"
            description="শিক্ষা প্রতিষ্ঠান থেকে দক্ষতা প্রশিক্ষণ, চাকরি নিয়োগ এবং উদ্যোক্তা হওয়ার পথ তৈরি"
            benefits={['মেধা ধরে রাখা', 'স্থানীয় সূযোগ তৈরি', 'সামাজিক গতিশীলতা']}
            icon="🎓"
          />
          <Phase3Component
            title="Regional Development Hub"
            description="রাজশাহী ক্ষেত্রীয় উন্নয়নের কেন্দ্র হিসেবে স্বীকৃতি পায় এবং আশেপাশের জেলাগুলিকে নেতৃত্ব দেয়"
            benefits={['ক্ষেত্রীয় প্রভাব', 'শিল্প আকর্ষণ', 'সহযোগিতা নেটওয়ার্ক']}
            icon="🌍"
          />
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-400" />
            ফেজ ३ এর লক্ষ্য
          </h3>
          <p className="text-gray-300">
            রাজশাহী <strong>"নির্ভরশীল শহর"</strong> অবস্থান থেকে <strong>"স্ব-টেকসই শহর"</strong> তে পরিণত হয়ে ওঠে। এটি শুধু উন্নয়ন গ্রহণ করে না, বরং উন্নয়ন তৈরি করে এবং অন্যদের অনুপ্রাণিত করে।
          </p>
        </div>
      </section>

      {/* Dependencies & Sequencing */}
      <section className="bg-slate-800/50 border-y border-lime-400/20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">কেন এই ক্রম?</h2>
          <div className="space-y-8">
            <SequenceCard
              step="স্টেপ १"
              title="ফেজ १ প্রয়োজনীয় কারণ..."
              reason="প্রথমে মানুষ বিশ্বাস করতে চায় যে সিস্টেম পরিবর্তিত হচ্ছে। ডিজিটাল পোর্টাল এবং ট্র্যাকিং দ্রুত ফলাফল দেয় এবং আস্থা তৈরি করে।"
              enabling="এটি যা সক্ষম করে"
              next="→ ফেজ २"
            />
            <SequenceCard
              step="স্টেপ २"
              title="ফেজ २ করা সম্ভব হয় কারণ..."
              reason="ফেজ १ এ তৈরি বিশ্বাস এবং ডেটা সিস্টেম থাকায় এখন বড় প্রকল্পগুলি পরিকল্পনা ও নিরীক্ষণ করা সহজ হয়। প্লাস, ডিজিটাল রাজস্ব সিস্টেম বড় বাজেটের জন্য তহবিল যোগান দেয়।"
              enabling="এটি যা সক্ষম করে"
              next="→ ফেজ ३"
            />
            <SequenceCard
              step="স্টেপ ३"
              title="ফেজ ३ সম্ভব হয় যখন..."
              reason="ফেজ २ এর অবকাঠামো চালু হয় এবং অর্থনীতি বৃদ্ধি পায়, তখন স্থানীয় পুঁজি (তহবিল, ব্যবসায়ী, বিনিয়োগকারী) নিজেই রাজশাহীতে বিনিয়োগ করতে আগ্রহী হয়।"
              enabling="এটি যা সক্ষম করে"
              next="স্ব-টেকসই বৃদ্ধি চক্র"
            />
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">সময়ক্রম একনজরে</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500"></div>

          {/* Timeline Points */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <TimelineEntry
              year="০-१८ মাস"
              phase="ফেজ १"
              title="ডিজিটাল ও বিশ্বাস"
              color="from-orange-500"
              items={[
                'পোর্টাল লঞ্চ',
                'ট্র্যাকিং সিস্টেম',
                'অনলাইন পারমিট',
              ]}
            />
            <TimelineEntry
              year="२-५ বছর"
              phase="ফেজ २"
              title="প্রকল্প ও অবকাঠামো"
              color="from-blue-500"
              items={[
                'প্রসেসিং ক্লাস্টার',
                'কোল্ড চেইন',
                'স্মার্ট পরিবহন',
              ]}
            />
            <TimelineEntry
              year="५+ বছর"
              phase="ফেজ ३"
              title="টেকসই বৃদ্ধি"
              color="from-green-500"
              items={[
                'স্থানীয় তহবিল',
                'রপ্তানি গলি',
                'আঞ্চলিক নেতৃত্ব',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Success Indicators */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12">কিভাবে জানব আমরা সঠিক পথে আছি?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <IndicatorCard
            phase="ফেজ १ সাফল্য"
            indicators={[
              '৮০% অনলাইন সেবা ব্যবহার',
              '৯০ দিনের মধ্যে অভিযোগ সমাধান',
              'রাজস্ব সংগ্রহ ৪০% বৃদ্ধি',
              'সিটিজেন সন্তুষ্টি ৭০% এ পৌঁছায়',
            ]}
            color="from-orange-500"
          />
          <IndicatorCard
            phase="ফেজ २ সাফল্য"
            indicators={[
              'কৃষি-প্রক্রিয়াকরণ আউটপুট দ্বিগুণ',
              'হাজার নতুন চাকরি সৃষ্টি',
              'যুব ধারণ হার ৫০% থেকে ৭০% বৃদ্ধি',
              'বায়ু মান ৩০% উন্নত হয়',
            ]}
            color="from-blue-500"
          />
          <IndicatorCard
            phase="ফেজ ३ সাফল্য"
            indicators={[
              'স্থানীয় তহবিল ক্রমাগত কাজ করছে',
              'রপ্তানি রাজস্ব উল্লেখযোগ্য',
              'যুব ধারণ হার ৮০%+ এ পৌঁছায়',
              'আঞ্চলিক উন্নয়ন কেন্দ্র হিসেবে স্বীকৃতি',
            ]}
            color="from-green-500"
          />
          <IndicatorCard
            phase="দীর্ঘমেয়াদী মান"
            indicators={[
              'জিডিপি বৃদ্ধির হার ৬%+ বার্ষিক',
              'বেকারত্ব জাতীয় গড়ের নিচে',
              'পরিবেশ সূচক উন্নত দেশের স্তরে',
              'জীবনযাত্রার মান ঢাকার সাথে প্রতিযোগিতা করে',
            ]}
            color="from-lime-500"
          />
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gradient-to-r from-lime-400 to-cyan-400 py-20 rounded-2xl my-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            এই রোডম্যাপ বাস্তবায়নের দায়িত্ব
          </h2>
          <p className="text-lg text-slate-900/80 mb-8">
            শুধু প্রশাসন নয় — নাগরিক, ব্যবসায়ী, শিক্ষক, যুবক সবাই অংশীদার
          </p>
          <Link to="/governance">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-base h-14 px-8">
              গভর্নেন্স ও জবাবদিহিতা দেখুন →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-lime-400/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">তিনটি ফেজ</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>ফেজ १ - সংস্কার</li>
                <li>ফেজ २ - অবকাঠামো</li>
                <li>ফेজ ३ - টেকসই বৃদ্ধি</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">অন্যান্য পৃষ্ঠা</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/home" className="hover:text-lime-400">হোম</Link></li>
                <li><Link to="/vision" className="hover:text-lime-400">ভিশন</Link></li>
                <li><Link to="/current-status" className="hover:text-lime-400">প্রস্তুতি</Link></li>
                <li><Link to="/governance" className="hover:text-lime-400">গভর্নেন্স</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">যোগাযোগ</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>রাজশাহী, বাংলাদেশ</li>
                <li className="text-gray-500">আরও তথ্য শীঘ্রই</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-lime-400/20 pt-8 text-center text-gray-400">
            <p>রাজশাহী २.० - স্মার্ট, সবুজ এবং ন্যায়পরায়ণ শহর</p>
            <p className="text-sm mt-2">© २०२६ রাজশাহী মেয়রের নির্বাচনী প্রচার</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function OverviewCard({ phase, title, duration, focus, icon, color }: any) {
  return (
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-lime-400/20 p-8 text-center hover:border-lime-400/50 transition-all">
      <div className="text-5xl mb-4">{icon}</div>
      <div className={`text-3xl font-black bg-gradient-to-r ${color} to-cyan-400 bg-clip-text text-transparent mb-2`}>
        ফেজ {phase}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="space-y-2 text-sm">
        <p className="text-gray-300"><strong>সময়:</strong> {duration}</p>
        <p className="text-lime-400"><strong>ফোকাস:</strong> {focus}</p>
      </div>
    </Card>
  )
}

function PhaseDetailCard({ title, purpose, result, timeline, priority }: any) {
  const priorityColor = priority === 'সর্বোচ্চ' ? 'text-red-400' : 'text-orange-400'
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-6 hover:border-lime-400/40 transition-all">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <CheckCircle className="w-6 h-6 text-lime-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold mb-2">{title}</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-400 mb-1">উদ্দেশ্য</p>
              <p className="text-gray-300">{purpose}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">ফলাফল</p>
              <p className="text-lime-300">{result}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">সময়</p>
              <p className={`font-bold ${priorityColor}`}>{timeline} | {priority}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function Phase2Project({ name, partner, model, timeline, investment, impact }: any) {
  return (
    <Card className="bg-slate-800/50 border-blue-500/30 p-8 hover:border-blue-400 transition-all">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
        <span className="text-3xl">🏢</span> {name}
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">অংশীদার</p>
              <p className="text-gray-300">{partner}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">মডেল</p>
              <p className="text-blue-300 font-bold">{model}</p>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">সময়</p>
                <p className="text-white font-bold">{timeline}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">বিনিয়োগ</p>
                <p className="text-white font-bold">{investment}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-3">প্রভাব</p>
          <ul className="space-y-2">
            {impact.map((item: string, i: number) => (
              <li key={i} className="text-gray-300 flex gap-2">
                <span className="text-lime-400 flex-shrink-0">→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

function Phase3Component({ title, description, benefits, icon }: any) {
  return (
    <Card className="bg-gradient-to-br from-green-500/10 to-slate-800/50 border-green-500/30 p-8">
      <div className="flex gap-4 mb-4">
        <div className="text-4xl flex-shrink-0">{icon}</div>
        <h3 className="text-xl font-bold text-white self-center">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit: string, i: number) => (
          <li key={i} className="text-gray-300 text-sm flex gap-2">
            <span className="text-green-400 flex-shrink-0">✓</span> {benefit}
          </li>
        ))}
      </ul>
    </Card>
  )
}

function SequenceCard({ step, title, reason, enabling, next }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">{step}: {title}</h3>
        <p className="text-gray-300 leading-relaxed">{reason}</p>
        <div className="pt-4 border-t border-lime-400/10">
          <p className="text-sm text-lime-400 font-bold mb-2">{enabling}</p>
          <p className="text-white text-lg font-bold flex items-center gap-2">
            <ArrowRight className="w-5 h-5" /> {next}
          </p>
        </div>
      </div>
    </Card>
  )
}

function TimelineEntry({ year, phase, title, color, items }: any) {
  return (
    <div className="relative pt-24">
      <div className={`h-12 w-12 rounded-full mx-auto mb-4 bg-gradient-to-br ${color} to-cyan-400 flex items-center justify-center font-bold text-white text-lg`}>
        {phase.charAt(0)}
      </div>
      <div className="bg-slate-800/50 border border-lime-400/20 rounded-xl p-6 text-center">
        <p className="text-lime-400 font-bold text-sm mb-2">{year}</p>
        <h3 className="text-white font-bold mb-4">{title}</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          {items.map((item: string, i: number) => (
            <li key={i}>✓ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function IndicatorCard({ phase, indicators, color }: any) {
  return (
    <Card className={`bg-gradient-to-br ${color}/10 border-${color.split('-')[1]}-500/30 p-8`}>
      <h3 className={`text-lg font-bold text-white mb-6 flex items-center gap-2`}>
        <span className={`inline-block w-3 h-3 rounded-full bg-gradient-to-r ${color} to-cyan-400`}></span>
        {phase}
      </h3>
      <ul className="space-y-3">
        {indicators.map((indicator: string, i: number) => (
          <li key={i} className="text-gray-300 flex gap-3">
            <span className="text-lime-400 flex-shrink-0">✓</span>
            <span>{indicator}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
