import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart3, Users, Eye, Target, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/governance')({
  component: GovernancePage,
})

function GovernancePage() {
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
              <h1 className="text-white text-2xl font-black tracking-tight">রাজশাহী २.०</h1>
            </Link>
            <div className="text-gray-300 font-medium">গভর্নেন্স ও জবাবদিহিতা</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
        <div className="space-y-8">
          <Badge className="w-fit bg-purple-500/10 border border-purple-500/30 text-purple-400">
            স্বচ্ছতা ও জবাবদিহিতা
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
            জবাবদিহি শাসন
            <br />
            <span className="text-lime-400">কে</span> সিদ্ধান্ত নেয়,
            <br />
            <span className="text-purple-400">কীভাবে</span> নিরীক্ষণ হয়
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            যেকোনো প্রতিশ্রুতি ততক্ষণ বিশ্বাসযোগ্য যতক্ষণ না তা পরীক্ষা করা যায়। আমরা সম্পূর্ণ স্বচ্ছতা এবং পরিমাপযোগ্য ফলাফল প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-lime-400/10">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">নতুন গভর্নেন্স কাঠামো</h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          তিনটি স্তর: Vision নেতৃত্ব — Execution ম্যানেজমেন্ট — Accountability অংশীদারিত্ব
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GovernanceRole
            title="Mayor"
            subtitle="Vision Leader"
            icon="👨‍⚖️"
            responsibilities={[
              'শহরের জন্য দীর্ঘমেয়াদী ভিশন নির্ধারণ',
              'নাগরিক ও স্টেকহোল্ডারদের সাথে যোগাযোগ',
              'উচ্চ-স্তরের নীতি ও কৌশল অনুমোদন',
              'জনসম্পর্ক ও দাতৃত্ব ব্যবস্থাপনা',
            ]}
            color="from-blue-500"
          />
          <GovernanceRole
            title="City CEO"
            subtitle="Execution Manager"
            icon="👨‍💼"
            responsibilities={[
              'দৈনন্দিন শাসন পরিচালনা ও সিদ্ধান্ত বাস্তবায়ন',
              'বিভাগীয় বাজেট অনুমোদন ও পর্যবেক্ষণ',
              'কর্মক্ষমতা লক্ষ্য নির্ধারণ ও ট্র্যাকিং',
              'নাগরিক সেবা মান নিশ্চিত করা',
            ]}
            color="from-cyan-500"
          />
          <GovernanceRole
            title="Citizen Advisory Board"
            subtitle="Accountability Partner"
            icon="👥"
            responsibilities={[
              'প্রকল্প অগ্রগতি পর্যালোচনা ও প্রশ্ন করা',
              'নাগরিক অভিযোগ ও পরামর্শ শুনা',
              'স্বচ্ছতা নিশ্চিতকরণ ও প্রতিবেদন জমা দেওয়া',
              'সিদ্ধান্তে স্বাধীন মতামত প্রদান',
            ]}
            color="from-lime-500"
          />
        </div>

        <Card className="bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 p-8">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-400" />
            এই কাঠামো কীভাবে কাজ করে
          </h3>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white">Mayor</strong> দেখে শহর কোথায় যাওয়া উচিত।
              <br/>
              <strong className="text-white">City CEO</strong> নিশ্চিত করে সেখানে পৌঁছাচ্ছি।
              <br/>
              <strong className="text-white">Citizen Board</strong> প্রশ্ন করে, "সত্যি পৌঁছাচ্ছি?"
            </p>
          </div>
        </Card>
      </section>

      {/* Stakeholder Mapping */}
      <section className="bg-slate-800/50 border-y border-lime-400/20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">স্টেকহোল্ডার ম্যাপিং</h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            পরিবর্তন শুধু সিটি কর্পোরেশনের কাজ নয় — সবাই অংশীদার এবং অবদানকারী
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <StakeholderCard
              stakeholder="সিটি কর্পোরেশন"
              role="নীতি নির্ধারণ ও বাস্তবায়ন সমন্বয়"
              tasks={[
                'ডিজিটাল সিস্টেম উন্নয়ন',
                'বাজেট বরাদ্দ তদারকি',
                'প্রকল্প নির্ভরযোগ্য বাস্তবায়ন',
                'নিয়মিত রিপোর্টিং ও স্বচ্ছতা',
              ]}
              icon="🏛️"
            />
            <StakeholderCard
              stakeholder="ব্যবসায়ী সমিতি"
              role="সবুজ বিনিয়োগ ও অংশীদারিত্ব সহায়তা"
              tasks={[
                'সবুজ ব্যবসা উদ্যোগে বিনিয়োগ',
                'কর্মক্ষমতা পরামর্শ প্রদান',
                'PPP প্রকল্পে অংশগ্রহণ',
                'স্থানীয় চাকরি সৃষ্টি অগ্রাধিকার',
              ]}
              icon="💼"
            />
            <StakeholderCard
              stakeholder="কৃষক সংগঠন"
              role="কৃষি সংস্কার ও প্রক্রিয়াকরণ অংশীদার"
              tasks={[
                'কোল্ড চেইন প্রকল্পে সহায়তা',
                'গুণমান নিয়ন্ত্রণ তদারকি',
                'স্থানীয় বাজার সংযোগ',
                'কৃষক প্রশিক্ষণ প্রোগ্রাম',
              ]}
              icon="🌾"
            />
            <StakeholderCard
              stakeholder="বিশ্ববিদ্যালয় ও গবেষণা প্রতিষ্ঠান"
              role="প্রতিভা ও গবেষণা ভিত্তি"
              tasks={[
                'স্টার্টআপ হাব পরিচালনা',
                'দক্ষতা উন্নয়ন প্রোগ্রাম',
                'গবেষণা ও উদ্ভাবন সমর্থন',
                'শিল্প সহযোগিতা সুবিধা',
              ]}
              icon="🎓"
            />
            <StakeholderCard
              stakeholder="তরুণ ও দাবিদার"
              role="উদ্ভাবন ও স্বেচ্ছাসেবী নেটওয়ার্ক"
              tasks={[
                'স্বেচ্ছাসেবী প্রকল্পে অংশগ্রহণ',
                'ডিজিটাল দক্ষতা অর্জন',
                'স্টার্টআপ উদ্যোগে যোগ দেওয়া',
                'মেধা ধরে রাখার প্রচেষ্টা',
              ]}
              icon="💡"
            />
            <StakeholderCard
              stakeholder="নাগরিক সমাজ সংস্থা"
              role="নিরীক্ষণ ও নাগরিক অধিকার সুরক্ষা"
              tasks={[
                'পরিবেশ প্রভাব মূল্যায়ন',
                'সামাজিক ন্যায্যতা নিশ্চিত করা',
                'স্বচ্ছতা ও জবাবদিহিতা অডিট',
                'জনগণের কণ্ঠস্বর প্রতিনিধিত্ব',
              ]}
              icon="🤝"
            />
          </div>
        </div>
      </section>

      {/* Performance Dashboard */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12">পাবলিক পারফরম্যান্স ড্যাশবোর্ড</h2>
        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
          প্রতিটি নাগরিক জানতে পারবে — রাজশাহী এখন কোথায়, কত দ্রুত এগোচ্ছে, কী অর্জিত হয়েছে।
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <DashboardMetric
            category="ডিজিটাল সেবা"
            metric="অনলাইন ব্যবহার হার"
            current="0%"
            target="80%"
            deadline="2028"
            status="upcoming"
          />
          <DashboardMetric
            category="অর্থনীতি"
            metric="কৃষি প্রক্রিয়াকরণ"
            current="১ লক্ষ টন"
            target="२ লক্ষ টন"
            deadline="२०३०"
            status="upcoming"
          />
          <DashboardMetric
            category="কর্মসংস্থান"
            metric="তরুণ ধারণ হার"
            current="30%"
            target="80%"
            deadline="२०३०"
            status="ongoing"
          />
          <DashboardMetric
            category="পরিবেশ"
            metric="বায়ু মান (AQI)"
            current="খারাপ"
            target="ভালো"
            deadline="२०२७"
            status="ongoing"
          />
        </div>

        <Card className="bg-linear-to-br from-lime-500/10 to-cyan-500/10 border border-lime-400/30 p-8">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-lime-400" />
            ড্যাশবোর্ডে দেখা যাবে
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-lime-400">✓</span>
              <span>প্রতিটি প্রকল্পের অগ্রগতি: % সম্পন্ন, বাজেট ব্যবহার, দায়িত্বশীল অফিসার</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lime-400">✓</span>
              <span>প্রতিটি ওয়ার্ডের বার্ষিক স্কোরকার্ড: বর্জ্য ব্যবস্থাপনা, সড়ক রক্ষণাবেক্ষণ, অভিযোগ সমাধান সময়</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lime-400">✓</span>
              <span>নাগরিক অভিযোগের স্ট্যাটাস: খোলা, চলমান, সমাধান হয়েছে</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lime-400">✓</span>
              <span>বাজেট ব্যয়: কোন বিভাগ কত খরচ করেছে, কোন প্রকল্পে</span>
            </li>
          </ul>
        </Card>
      </section>

      {/* Social Accountability */}
      <section className="bg-slate-800/50 border-y border-lime-400/20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">সামাজিক জবাবদিহিতা ব্যবস্থা</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <AccountabilityMechanism
              title="Citizen Audit Committee"
              subtitle="প্রতি ওয়ার্ডে"
              description="নাগরিক নিজেই দেখবে কোন কাজ সময়মতো, কোন কাজ বন্ধ পড়ে আছে"
              activities={[
                'মাসিক সাইট ভিজিট',
                'মেয়ে অফিসারদের সাথে মিটিং',
                'প্রগতি রিপোর্ট জনসাধারণের কাছে উপস্থাপনা',
              ]}
              icon="👁️"
            />
            <AccountabilityMechanism
              title="Public Hearing & Ward Dialogue"
              subtitle="ত্রৈমাসিক ভিত্তিতে"
              description="সিটি কর্পোরেশনকে নাগরিক প্রশ্ন করতে পারে — কেন এটা হয়নি?"
              activities={[
                'জনসভা আয়োজন',
                'সরাসরি প্রশ্নোত্তর সেশন',
                'নাগরিক পরামর্শ গ্রহণ',
              ]}
              icon="🎙️"
            />
            <AccountabilityMechanism
              title="Digital Complaint SLA"
              subtitle="সেবা মানের নিশ্চয়তা"
              description="প্রতিটি অভিযোগের নির্দিষ্ট সমাধান-সময় — না হলে স্বয়ংক্রিয় escalation"
              activities={[
                'অভিযোগ স্বয়ংক্রিয়ভাবে বিভাগে বন্টন',
                'সময় মেনে না চলে জরিমানা',
                'জনসাধারণকে রিয়েল-টাইম আপডেট',
              ]}
              icon="⏱️"
            />
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">আর্থিক স্বচ্ছতা</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">বাজেট সম্পূর্ণ স্বচ্ছ হবে</h3>
            <p className="text-gray-300 leading-relaxed">
              সিটি কর্পোরেশনের সম্পূর্ণ বাজেট বিভাগভিত্তিক Public Ledger আকারে থাকবে। কোনো লুকানো খরচ নেই।
            </p>
            <Card className="bg-slate-800/50 border-lime-400/20 p-6">
              <h4 className="text-white font-bold mb-4">নাগরিক জানতে পারবে</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="text-lime-400">📊</span>
                  <span>কোন ওয়ার্ডে কত খরচ হলো</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400">👷</span>
                  <span>কোন ঠিকাদার কাজ পেল</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400">⏰</span>
                  <span>কত দিনে কাজ শেষ হলো</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400">💰</span>
                  <span>কমা বাজেটে কাজ শেষ হলো বা অতিরিক্ত খরচ হলো</span>
                </li>
              </ul>
            </Card>
          </div>
          <Card className="bg-linear-to-br from-purple-500/10 to-slate-800/50 border border-purple-500/30 p-8">
            <h3 className="text-white font-bold mb-6">বৈচিত্র্যময় অর্থায়ন</h3>
            <div className="space-y-4">
              <FundingSource
                source="স্থানীয় ট্যাক্স ও ডিজিটাল পেমেন্ট সম্প্রসারণ"
                benefit="রাজস্ব বাড়ে, দুর্নীতি কমে"
              />
              <FundingSource
                source="ব্যবসায়ী ও CSR অবদান"
                benefit="সবুজ প্রকল্পে অংশীদারিত্ব"
              />
              <FundingSource
                source="সরকারী অনুদান ও উন্নয়ন অংশীদার"
                benefit="বড় অবকাঠামো প্রকল্প সম্ভব হয়"
              />
              <FundingSource
                source="নগর উন্নয়ন তহবিল (প্রতিটি সফল প্রকল্প থেকে লাভ ধরে রাখা)"
                benefit="নিজেই নিজকে অর্থায়ন করতে পারে"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Success KPI */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">সাফল্য পরিমাপের মানদণ্ড (KPI)</h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          প্রতি বছর নাগরিক দেখতে পাবে আমরা সত্যি এগোচ্ছি না শুধু কথা বলছি
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            metric="ডিজিটাল সেবা ব্যবহার"
            kpi="অনলাইন সেবা ব্যবহার হার"
            target="80%"
            timeline="५ বছরে"
          />
          <KPICard
            metric="অর্থনীতি"
            kpi="কৃষি প্রক্রিয়াকরণ আউটপুট"
            target="দ্বিগুণ"
            timeline="५ বছরে"
          />
          <KPICard
            metric="কর্মসংস্থান"
            kpi="যুব ধারণ হার"
            target="+50% বৃদ্ধি"
            timeline="५ বছরে"
          />
          <KPICard
            metric="পরিবেশ"
            kpi="AQI উন্নতি সূচক"
            target="-30% দূষণ"
            timeline="५ বছরে"
          />
        </div>
      </section>

      {/* Implementation Reality Check */}
      <section className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-12 my-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-orange-400" />
            বাস্তবায়ন সত্যিই হবে কি?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            এই প্রতিশ্রুতি শুধুমাত্র সিটি কর্পোরেশনের দায়িত্ব নয়। এটি একটি সামাজিক চুক্তি যেখানে:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-4xl flex-shrink-0">👥</span>
              <div>
                <p className="text-white font-bold mb-2">নাগরিক</p>
                <p className="text-gray-300">নিয়মিত অডিট করবে, অংশগ্রহণ করবে, নিরীক্ষণ করবে</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-4xl flex-shrink-0">📰</span>
              <div>
                <p className="text-white font-bold mb-2">মিডিয়া</p>
                <p className="text-gray-300">স্বচ্ছ তথ্য প্রকাশ করবে এবং জবাবদিহিতা নিশ্চিত করবে</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-4xl flex-shrink-0">⚖️</span>
              <div>
                <p className="text-white font-bold mb-2">আইনি প্রক্রিয়া</p>
                <p className="text-gray-300">যদি প্রতিশ্রুতি পূরণ না হয়, আইনি ব্যবস্থা সম্ভব থাকবে</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">সংক্ষিপ্তসার: স্বচ্ছতার তিন স্তর</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TransparencyLevel
            level="স্তর १"
            title="গভর্নেন্স স্বচ্ছতা"
            items={[
              'কে সিদ্ধান্ত নেয়, কেন নেয়',
              'Mayor, CEO, Board স্পষ্ট ভূমিকা',
              'নিয়মিত জনসভা ও সংলাপ',
            ]}
            icon="🏛️"
          />
          <TransparencyLevel
            level="স্তর २"
            title="পারফরম্যান্স স্বচ্ছতা"
            items={[
              'প্রকল্প অগ্রগতি লাইভ ড্যাশবোর্ডে',
              'KPI ট্র্যাকিং সবার জন্য দৃশ্যমান',
              'ত্রৈমাসিক প্রতিবেদন প্রকাশিত',
            ]}
            icon="📊"
          />
          <TransparencyLevel
            level="স্তর ३"
            title="আর্থিক স্বচ্ছতা"
            items={[
              'সম্পূর্ণ বাজেট প্রকাশিত',
              'ব্যয় ট্র্যাকিং বিস্তারিত',
              'প্রতিটি চুক্তি জনসাধারণের অ্যাক্সেসে',
            ]}
            icon="💰"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-lime-400 to-cyan-400 py-20 rounded-2xl my-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            এখনই শুরু করুন
          </h2>
          <p className="text-lg text-slate-900/80 mb-8">
            আপনার শহর গড়ার এই যাত্রায় স্বেচ্ছাসেবী হোন বা পর্যবেক্ষক হন
          </p>
          <Link to="/home">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-base h-14 px-8">
              হোমপেজে ফিরুন →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-lime-400/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">গভর্নেন্স</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Mayor + CEO + Board</li>
                <li>স্টেকহোল্ডার ম্যাপিং</li>
                <li>জবাবদিহিতা ব্যবস্থা</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">স্বচ্ছতা</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>পাবলিক ড্যাশবোর্ড</li>
                <li>KPI ট্র্যাকিং</li>
                <li>বাজেট প্রকাশ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">অংশগ্রহণ</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/home" className="hover:text-lime-400">হোম</Link></li>
                <li><Link to="/roadmap" className="hover:text-lime-400">রোডম্যাপ</Link></li>
                <li><Link to="/vision" className="hover:text-lime-400">ভিশন</Link></li>
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

function GovernanceRole({ title, subtitle, icon, responsibilities, color }: any) {
  return (
    <Card className={`bg-linear-to-br ${color}/10 border-${color.split('-')[1]}-500/30 p-8`}>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      <p className={`text-${color.split('-')[1]}-400 font-bold text-sm mb-6`}>{subtitle}</p>
      <ul className="space-y-3">
        {responsibilities.map((resp: string, i: number) => (
          <li key={i} className="text-gray-300 text-sm flex gap-3">
            <span className={`text-${color.split('-')[1]}-400 flex-shrink-0`}>→</span>
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function StakeholderCard({ stakeholder, role, tasks, icon }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-8">
      <div className="flex gap-4 mb-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h3 className="text-xl font-bold text-white">{stakeholder}</h3>
          <p className="text-lime-400 text-sm">{role}</p>
        </div>
      </div>
      <div className="pt-4 border-t border-lime-400/10 space-y-2">
        {tasks.map((task: string, i: number) => (
          <div key={i} className="text-gray-300 text-sm flex gap-2">
            <span className="text-lime-400 flex-shrink-0">✓</span> {task}
          </div>
        ))}
      </div>
    </Card>
  )
}

function DashboardMetric({ category, metric, current, target, deadline, status }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-8">
      <Badge className={`mb-4 ${status === 'upcoming' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'}`}>
        {status === 'upcoming' ? 'শীঘ্রই শুরু' : 'চলমান'}
      </Badge>
      <h3 className="text-white font-bold mb-2">{category}</h3>
      <p className="text-gray-400 text-sm mb-6">{metric}</p>
      <div className="space-y-4">
        <div>
          <p className="text-xs text-gray-400 mb-1">এখন</p>
          <p className="text-2xl font-black text-orange-400">{current}</p>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-linear-to-r from-orange-400 to-lime-400" style={{width: '30%'}}></div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">লক্ষ্য</p>
          <p className="text-2xl font-black text-lime-400">{target}</p>
        </div>
        <p className="text-xs text-gray-500 pt-2 border-t border-slate-700">{deadline} পর্যন্ত</p>
      </div>
    </Card>
  )
}

function AccountabilityMechanism({ title, subtitle, description, activities, icon }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-8">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-lime-400 text-sm font-bold mb-4">{subtitle}</p>
      <p className="text-gray-300 text-sm mb-6">{description}</p>
      <ul className="space-y-2">
        {activities.map((activity: string, i: number) => (
          <li key={i} className="text-gray-300 text-sm flex gap-2">
            <span className="text-lime-400 flex-shrink-0">•</span> {activity}
          </li>
        ))}
      </ul>
    </Card>
  )
}

function FundingSource({ source, benefit }: any) {
  return (
    <div className="flex gap-4 pb-4 border-b border-purple-500/20">
      <span className="text-2xl flex-shrink-0">💰</span>
      <div>
        <p className="text-white font-bold text-sm">{source}</p>
        <p className="text-gray-400 text-xs mt-1">{benefit}</p>
      </div>
    </div>
  )
}

function KPICard({ metric, kpi, target, timeline }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-6 text-center">
      <p className="text-gray-400 text-xs mb-2 uppercase">{metric}</p>
      <h3 className="text-white font-bold text-sm mb-6">{kpi}</h3>
      <div className="space-y-2">
        <div className="text-3xl font-black text-lime-400">{target}</div>
        <p className="text-xs text-gray-500">{timeline}</p>
      </div>
    </Card>
  )
}

function TransparencyLevel({ level, title, items, icon }: any) {
  return (
    <Card className="bg-slate-800/50 border-lime-400/20 p-8">
      <div className="flex gap-4 mb-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <p className="text-lime-400 font-bold">{level}</p>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <ul className="space-y-3 mt-6">
        {items.map((item: string, i: number) => (
          <li key={i} className="text-gray-300 text-sm flex gap-2">
            <CheckCircle className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}
