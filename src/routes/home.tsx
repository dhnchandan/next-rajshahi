import { createFileRoute } from '@tanstack/react-router'
import {
    TrendingUp,
    Leaf,
    Shield,
    Lightbulb,
    Users,
    Target,
    BarChart3,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    TreePine,
    Wifi,
    GraduationCap,
    Factory,
    Heart,
    Calendar,
    Send,
    Play,
    Download,
    ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/home')({
    component: HomePage,
})

function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-emerald-50/30 dark:from-primary/10 dark:via-background dark:to-emerald-950/20">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
                <div className="container mx-auto px-4 py-16 md:py-24 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Text */}
                        <div className="space-y-6">
                            <Badge variant="outline" className="gap-2">
                                <Sparkles className="h-3 w-3" />
                                রাজশাহী ২.০ — Smart, Green and Just City
                            </Badge>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                রাজশাহী: আমাদের{' '}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-600">
                                    নতুন সম্ভাবনা
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                রাজশাহী আমাদের কাছে সবসময়ই শুধু একটি শহর ছিল না; এটি ছিল পরিচ্ছন্নতা, মর্যাদা, শিক্ষা ও সংস্কৃতির প্রতীক।
                                এখন সময় এসেছে নিজেকে নতুনভাবে চিনে নেয়ার — একটি Smart, Green and Just City হিসেবে।
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="gap-2">
                                    <Play className="h-4 w-4" />
                                    ভিশন দেখুন
                                </Button>
                                <Button size="lg" variant="outline" className="gap-2">
                                    <Download className="h-4 w-4" />
                                    ম্যানিফেস্টো ডাউনলোড করুন
                                </Button>
                            </div>
                        </div>

                        {/* Hero Stats Card */}
                        <Card className="shadow-2xl border-2">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>লাইভ ট্র্যান্সপারেন্সি ড্যাশবোর্ড</CardTitle>
                                    <Badge variant="secondary" className="gap-1">
                                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                        Live
                                    </Badge>
                                </div>
                                <CardDescription>রিয়েল-টাইম প্রগ্রেস মনিটরিং</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <p className="text-sm text-muted-foreground">সক্রিয় প্রকল্প</p>
                                        <p className="text-3xl font-bold">128</p>
                                        <div className="flex items-center gap-1 text-xs text-green-600">
                                            <TrendingUp className="h-3 w-3" />
                                            +12% বৃদ্ধি
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm text-muted-foreground">বাজেট ব্যবহার</p>
                                        <p className="text-3xl font-bold">85%</p>
                                        <Progress value={85} className="h-2" />
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">গ্রীন কভার লক্ষ্য</span>
                                        <span className="text-sm font-semibold">25%</span>
                                    </div>
                                    <Progress value={65} className="h-2" />
                                    <p className="text-xs text-muted-foreground">32,500 / 50,000 গাছ রোপণ সম্পন্ন</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center space-y-2">
                            <p className="text-4xl md:text-5xl font-bold">12,403</p>
                            <p className="text-sm opacity-90">স্বেচ্ছাসেবক</p>
                        </div>
                        <div className="text-center space-y-2">
                            <p className="text-4xl md:text-5xl font-bold">50,000+</p>
                            <p className="text-sm opacity-90">গাছ রোপণের প্রতিশ্রুতি</p>
                        </div>
                        <div className="text-center space-y-2">
                            <p className="text-4xl md:text-5xl font-bold">84%</p>
                            <p className="text-sm opacity-90">সমস্যা সমাধান হার</p>
                        </div>
                        <div className="text-center space-y-2">
                            <p className="text-4xl md:text-5xl font-bold">০%</p>
                            <p className="text-sm opacity-90">দুর্নীতি সহনশীলতা</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Framework - 5 Pillars */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center space-y-4 mb-12">
                    <Badge variant="outline" className="gap-2">
                        <Target className="h-3 w-3" />
                        রূপান্তরের মূল দর্শন
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold">রাজশাহী ২.০ এর ৫টি স্তম্ভ</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Smart, Green and Just City — এটি কেবল স্লোগান নয়; এটি একটি বাস্তব নীতিমালা কাঠামো
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Pillar 1: Smart Governance */}
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <CardTitle>Smart Governance</CardTitle>
                            <CardDescription>দক্ষতা + Digital Delivery + Accountability</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                                <p className="text-sm">সব নাগরিক সেবা এক প্ল্যাটফর্মে ("One Rajshahi Portal")</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                                <p className="text-sm">সম্পূর্ণ Cashless + Paperless সিস্টেম</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                                <p className="text-sm">Real-Time Complaint Tracking + Public Dashboard</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                                <p className="text-sm">AI-ভিত্তিক Budget & Performance Monitoring</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pillar 2: Green Economy */}
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <CardTitle>Green Economy</CardTitle>
                            <CardDescription>কৃষি থেকে High Value Manufacturing</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                                <p className="text-sm">Mango, Silk, Vegetable Processing Zone</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                                <p className="text-sm">Agro Cold Chain + Solar-Powered Storage</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                                <p className="text-sm">Waste-to-Bioenergy Plant</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                                <p className="text-sm">Renewable Component Manufacturing</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pillar 3: Knowledge & Innovation */}
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <CardTitle>Knowledge & Innovation City</CardTitle>
                            <CardDescription>Education to Entrepreneurship Pipeline</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-1 shrink-0" />
                                <p className="text-sm">University-Industry Collaboration Hub</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-1 shrink-0" />
                                <p className="text-sm">Startup Accelerator + Micro Grant + Maker Lab</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-1 shrink-0" />
                                <p className="text-sm">Digital Skill Program for All</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pillar 4: Smart Mobility */}
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Wifi className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <CardTitle>Smart Mobility & Infrastructure</CardTitle>
                            <CardDescription>পরিবেশবান্ধব যাতায়াত ব্যবস্থা</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-orange-600 mt-1 shrink-0" />
                                <p className="text-sm">Low Emission Public Transport (Smart Rickshaw)</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-orange-600 mt-1 shrink-0" />
                                <p className="text-sm">Integrated Bicycle Network + Walkable Street</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-orange-600 mt-1 shrink-0" />
                                <p className="text-sm">Smart Drainage + Flood Resilience</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pillar 5: Health & Environmental Justice */}
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-rose-100 dark:bg-rose-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Heart className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                            </div>
                            <CardTitle>Health & Food Safety</CardTitle>
                            <CardDescription>Environmental Justice for All</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-rose-600 mt-1 shrink-0" />
                                <p className="text-sm">Community Clinic with Digital Health Record</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-rose-600 mt-1 shrink-0" />
                                <p className="text-sm">Real-Time Food Safety Certification (QR-based)</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-rose-600 mt-1 shrink-0" />
                                <p className="text-sm">Industrial Waste Regulation Framework</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Flagship Programs */}
            <section className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-4 mb-12">
                        <Badge variant="outline" className="gap-2">
                            <Sparkles className="h-3 w-3" />
                            ফ্ল্যাগশিপ প্রোগ্রাম
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold">মূল উদ্যোগসমূহ</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Silicon Rajshahi */}
                        <Card className="overflow-hidden group hover:shadow-2xl transition-all">
                            <div className="h-48 bg-linear-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <Badge className="mb-2">Tech Innovation</Badge>
                                    <h3 className="text-white font-bold text-xl">Silicon Rajshahi: AI & Freelancing Hubs</h3>
                                </div>
                            </div>
                            <CardContent className="pt-6 space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    ৫টি নতুন অত্যাধুনিক সেন্টার স্থাপন — হাই-স্পিড ইন্টারনেট এবং AI ওয়ার্কস্টেশন সহ, তরুণদের ক্ষমতায়ন এবং স্থানীয় IT অর্থনীতি বৃদ্ধির জন্য।
                                </p>
                                <Button variant="outline" className="w-full gap-2">
                                    আরও জানুন <ArrowRight className="h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Project Padma */}
                        <Card className="overflow-hidden group hover:shadow-2xl transition-all">
                            <div className="h-48 bg-linear-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <Badge className="mb-2 bg-emerald-100 text-emerald-900">Green Living</Badge>
                                    <h3 className="text-white font-bold text-xl">Project Padma</h3>
                                </div>
                            </div>
                            <CardContent className="pt-6 space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    নদীর তীর পুনরুদ্ধার এবং ৫০,০০০ তাপ-প্রতিরোধী গাছ রোপণ করে শহরের তাপমাত্রা কমানো।
                                </p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>লক্ষ্য অগ্রগতি</span>
                                        <span className="font-semibold text-emerald-600">65%</span>
                                    </div>
                                    <Progress value={65} className="h-2" />
                                    <p className="text-xs text-muted-foreground">32,500 / 50,000 গাছ</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Digital Governance */}
                        <Card className="overflow-hidden group hover:shadow-2xl transition-all">
                            <div className="h-48 bg-linear-to-br from-violet-500 to-purple-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <Badge className="mb-2 bg-purple-100 text-purple-900">Citizen App</Badge>
                                    <h3 className="text-white font-bold text-xl">Report Corruption</h3>
                                </div>
                            </div>
                            <CardContent className="pt-6 space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    মেয়রের অফিসে সরাসরি লাইন। বেনামী এবং ব্লকচেইন-যাচাইকৃত।
                                </p>
                                <Button className="w-full gap-2">
                                    <Download className="h-4 w-4" />
                                    অ্যাপ ডাউনলোড করুন
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Roadmap Timeline */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center space-y-4 mb-12">
                    <Badge variant="outline" className="gap-2">
                        <Calendar className="h-3 w-3" />
                        বাস্তবায়ন পরিকল্পনা
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold">রূপান্তরের রোডম্যাপ</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        তিন ধাপে বাস্তবায়নযোগ্য — Immediate Reform, Strategic Infrastructure Build-up, Sustainable Growth Ecosystem
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Phase 1 */}
                    <Card className="border-l-4 border-l-blue-500">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <Badge variant="secondary">Phase 1</Badge>
                                    <CardTitle>Immediate Reform (প্রথম ১২-১৮ মাস)</CardTitle>
                                    <CardDescription>সিস্টেম ও প্রক্রিয়া বদলানো</CardDescription>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">Timeline</p>
                                    <p className="font-semibold">Q1 2024 - Q2 2025</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-medium">One Rajshahi Digital Portal চালু করা</p>
                                    <p className="text-sm text-muted-foreground">নাগরিক সেবা এক প্ল্যাটফর্মে আনা</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-medium">Complaint Tracking System + Public Dashboard</p>
                                    <p className="text-sm text-muted-foreground">প্রতিটি কাজ পরিমাপযোগ্য</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-medium">Online Permit / Trade License Automation</p>
                                    <p className="text-sm text-muted-foreground">রাজস্ব বাড়বে, দুর্নীতি কমবে</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Phase 2 */}
                    <Card className="border-l-4 border-l-emerald-500">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-900">Phase 2</Badge>
                                    <CardTitle>Strategic Infrastructure Build-up (২-৫ বছর)</CardTitle>
                                    <CardDescription>মৌলিক কাঠামো উন্নয়ন</CardDescription>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">Timeline</p>
                                    <p className="font-semibold">2025 - 2028</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Factory className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-medium">Mango & Silk Processing Cluster</p>
                                    <p className="text-sm text-muted-foreground">PPP (Public-Private Partnership) মডেল</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <TreePine className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-medium">Cold Chain & Solar Storage Center</p>
                                    <p className="text-sm text-muted-foreground">Build-Operate Model</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <GraduationCap className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-medium">Innovation & Startup Hub (University Linked)</p>
                                    <p className="text-sm text-muted-foreground">Co-Managed Facility</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Phase 3 */}
                    <Card className="border-l-4 border-l-purple-500">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="bg-purple-100 text-purple-900">Phase 3</Badge>
                                    <CardTitle>Sustainable Growth Ecosystem (৫+ বছর)</CardTitle>
                                    <CardDescription>উন্নয়ন-উৎপাদক শহর</CardDescription>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">Timeline</p>
                                    <p className="font-semibold">2028+</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-3">
                                <BarChart3 className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-medium">City Investment Fund গঠন</p>
                                    <p className="text-sm text-muted-foreground">স্থানীয় ব্যবসায়ী ও প্রবাসী বিনিয়োগ</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ExternalLink className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-medium">Green Export Corridor</p>
                                    <p className="text-sm text-muted-foreground">Dedicated Logistics Chain</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* KPI Framework */}
            <section className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-4 mb-12">
                        <Badge variant="outline" className="gap-2">
                            <BarChart3 className="h-3 w-3" />
                            পরিমাপযোগ্য ফলাফল
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold">KPI Framework</h2>
                        <p className="text-lg text-muted-foreground">প্রতি বছর নাগরিক দেখতে পাবে — আমরা এগোচ্ছি কিনা</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-medium text-muted-foreground">Digital Service</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold mb-2">80%</p>
                                <p className="text-sm text-muted-foreground">Online Service Usage Rate</p>
                                <p className="text-xs text-muted-foreground mt-2">লক্ষ্য: ৫ বছরে</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-medium text-muted-foreground">Economy</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold mb-2">২x</p>
                                <p className="text-sm text-muted-foreground">Agro Processing Output</p>
                                <p className="text-xs text-muted-foreground mt-2">দ্বিগুণ বৃদ্ধি</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-medium text-muted-foreground">Employment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold mb-2">+50%</p>
                                <p className="text-sm text-muted-foreground">Youth Retention Rate</p>
                                <p className="text-xs text-muted-foreground mt-2">তরুণ ধরে রাখা</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-medium text-muted-foreground">Environment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold mb-2">-30%</p>
                                <p className="text-sm text-muted-foreground">AQI Improvement Index</p>
                                <p className="text-xs text-muted-foreground mt-2">বায়ু মান উন্নতি</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <Card className="bg-linear-to-br from-primary to-emerald-600 text-primary-foreground border-0 shadow-2xl">
                    <CardContent className="p-12 text-center space-y-6">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                            <Users className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold">নাগরিক হিসেবে আমাদের ভূমিকা</h2>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto">
                            একটি শহরকে রূপান্তরিত করতে প্রশাসন প্রয়োজন, কিন্তু মালিক হয় মানুষ। রাজশাহী ২.০ বাস্তবায়নের চাবিকাঠি হলো — ownership shift।
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Input
                                type="email"
                                placeholder="আপনার ইমেইল দিন"
                                className="max-w-sm bg-white/10 border-white/20 text-white placeholder:text-white/60"
                            />
                            <Button size="lg" variant="secondary" className="gap-2">
                                <Send className="h-4 w-4" />
                                যোগ দিন
                            </Button>
                        </div>
                        <p className="text-xs opacity-75">
                            "We the Rajshahi" — নাগরিক কেবল ভোটার নয় — co-creator
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Footer Quote */}
            <section className="border-t bg-muted/50 py-12">
                <div className="container mx-auto px-4 text-center">
                    <blockquote className="text-xl md:text-2xl font-medium italic max-w-4xl mx-auto">
                        "আমরা শুধু পরিষ্কার শহর ছিলাম না — আমরা ছিলাম অগ্রসর, ন্যায্য ও উদ্ভাবনী একটি শহর।
                        এবং আমরা তা অন্য কেউ করে দেয়নি — আমরা নিজেরাই করেছি।"
                    </blockquote>
                    <p className="text-sm text-muted-foreground mt-6">— রাজশাহী ২.০ ভিশন</p>
                </div>
            </section>
        </div>
    )
}
