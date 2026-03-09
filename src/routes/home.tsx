import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  BookOpen,
  Building2,
  Factory,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Landmark,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Shield,
  Smartphone,
  Target,
  TreeDeciduous,
  Users,
  Zap,
} from 'lucide-react'
import {
  FeatureCards,
  Footer,
  NewsletterSignup,
  StatsCounter,
  Timeline,
} from '@/components/parts'
import type {
  ContactInfoItem,
  FeatureItem,
  FooterLinkSection,
  SocialLink,
  StatItem,
  TimelineEvent,
} from '@/components/parts/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

export const Route = createFileRoute('/home')({
  component: HomePage,
})

const RAJSHahi_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCFhg9_mXeBvkWDZ0r0v-KNUGpBhRLl68yFr0v6cU5H_6cRzSydHon5eLTTg_aY55yC-vdZUGOOFn45NlB6HdQeK770JJP8CGUUsdPnRrzhlatDfPDcsPSDD2ddH_nINU84L5QNIRaDgTB01ggPmdSkU4CofaYx5NSWYKuzzb2zE9NKy0AhlIUOH55YrRbV2T6EieNBoSFzqc7VrbUKTtFTimRtF3WbdhihjrLNidG2tam-x5MIRPu4l_nofDcE3WNCmKwi_UyJYYI'

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const footerLinks: FooterLinkSection[] = [
    {
      title: 'দ্রুত লিংক',
      links: [
        { label: 'ভিশন', href: '/vision' },
        { label: 'বর্তমান অবস্থা', href: '/current-status' },
        { label: 'কেন রূপান্তর', href: '/why-transform' },
        { label: 'রোডম্যাপ', href: '/roadmap' },
        { label: 'শাসন কাঠামো', href: '/governance' },
        { label: 'যোগাযোগ', href: '/contact' },
      ],
    },
  ]

  const contactInfo: ContactInfoItem[] = [
    { icon: Mail, label: 'ইমেইল', value: 'info@rajshahi2.0.com', href: 'mailto:info@rajshahi2.0.com' },
    { icon: Phone, label: 'ফোন', value: '+৮৮০ ১২৩৪ ৫৬৭৮৯০' },
  ]

  const socialLinks: SocialLink[] = [
    { icon: Globe, label: 'Website', href: '#' },
    { icon: Globe, label: 'Email', href: 'mailto:info@rajshahi2.0.com' },
  ]

  const visionFeatures: FeatureItem[] = [
    {
      icon: Landmark,
      title: 'স্মার্ট শাসন (Smart Governance)',
      description:
        'সব নাগরিক সেবা এক প্ল্যাটফর্মে (One Rajshahi Portal), Cashless + Paperless সিস্টেম, Real-Time Complaint Tracking, AI-ভিত্তিক Budget & Performance Monitoring',
    },
    {
      icon: Leaf,
      title: 'সবুজ অর্থনীতি (Green Economy)',
      description:
        'Mango, Silk, Vegetable Processing Zone, Agro Cold Chain + Solar-Powered Storage, Waste-to-Bioenergy Plant, Renewable Component Manufacturing',
    },
    {
      icon: Lightbulb,
      title: 'জ্ঞান ও উদ্ভাবনী শহর (Knowledge & Innovation City)',
      description:
        'University-Industry Collaboration Hub, Startup Accelerator + Micro Grant + Maker Lab, Digital Skill Program for All',
    },
    {
      icon: Zap,
      title: 'স্মার্ট গতিশীলতা ও নগর অবকাঠামো',
      description:
        'Low Emission Public Transport, Integrated Bicycle Network + Walkable Street, Smart Drainage + Flood Resilience, Streetlight Sensor Network',
    },
    {
      icon: Heart,
      title: 'স্বাস্থ্য, খাদ্য নিরাপত্তা ও পরিবেশগত ন্যায়বিচার',
      description:
        'Community Clinic with Digital Health Record, Real-Time Food Safety Certification (QR-based Traceability), Industrial Waste Regulation, Green Public Space Expansion',
    },
  ]

  const roadmapEvents: TimelineEvent[] = [
    {
      year: '১২-১৮ মাস',
      title: 'আশু সংস্কার (Immediate Reform)',
      description:
        'One Rajshahi Digital Portal, Complaint Tracking + Public Dashboard, Ward Development Audit, Online Permit/Trade License Automation, Green Business Registration Incentive। মূল লক্ষ্য: Trust Building',
    },
    {
      year: '২-৫ বছর',
      title: 'কৌশলগত অবকাঠামো নির্মাণ',
      description:
        'Mango & Silk Processing Cluster, Cold Chain & Solar Storage, E-Transport & Smart Rickshaw, Waste-to-Bioenergy Plant, Innovation & Startup Hub। লক্ষ্য: রাজশাহীর অর্থনৈতিক পেশি তৈরি',
    },
    {
      year: '৫+ বছর',
      title: 'টেকসই বৃদ্ধি ইকোসিস্টেম',
      description:
        'City Investment Fund, Green Export Corridor, Education → Skill → Job → Entrepreneurship Pipeline। লক্ষ্য: Dependent City থেকে Self-Sustaining City',
    },
  ]

  const kpiStats: StatItem[] = [
    {
      icon: Smartphone,
      value: 80,
      suffix: '%',
      label: 'ডিজিটাল সেবা',
      description: 'Online Service Usage Rate — ৫ বছরে লক্ষ্য',
    },
    {
      icon: Factory,
      value: 2,
      suffix: 'x',
      label: 'কৃষি প্রক্রিয়াজাতকরণ',
      description: 'Agro Processing Output দ্বিগুণ — ৫ বছরে',
    },
    {
      icon: Users,
      value: 50,
      suffix: '%+',
      label: 'তরুণ ধারণ',
      description: 'Youth Retention Rate বৃদ্ধি — ৫ বছরে',
    },
    {
      icon: Leaf,
      value: 30,
      suffix: '%',
      label: 'বায়ু মান উন্নয়ন',
      description: 'AQI Improvement Index — ৫ বছরে',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir="ltr">
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Campaign Header */}
      <header
        className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
        style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/home" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Building2 className="size-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">রাজশাহী ২.০</span>
          </Link>
          <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
            <Link
              to="/vision"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              ভিশন
            </Link>
            <Link
              to="/current-status"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              বর্তমান অবস্থা
            </Link>
            <Link
              to="/why-transform"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              কেন রূপান্তর
            </Link>
            <Link
              to="/roadmap"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              রোডম্যাপ
            </Link>
            <Link
              to="/governance"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              শাসন
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              যোগাযোগ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/contact">স্বেচ্ছাসেবক হোন</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              <Link to="/vision" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                ভিশন
              </Link>
              <Link to="/current-status" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                বর্তমান অবস্থা
              </Link>
              <Link to="/why-transform" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                কেন রূপান্তর
              </Link>
              <Link to="/roadmap" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                রোডম্যাপ
              </Link>
              <Link to="/governance" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                শাসন
              </Link>
              <Link to="/contact" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                যোগাযোগ
              </Link>
              <Button asChild className="mt-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  স্বেচ্ছাসেবক হোন
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>
        {/* Section A: Hero / Introduction */}
        <section
          id="intro"
          className="relative flex min-h-[80vh] items-center justify-center overflow-hidden border-b border-border"
        >
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${RAJSHahi_IMAGE})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
            <Badge className="mb-6" variant="secondary">
              নির্বাচনী ইশতেহার ২০২৪
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              রাজশাহী ২.০: Smart, Green and Just City
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground md:text-xl">
              রাজশাহী আমাদের কাছে শুধু একটি শহর ছিল না; এটি ছিল পরিচ্ছন্নতা, মর্যাদা, শিক্ষা ও সংস্কৃতির
              প্রতীক। আমাদের প্রজন্ম বেড়ে উঠেছে পদ্মার পাড়ে হাঁটতে হাঁটতে। এখন সময় এসেছে নিজেকে
              নতুনভাবে চিনে নেয়ার — রাজশাহী আর শুধু পরিচ্ছন্ন শহর হওয়াই যথেষ্ট নয়; এখন তাকে হতে হবে
              একটি Smart, Green and Just City।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/vision">
                  ভিশন দেখুন
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/why-transform">
                  <BookOpen className="mr-2 size-4" />
                  ইশতেহার পড়ুন
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section B: Current Reality */}
        <section id="reality" className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 border-l-4 border-primary pl-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                রাজশাহীর বর্তমান বাস্তবতা — ডেটা ও বিশ্লেষণভিত্তিক মূল্যায়ন
              </h2>
              <p className="mt-2 text-muted-foreground">
                উন্নয়নের গ্রাফ উর্ধ্বমুখী হলেও আমাদের সামনে রয়েছে বেশ কিছু কাঠামোগত চ্যালেঞ্জ।
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Users className="size-8 text-primary" />
                  <Badge variant="secondary">B.1</Badge>
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                  জনসংখ্যা ও নগর কাঠামো
                </h3>
                <p className="text-muted-foreground">
                  রাজশাহী সিটি কর্পোরেশন এলাকার জনসংখ্যা আনুমানিক ৮-৯ লাখ, আশেপাশের উপশহর মিলিয়ে ১৫
                  লাখেরও বেশি। শহরের অভ্যন্তরে অনানুষ্ঠানিক বসতিও বাড়ছে। রাজশাহী এখন আর ছোট শহর নয় —
                  কিন্তু এখনও ছোট শহরের মানসিকতা বজায় রেখেছে।
                </p>
              </Card>

              <Card className="overflow-hidden p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Factory className="size-8 text-primary" />
                  <Badge variant="secondary">B.2</Badge>
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                  অর্থনীতি ও কর্মসংস্থান
                </h3>
                <p className="text-muted-foreground">
                  অর্থনীতি মূলত কৃষি (আম, ধান, আলু), প্রাণিজ ও সরকারি চাকরি/শিক্ষা নির্ভর। Manufacturing
                  বা Service Sector এখনো বাস্তবিকভাবে বিকশিত হয়নি। সিল্ক শিল্প প্রায় বিলুপ্তির পথে।
                </p>
              </Card>

              <Card className="overflow-hidden p-6">
                <div className="mb-4 flex items-center justify-between">
                  <GraduationCap className="size-8 text-primary" />
                  <Badge variant="destructive">B.3</Badge>
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                  দক্ষতা ও Brain Drain
                </h3>
                <p className="text-muted-foreground">
                  রাজশাহী বিশ্ববিদ্যালয়, RUET, RMC — হাজার হাজার গ্রাজুয়েট তৈরি করলেও ৭০% এর বেশি
                  ঢাকায় বা বিদেশে চলে যায়। শহর তার নিজের মেধা ধরে রাখতে পারছে না।
                </p>
              </Card>

              <Card className="overflow-hidden p-6 sm:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <Shield className="size-8 text-primary" />
                  <Badge variant="secondary">B.4–B.6</Badge>
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                  অবকাঠামো, পরিবেশ ও প্রশাসনিক সীমাবদ্ধতা
                </h3>
                <p className="text-muted-foreground">
                  পানিবিদ্যুৎ ও সড়কে মোটামুটি স্থিতি থাকলেও ড্রেনেজ, বর্জ্য ও Digital Service Delivery
                  পুরনো কাঠামোয় আটকে। AQI খারাপ হচ্ছে। Transparency বা Accountability এর
                  পরিমাপযোগ্য ফ্রেমওয়ার্ক নেই। Citizen as Stakeholder ধারণা এখনো কার্যকর হয়নি।
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section C: Why Transform Now */}
        <section id="why-now" className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <Card className="relative overflow-hidden border-border bg-card">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="relative z-10 p-8 text-center md:p-12 lg:p-16">
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                  কেন এখনই রূপান্তরের সময় — সমস্যা থেকে সমাধানের পথে
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                  রাজশাহী দীর্ঘদিন ধরে শান্ত, পরিচ্ছন্ন ও স্থিতিশীল। কিন্তু স্থিতিশীলতা যদি অগ্রগতির
                  পথে বাধা হয়ে দাঁড়ায়, তবে সেটাই হয়ে যায় উন্নয়ন-প্রতিরোধী মানসিকতা। আমাদের ধীরে ধীরে
                  উন্নয়ন নয় — এক ধাপ লাফিয়ে এগোনোর সময় এখনই। Leapfrog Development Model অনুসরণ করে।
                  'আরও একটু ভালো হলেই চলবে' মানসিকতা পরিবর্তন জরুরি। Brain Drain বাড়বে, কৃষি আয় কমতে
                  থাকবে, AQI খারাপ হলে Health Burden বাড়বে — যদি এখন পরিবর্তন না করি। গাজীপুর, সিলেট,
                  খুলনা এগোচ্ছে। রাজশাহী ২.০ কেবল সিটি কর্পোরেশনের পরিকল্পনা নয়; এটি একটি সমষ্টিগত
                  Social Contract।
                </p>
                <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/why-transform">
                      বিস্তারিত জানুন
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/vision">
                      <BookOpen className="mr-2 size-4" />
                      ভিশন দেখুন
                    </Link>
                  </Button>
                </div>
                <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  যে শহর নিজের সমস্যাকে পরিমিতভাবে চিহ্নিত করতে পারে, সেই শহরই সঠিক সমাধান বেছে
                  নিতে পারে
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Section D: Vision Framework */}
        <section id="vision" className="border-b border-border py-16 md:py-24">
          <FeatureCards
            title="রাজশাহী ২.০ — রূপান্তরের মূল দর্শন"
            description="রাজশাহীকে আমরা তিনটি শব্দে নতুনভাবে সংজ্ঞায়িত করতে চাই — Smart, Green and Just City। এটি কেবল স্লোগান নয়; এটি একটি বাস্তব নীতিমালা কাঠামো।"
            features={visionFeatures}
          />
        </section>

        {/* Section E: Roadmap */}
        <section id="roadmap" className="border-b border-border bg-muted/20 py-16 md:py-24">
          <Timeline
            badge="রাজশাহী ২.০ রোডম্যাপ"
            title="রূপান্তর কীভাবে বাস্তবায়িত হবে"
            description="তিন ধাপে বাস্তবায়নযোগ্য — Immediate Reform, Strategic Infrastructure Build-up, Sustainable Growth Ecosystem।"
            events={roadmapEvents}
            futureText="রাজশাহী 'Dependent City' থেকে 'Self-Sustaining City' তে পরিণত হবে"
          />
        </section>

        {/* Section F: Governance */}
        <section id="governance" className="border-b border-border py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <Badge className="mb-4" variant="secondary">
                প্রশাসনিক কাঠামো
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                প্রশাসনিক কাঠামো ও অংশীদারিত্ব মডেল
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Governance Model → Mayor + City CEO + Citizen Board
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <Landmark className="mb-4 size-10 text-primary" />
                <h3 className="font-bold">মেয়র</h3>
                <p className="text-sm text-muted-foreground">Vision Leader</p>
              </Card>
              <Card className="p-6">
                <Target className="mb-4 size-10 text-primary" />
                <h3 className="font-bold">সিটি সিইও</h3>
                <p className="text-sm text-muted-foreground">Execution Manager</p>
              </Card>
              <Card className="p-6">
                <Users className="mb-4 size-10 text-primary" />
                <h3 className="font-bold">সিটিজেন অ্যাডভাইজরি বোর্ড</h3>
                <p className="text-sm text-muted-foreground">Accountability Partner</p>
              </Card>
            </div>
            <div className="mt-12">
              <h3 className="mb-4 font-bold">Stakeholder Mapping</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3 rounded-lg border border-border p-4">
                  <Building2 className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">সিটি কর্পোরেশন</p>
                    <p className="text-sm text-muted-foreground">নীতি নির্ধারণ ও বাস্তবায়ন সমন্বয়</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border border-border p-4">
                  <Factory className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">বাণিজ্য সমিতি</p>
                    <p className="text-sm text-muted-foreground">Green Investment সহায়তা</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border border-border p-4">
                  <TreeDeciduous className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">কৃষক সংগঠন</p>
                    <p className="text-sm text-muted-foreground">Agro Reform অংশীদার</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border border-border p-4">
                  <GraduationCap className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">বিশ্ববিদ্যালয়</p>
                    <p className="text-sm text-muted-foreground">Talent ও Research ভিত্তি</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg border border-border p-4 sm:col-span-2">
                  <Zap className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">তরুণ সমাজ</p>
                    <p className="text-sm text-muted-foreground">Innovation ও Volunteering Network</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link to="/governance">
                  বিস্তারিত শাসন কাঠামো
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section G: KPI Framework */}
        <section id="kpi">
          <StatsCounter
            badge="পরিমাপযোগ্য ফলাফল"
            title="প্রতি বছর নাগরিক দেখতে পাবে"
            titleHighlight="— আমরা এগোচ্ছি কিনা"
            description="৫ বছরের লক্ষ্যমাত্রা নির্দিষ্ট KPI এর মাধ্যমে ট্র্যাক করা হবে।"
            stats={kpiStats}
          />
        </section>

        {/* Section H & I: Monitoring + Financial Transparency */}
        <section id="transparency" className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <Badge className="mb-4" variant="secondary">
                স্বচ্ছতাই শক্তি
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                বাস্তবায়ন কি সত্যিই হবে? — Monitoring ও Accountability
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                কেবল পরিকল্পনা ঘোষণা নয় — অর্জন পরিমাপযোগ্য হতে হবে
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-4 flex items-center gap-2 font-bold">
                  <Target className="size-5 text-primary" />
                  Public Performance Dashboard
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• প্রতিটি প্রকল্পের Progress Indicator: % Completion, Budget Used</li>
                  <li>• ওয়েবসাইট/অ্যাপে নাগরিক দেখতে পারবে কাজ এগোচ্ছে কিনা</li>
                  <li>• প্রতিটি ওয়ার্ডের বার্ষিক স্কোরকার্ড</li>
                  <li>• Citizen Audit Committee (প্রতি ওয়ার্ডে)</li>
                  <li>• Public Hearing & Ward Dialogue (ত্রৈমাসিক)</li>
                  <li>• Digital Complaint Resolution SLA</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="mb-4 flex items-center gap-2 font-bold">
                  <Scale className="size-5 text-primary" />
                  আর্থিক স্বচ্ছতা ও দীর্ঘমেয়াদি স্থায়িত্ব
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  সিটি কর্পোরেশনের সম্পূর্ণ বাজেট বিভাগভিত্তিক Public Ledger আকারে থাকবে। নাগরিক জানতে
                  পারবে কোন ওয়ার্ডে কত খরচ হলো।
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Local Tax + Digital Payment Expansion</li>
                  <li>• PPP Model — Green Industry, Waste-Energy, Transport</li>
                  <li>• International Development Grant</li>
                  <li>• CSR Fund + Philanthropy</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section J: Citizen Role */}
        <section id="citizen-role" className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <Card className="relative overflow-hidden border-border bg-card">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="relative z-10 p-8 text-center md:p-12 lg:p-16">
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                  নাগরিক হিসেবে আমাদের ভূমিকা — We the Rajshahi
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                  একটি শহরকে রূপান্তরিত করতে প্রশাসন প্রয়োজন, কিন্তু মালিক হয় মানুষ। রাজশাহী ২.০
                  বাস্তবায়নের চাবিকাঠি — ownership shift। নাগরিক কেবল ভোটার নয় — co-creator। তরুণ কেবল
                  সমালোচক নয় — solution architect। ব্যবসায়ী কেবল ট্যাক্স প্রদানকারী নয় — development
                  investor। কৃষক কেবল উৎপাদক নয় — value chain stakeholder।
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      <Heart className="mr-2 size-4" />
                      যুক্ত হোন
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">
                      <FileText className="mr-2 size-4" />
                      যোগাযোগ
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section K: Closing + Newsletter */}
        <section id="closing" className="border-b border-border py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <blockquote className="mb-8">
              <p className="text-2xl font-bold leading-relaxed md:text-3xl">
                "আমরা শুধু পরিষ্কার শহর ছিলাম না — আমরা ছিলাম অগ্রসর, ন্যায়পরায়ণ ও উদ্ভাবনী একটি শহর।
                এবং আমরা তা অন্য কেউ করে দেয়নি — আমরা নিজেরাই করেছি।"
              </p>
            </blockquote>
            <p className="mb-8 text-lg text-muted-foreground">
              রাজশাহী থেমে থাকার শহর নয়। আজ যদি আমরা চাই, রাজশাহী আগামী ৫ থেকে ১০ বছরের মধ্যেই
              Bangladesh-এর Smartest City হতে পারে। শুধু প্রশাসনিক উন্নয়ন নয় — মনের উন্নয়ন, সিদ্ধান্তের
              উন্নয়ন, দক্ষ ব্যবস্থাপনার রূপান্তর — এটাই রাজশাহী ২.০ এর লক্ষ্য।
            </p>
          </div>
          <NewsletterSignup
            badge="যুক্ত হোন"
            title="আসুন, আপনিও হোন এই পরিবর্তনের সহ-স্থপতি"
            description="আপনার মতামত ও অংশগ্রহণই আমাদের শক্তি। ইমেইল দিন — আপডেট পাবেন।"
            placeholder="আপনার ইমেইল লিখুন"
            submitText="যুক্ত হোন"
          />
        </section>

        {/* Footer */}
        <Footer
          linkSections={footerLinks}
          socialLinks={socialLinks}
          brandName="রাজশাহী ২.০"
          brandTagline="Smart, Green and Just City"
          description="একটি স্বচ্ছ, জবাবদিহিমূলক এবং প্রযুক্তিনির্ভর আগামীর রাজশাহী গড়ার প্রত্যয় নিয়ে।"
          contactInfo={contactInfo}
          newsletterPlaceholder="আপনার ইমেইল লিখুন"
          copyright="© ২০২৪ রাজশাহী ২.০ নির্বাচনী প্রচারণা। সর্বস্বত্ব সংরক্ষিত।"
        />
      </main>
    </div>
  )
}
