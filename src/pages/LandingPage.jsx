import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, ShieldCheck, Users, LayoutDashboard, Zap, CheckCircle2, Sparkles, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

const ParallaxLandingPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth spring physics for natural feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax transforms for different layers
    const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
    const midgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
    const foregroundY = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);
    const rotateX = useTransform(smoothProgress, [0, 0.2], [0, -5]);
    const scale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);
    const opacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden relative">

            {/* Fixed Background Layer - Slowest Parallax */}
            <motion.div
                style={{ y: backgroundY }}
                className="fixed inset-0 z-0 pointer-events-none"
            >
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30" />
                <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl opacity-30" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
            </motion.div>

            {/* Navigation - Sticky with blur */}
            <header className="fixed top-0 w-full border-b bg-background/70 backdrop-blur-xl z-50 supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 font-bold text-xl"
                    >
                        <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden">
                            <img src="/pulselogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            KBA Systems
                        </span>
                    </motion.div>

                    <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
                        {["Features", "Solutions", "Pricing", "About"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-muted-foreground hover:text-foreground transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}
                        <div className="h-6 w-px bg-border mx-2" />
                        <Link to="/sbuh-dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">SBUH</Link>
                        <Link to="/bl-bh-dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">BL/BH</Link>
                        <Link to="/crm-admin-dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">CRM</Link>
                        <Link to="/finance-dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Finance</Link>
                        <Link to="/vendor-dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Vendor</Link>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-3"
                    >
                        <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
                            <Link to="/dashboard">Sign In</Link>
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 shadow-lg shadow-primary/25" asChild>
                            <Link to="/dashboard">Get Started</Link>
                        </Button>
                    </motion.div>
                </div>
            </header>

            {/* Hero Section with Deep Parallax */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" >
                {/* Floating Orbs - Midground */}
                <motion.div
                    style={{ y: midgroundY }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-40 right-[20%] w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
                    />
                    <motion.div
                        animate={{
                            y: [0, 30, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute bottom-60 left-[15%] w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                    />
                </motion.div>

                {/* Hero Content - Foreground */}
                <motion.div
                    style={{ y: foregroundY, rotateX, scale, opacity }}
                    className="container mx-auto px-4 relative z-10 perspective-1000"
                >
                    <div className="max-w-5xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer backdrop-blur-sm">
                                <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
                                AI-Powered Analytics Now Available
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]"
                        >
                            <span className="block mb-2">Manage your</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
                                entire operation
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        >
                            The intelligent platform that brings budgeting, vendors, and CRM into perfect harmony.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                        >
                            <Button
                                size="lg"
                                className="h-16 px-10 text-lg bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 shadow-2xl shadow-primary/25 group rounded-full"
                                asChild
                            >
                                <Link to="/dashboard">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-16 px-10 text-lg border-2 rounded-full hover:bg-muted backdrop-blur-sm"
                            >
                                Watch Demo
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-muted-foreground"
                    >
                        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-current rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Parallax Dashboard Showcase */}
            <section className="relative py-32 overflow-hidden" >
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content - Moves faster */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                <Zap className="w-4 h-4" />
                                Real-time Insights
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Everything you need, <br />
                                <span className="text-muted-foreground">in one glance</span>
                            </h2>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our intelligent dashboard adapts to your workflow, showing you exactly what matters most at any given moment.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Live budget tracking with predictive alerts",
                                    "Vendor performance scoring",
                                    "Automated CRM workflows"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Image - Parallax Speed Difference */}
                        <div className="relative h-[600px]">
                            {/* Background Card - Slower */}
                            <motion.div
                                style={{ y: useTransform(smoothProgress, [0.1, 0.4], [100, -50]) }}
                                className="absolute top-20 -left-10 w-80 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
                            />

                            {/* Main Dashboard - Normal Speed */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
                            >
                                <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="flex-1 mx-4 flex justify-center">
                                        <div className="px-3 py-1 bg-background rounded-md text-xs text-muted-foreground flex items-center gap-2">
                                            <ShieldCheck className="w-3 h-3" />
                                            app.kbasystems.com
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        {[65, 40, 85].map((h, i) => (
                                            <div key={i} className="h-24 bg-muted rounded-lg relative overflow-hidden">
                                                <div className="absolute bottom-0 left-0 right-0 bg-primary/20" style={{ height: `${h}%` }} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-48 bg-muted rounded-lg flex items-end justify-between p-4 gap-2">
                                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                            <div key={i} className="flex-1 bg-primary rounded-t-sm transition-all hover:bg-purple-500" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Stats Card - Faster */}
                            <motion.div
                                style={{ y: useTransform(smoothProgress, [0.1, 0.4], [50, -100]) }}
                                className="absolute -bottom-10 -right-10 bg-card border border-border p-6 rounded-2xl shadow-2xl z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center">
                                        <TrendingUpIcon className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">+127%</p>
                                        <p className="text-sm text-muted-foreground">Growth this month</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Scroll Features Section */}
            <section id="features" className="relative py-32" >
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Badge variant="outline" className="mb-4">Features</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for scale</h2>
                        <p className="text-lg text-muted-foreground">
                            Every feature designed to grow with your business
                        </p>
                    </div>

                    <div className="space-y-32">
                        {[
                            {
                                icon: <BarChart3 className="w-8 h-8" />,
                                title: "Advanced Analytics",
                                description: "Deep insights into your spending patterns with AI-powered forecasting and anomaly detection.",
                                gradient: "from-blue-500 to-cyan-500",
                                align: "left"
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Vendor Intelligence",
                                description: "Automated vendor scoring, compliance tracking, and relationship management in one place.",
                                gradient: "from-purple-500 to-pink-500",
                                align: "right"
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: "Enterprise Security",
                                description: "SOC 2 Type II compliant with end-to-end encryption and granular access controls.",
                                gradient: "from-orange-500 to-red-500",
                                align: "left"
                            }
                        ].map((feature, i) => (
                            <FeatureRow key={i} feature={feature} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Parallax CTA Section */}
            <section className="relative py-40 overflow-hidden" >
                <motion.div
                    style={{ y: useTransform(smoothProgress, [0.6, 0.9], [0, -100]) }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-pink-600" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
                </motion.div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Ready to transform<br />your business?
                        </h2>
                        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                            Join thousands of companies already using KBA Systems to streamline their operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="h-16 px-10 text-lg bg-white text-primary hover:bg-white/90 shadow-2xl rounded-full"
                                asChild
                            >
                                <Link to="/dashboard">Get Started</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t bg-background/80 backdrop-blur-xl py-16" >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 font-bold text-xl mb-4">
                                <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                    <img src="/pulselogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                                </div>
                                KBA Systems
                            </div>
                            <p className="text-muted-foreground text-sm max-w-xs">
                                Empowering businesses with intelligent management solutions.
                            </p>
                        </div>

                        {[
                            { title: "Product", links: ["Features", "Pricing", "Security"] },
                            { title: "Company", links: ["About", "Careers", "Blog"] },
                            { title: "Resources", links: ["Docs", "Help", "Status"] }
                        ].map((section, i) => (
                            <div key={i}>
                                <h4 className="font-semibold mb-4">{section.title}</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="hover:text-foreground transition-colors">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Feature Row Component with Scroll Trigger
const FeatureRow = ({ feature, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const isLeft = feature.align === "left";

    return (
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`space-y-6 ${!isLeft ? "lg:order-2" : ""}`}
            >
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                    {feature.icon}
                </div>
                <h3 className="text-3xl font-bold">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                </p>
                <Button variant="ghost" className="group">
                    Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative ${!isLeft ? "lg:order-1" : ""}`}
            >
                <div className={`absolute -inset-4 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-3xl blur-2xl`} />
                <Card className="relative border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-8">
                        <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                            <div className={`h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-20 animate-pulse`} />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

const TrendingUpIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

export default ParallaxLandingPage;