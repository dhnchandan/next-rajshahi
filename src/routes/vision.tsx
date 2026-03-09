import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Leaf, Users, Smartphone, Scale, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/vision')({
  component: VisionPage,
})

function VisionPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-lime-400/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="size-10 bg-lime-400 flex items-center justify-center text-slate-900 rounded-lg font-bold">
                ৰ
              </div>
              <h1 className="text-white text-2xl font-black tracking-tight">রাজশাহী ২.०</h1>
            </Link>
            <div className="text-gray-300 font-medium">রাজশাহী ২.० ভিশন</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
        <div className="space-y-8">
          <Badge className="w-fit bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            রূপান্তরের মূল দর্শন
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
            রাজশাহী ২.०
            <br />
            <span className="text-lime-400">স্মার্ট</span>, <span className="text-green-400">সবুজ</span>, <span className="text-cyan-400">ন্যায্য</span> শহর
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            এটি শুধু একটি স্লোগান নয়। এটি একটি বাস্তব নীতিমালা কাঠামো, যার ভেতর রয়েছে পাঁচটি রূপান্তরমূলক স্তম্ভ এবং পরিমাপযোগ্য ফলাফল।
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-lime-400/10">
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-white mb-6">আমাদের রূপান্তরের দর্শন</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              রাজশাহী একটি মর্যাদাপূর্ণ শহর — শিক্ষার কেন্দ্র, পরিচ্ছন্নতার প্রতীক। কিন্তু সম্মান ধরে রাখতে হলে এগিয়ে যেতে হবে।
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              আমরা চাই এমন একটি শহর যেখানে:
            </p>
          </div>
          <div className="bg-linear-to-br from-lime-400/20 to-cyan-400/20 border border-lime-400/40 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-6xl font-black bg-linear-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                5
              </div>
              <p className="text-white font-bold">রূপান্তরমূলক স্তম্ভ</p>
              <p className="text-gray-300 text-sm mt-2">এক দশকে বাস্তবের জন্য</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-gray-300 mb-12">
          <div className="flex gap-4">
            <span className="text-3xl flex-shrink-0">🏛️</span>
            <div>
              <h3 className="text-white font-bold mb-2">স্বচ্ছতা ও দক্ষতা</h3>
              <p className="text-sm">প্রতিটি টাকা, প্রতিটি প্রকল্পের হিসাব জনগণ দেখতে পাবে</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-3xl flex-shrink-0">🌱</span>
            <div>
              <h3 className="text-white font-bold mb-2">টেকসই বৃদ্ধি</h3>
              <p className="text-sm">পরিবেশকে রক্ষা করে অর্থনীতি গড়ব</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-3xl flex-shrink-0">👨‍💼</span>
            <div>
              <h3 className="text-white font-bold mb-2">প্রতিভা ধরে রাখা</h3>
              <p className="text-sm">আমাদের যুবকদের জন্য এখানেই ক্যারিয়ার তৈরি হবে</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-3xl flex-shrink-0">🤝</span>
            <div>
              <h3 className="text-white font-bold mb-2">সবার জন্য ন্যায্যতা</h3>
              <p className="text-sm">কোনো শ্রেণি বা এলাকা বঞ্চিত হবে না</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">পাঁচটি রূপান্তরমূলক স্তম্ভ</h2>
        <div className="space-y-8">
          {/* Pillar 1 */}
          <PillarCard
            icon={<Zap className="w-8 h-8" />}
            title="স্মার্ট গভর্নেন্স"
            subtitle="দক্ষতা + ডিজিটাল সেবা + জবাবদিহিতা"
            color="from-yellow-500 to-amber-500"
            features={[
              'এক প্ল্যাটফর্মে সব নাগরিক সেবা ("One Rajshahi Portal")',
              'সম্পূর্ণ ডিজিটাল পেমেন্ট সিস্টেম — কোনো কাগজ নয়',
              'রিয়েল-টাইম অভিযোগ ট্র্যাকিং ও পাবলিক ড্যাশবোর্ড',
              'AI-ভিত্তিক বাজেট ও কর্মক্ষমতা পর্যবেক্ষণ',
            ]}
            benefits={[
              { emoji: '⏰', text: 'কোনো সময় অপচয় নেই' },
              { emoji: '💰', text: 'দুর্নীতি কমে যায়' },
              { emoji: '📊', text: 'সবাই জানে কী হচ্ছে' },
            ]}
          />

          {/* Pillar 2 */}
          <PillarCard
            icon={<Leaf className="w-8 h-8" />}
            title="সবুজ অর্থনীতি"
            subtitle="কৃষি থেকে উচ্চ মূল্যের উৎপাদন"
            color="from-green-500 to-emerald-500"
            features={[
              'আম ও সিল্ক প্রক্রিয়াকরণ জোন গড়া',
              'সবজি রপ্তানির জন্য কোল্ড চেইন অবকাঠামো',
              'সৌর শক্তি চালিত গুদাম ও সংরক্ষণ ব্যবস্থা',
              'পুনর্নবীকরণযোগ্য শক্তি উপাদান উৎপাদন (সোলার প্যানেল, ব্যাটারি)',
            ]}
            benefits={[
              { emoji: '💵', text: 'কৃষকদের আয় দ্বিগুণ' },
              { emoji: '🏭', text: 'নতুন কর্মসংস্থান' },
              { emoji: '🌍', text: 'রপ্তানি বৃদ্ধি' },
            ]}
          />

          {/* Pillar 3 */}
          <PillarCard
            icon={<Users className="w-8 h-8" />}
            title="জ্ঞান ও উদ্ভাবন শহর"
            subtitle="শিক্ষা থেকে উদ্যোক্তা পর্যন্ত"
            color="from-blue-500 to-cyan-500"
            features={[
              'বিশ্ববিদ্যালয়-শিল্প সহযোগিতা হাব',
              'স্টার্টআপ এক্সিলারেটর ও মাইক্রো গ্র্যান্ট প্রোগ্রাম',
              'সকলের জন্য ডিজিটাল দক্ষতা প্রোগ্রাম',
              'মেকার ল্যাব ও প্রোটোটাইপ তৈরির সুবিধা',
            ]}
            benefits={[
              { emoji: '🎓', text: 'শিক্ষা → চাকরি → উদ্যোগ' },
              { emoji: '💡', text: 'স্থানীয় উদ্ভাবন' },
              { emoji: '🚀', text: 'মেধা ধরে রাখা' },
            ]}
          />

          {/* Pillar 4 */}
          <PillarCard
            icon={<Smartphone className="w-8 h-8" />}
            title="স্মার্ট গতিশীলতা & নগর অবকাঠামো"
            subtitle="পরিবেশবান্ধব পরিবহন ও নিরাপদ রাস্তা"
            color="from-purple-500 to-pink-500"
            features={[
              'কম নির্গমন পাবলিক পরিবহন (স্মার্ট রিকশা নেটওয়ার্ক)',
              'একীভূত সাইকেল নেটওয়ার্ক ও হাঁটার পথ',
              'স্মার্ট ড্রেনেজ ও বন্যা প্রতিরোধ ব্যবস্থা',
              'রাস্তার আলোতে স্মার্ট সেন্সর নেটওয়ার্ক',
            ]}
            benefits={[
              { emoji: '🌫️', text: 'বায়ু দূষণ কমে' },
              { emoji: '🚴', text: 'স্বাস্থ্যকর জীবন' },
              { emoji: '⚡', text: 'শক্তি সাশ্রয়' },
            ]}
          />

          {/* Pillar 5 */}
          <PillarCard
            icon={<Scale className="w-8 h-8" />}
            title="স্বাস্থ্য, খাদ্য নিরাপত্তা ও পরিবেশগত ন্যায়বিচার"
            subtitle="সবার জন্য স্বাস্থ্য ও নিরাপদ পরিবেশ"
            color="from-red-500 to-rose-500"
            features={[
              'ডিজিটাল স্বাস্থ্য রেকর্ড সহ সম্প্রদায় ক্লিনিক',
              'QR-ভিত্তিক খাদ্য নিরাপত্তা শংসাপত্র (সম্পূর্ণ ট্রেসেবিলিটি)',
              'শিল্প বর্জ্য নিয়ন্ত্রণ ফ্রেমওয়ার্ক',
              'সবুজ জনস্থান সম্প্রসারণ (পার্ক, বাগান)',
            ]}
            benefits={[
              { emoji: '🏥', text: 'সবার স্বাস্থ্য যত্ন' },
              { emoji: '🍎', text: 'নিরাপদ খাবার' },
              { emoji: '🌳', text: 'পরিষ্কার পরিবেশ' },
            ]}
          />
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-slate-800/50 border-y border-lime-400/20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">কীভাবে এগুলো একসাথে কাজ করে?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">⚙️</div>
                <div>
                  <h3 className="text-white font-bold mb-2">স্মার্ট গভর্নেন্স</h3>
                  <p className="text-gray-400 text-sm">সব তথ্য সংগ্রহ করে এবং সিদ্ধান্ত নিতে সাহায্য করে</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">↓</div>
                <div className="text-gray-400 text-sm italic">যা সবুজ অর্থনীতিকে শক্তিশালী করে</div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">🌱</div>
                <div>
                  <h3 className="text-white font-bold mb-2">সবুজ অর্থনীতি</h3>
                  <p className="text-gray-400 text-sm">নতুন চাকরি তৈরি করে এবং আয় বাড়ায়</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">↓</div>
                <div className="text-gray-400 text-sm italic">যা শিক্ষার্থীদের আকর্ষণ করে</div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">🎓</div>
                <div>
                  <h3 className="text-white font-bold mb-2">জ্ঞান শহর</h3>
                  <p className="text-gray-400 text-sm">উদ্ভাবন এবং উদ্যোক্তা তৈরি করে</p>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-lime-500/10 to-cyan-500/10 border border-lime-400/30 rounded-2xl p-8">
              <h3 className="text-white font-bold mb-6 text-lg">ফলাফল</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span className="text-gray-300"><strong>মেধা ধরে রাখা হয়</strong> — তরুণরা চলে যায় না</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span className="text-gray-300"><strong>অর্থনীতি বৃদ্ধি পায়</strong> — আয় বাড়ে, কর্মসংস্থান তৈরি হয়</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span className="text-gray-300"><strong>পরিবেশ রক্ষা হয়</strong> — সবুজ পদ্ধতি অনুসরণ করা হয়</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span className="text-gray-300"><strong>জীবনযাত্রার মান উন্নত হয়</strong> — সেবা ও সুযোগ সবার জন্য</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Success */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">সাফল্য কীভাবে পরিমাপ করব?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <MetricCard
            metric="ডিজিটাল সেবা ব্যবহার"
            current="০%"
            target="৮০%"
            timeline="৫ বছর"
            what="অনলাইনে সেবা নেওয়ার হার"
          />
          <MetricCard
            metric="কৃষি প্রক্রিয়াকরণ আউটপুট"
            current="বর্তমান"
            target="দ্বিগুণ"
            timeline="৫ বছর"
            what="মান-সংযোজিত কৃষি পণ্য"
          />
          <MetricCard
            metric="তরুণ ধারণ হার"
            current="৩০%"
            target="৮০%"
            timeline="৫ বছর"
            what="রাজশাহীতে থেকে কাজ করা তরুণ"
          />
          <MetricCard
            metric="বায়ু গুণমান উন্নতি"
            current="খারাপ"
            target="-৩০% AQI"
            timeline="৫ বছর"
            what="বায়ু দূষণ সূচক হ্রাস"
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">কখন এটা ঘটবে?</h2>
        <div className="space-y-6">
          <TimelinePhase
            phase="ফেজ ১"
            title="তাৎক্ষণিক সংস্কার (১২-১৮ মাস)"
            description="সিস্টেম ও প্রক্রিয়া পরিবর্তন — কোনো বড় প্রকল্প নয়"
            items={[
              'ডিজিটাল পোর্টাল চালু করা',
              'অভিযোগ ট্র্যাকিং সিস্টেম',
              'অনলাইন পারমিট অটোমেশন',
            ]}
            color="from-orange-500"
          />
          <div className="h-8 flex items-center justify-center">
            <div className="text-3xl text-lime-400">⬇️</div>
          </div>
          <TimelinePhase
            phase="ফেজ ২"
            title="কৌশলগত অবকাঠামো নির্মাণ (২-৫ বছর)"
            description="মৌলিক সুবিধা তৈরি যা অর্থনীতি ও পরিবেশ উভয়কে সাহায্য করে"
            items={[
              'আম ও সিল্ক প্রসেসিং ক্লাস্টার',
              'কোল্ড চেইন ও সৌর সংরক্ষণ কেন্দ্র',
              'স্মার্ট পরিবহন নেটওয়ার্ক',
              'উদ্ভাবন হাব ও স্টার্টআপ এক্সিলারেটর',
            ]}
            color="from-blue-500"
          />
          <div className="h-8 flex items-center justify-center">
            <div className="text-3xl text-lime-400">⬇️</div>
          </div>
          <TimelinePhase
            phase="ফেজ ৩"
            title="টেকসই বৃদ্ধি ইকোসিস্টেম (৫+ বছর)"
            description="রাজশাহী একটি স্ব-টেকসই, উন্নয়ন-উৎপাদক শহরে পরিণত হয়"
            items={[
              'শহর বিনিয়োগ তহবিল গঠন',
              'সবুজ রপ্তানি করিডর স্থাপন',
              'দেশীয় ও আন্তর্জাতিক সহযোগিতা',
              'আঞ্চলিক উন্নয়ন কেন্দ্র হিসেবে স্বীকৃতি',
            ]}
            color="from-green-500"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-linear-to-r from-lime-400 to-cyan-400 py-20 rounded-2xl my-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            এই ভিশন বাস্তব করার পরিকল্পনা
          </h2>
          <p className="text-lg text-slate-900/80 mb-8">
            পাঁচটি স্তম্ভ একসাথে তিন ধাপে বাস্তবায়িত হবে
          </p>
          <Link to="/roadmap">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-base h-14 px-8">
              বিস্তারিত রোডম্যাপ দেখুন →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-lime-400/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">পাঁচটি স্তম্ভ</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>স্মার্ট গভর্নেন্স</li>
                <li>সবুজ অর্থনীতি</li>
                <li>জ্ঞান শহর</li>
                <li>স্মার্ট গতিশীলতা</li>
                <li>স্বাস্থ্য ও ন্যায্যতা</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">অন্যান্য পৃষ্ঠা</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/home" className="hover:text-lime-400">হোম</Link></li>
                <li><Link to="/current-status" className="hover:text-lime-400">বর্তমান অবস্থা</Link></li>
                <li><Link to="/roadmap" className="hover:text-lime-400">রোডম্যাপ</Link></li>
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
            <p>রাজশাহী ২.० - স্মার্ট, সবুজ এবং ন্যায়পরায়ণ শহর</p>
            <p className="text-sm mt-2">© ২०२६ রাজশাহী মেয়রের নির্বাচনী প্রচার</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PillarCard({ icon, title, subtitle, color, features, benefits }: any) {
  return (
    <div className="bg-slate-800/50 border border-lime-400/20 rounded-2xl p-10 hover:border-lime-400/50 transition-all">
      <div className="flex items-start gap-6">
        <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br ${color} text-white flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-lime-400 font-medium mb-6">{subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">কী করব</h4>
              <ul className="space-y-3">
                {features.map((feature: string, i: number) => (
                  <li key={i} className="text-gray-300 text-sm flex gap-3">
                    <span className="text-lime-400 flex-shrink-0">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">ফলাফল</h4>
              <ul className="space-y-3">
                {benefits.map((benefit: any, i: number) => (
                  <li key={i} className="flex gap-3 items-center">
                    <span className="text-3xl">{benefit.emoji}</span>
                    <span className="text-gray-300 text-sm">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ metric, current, target, timeline, what }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-8">
      <h3 className="text-white font-bold mb-4">{metric}</h3>
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-xs text-gray-400 mb-1">এখন</p>
          <p className="text-2xl font-black text-orange-400">{current}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-linear-to-r from-orange-400 to-lime-400 rounded-full"></div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">লক্ষ্য</p>
          <p className="text-2xl font-black text-lime-400">{target}</p>
        </div>
      </div>
      <div className="flex gap-4 text-xs">
        <div>
          <p className="text-gray-400">সময়</p>
          <p className="text-white font-bold">{timeline}</p>
        </div>
        <div>
          <p className="text-gray-400">মাপা হয়</p>
          <p className="text-white font-bold">{what}</p>
        </div>
      </div>
    </Card>
  )
}

function TimelinePhase({ phase, title, description, items, color }: any) {
  return (
    <div className={`bg-linear-to-r ${color}/10 border border-${color.split('-')[1]}-500/30 rounded-xl p-8`}>
      <div className="flex items-start gap-6">
        <div className={`flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-br ${color} text-white font-bold flex-shrink-0`}>
          {phase.split(' ')[1]}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <ul className="grid md:grid-cols-2 gap-3">
            {items.map((item: string, i: number) => (
              <li key={i} className="text-sm text-gray-300 flex gap-2">
                <span className="text-lime-400">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
